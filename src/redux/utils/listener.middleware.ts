import axios from 'axios';
import { Action, AnyAction, Dispatch, MiddlewareAPI } from 'redux';
import {
    AppAction,
    AppActionContext,
    AppActionContextArgs,
} from './actionCreators';

/**
 * This type prevents us from passing an `ActionContext` object, which is not the action with the payload.
 */
// tslint:disable-next-line: ban-types
export type ListenerDispatch<A extends Action = AnyAction> = <T extends A>(
    action: T extends Function ? never : T,
) => T;

// keep an iterator in memory for graph
const iterator = { value: 0 };

// It's a Typescript solution to retrieve a object in a composed Type
// If you have a type like : type Union = Object1 | Object2 | Object3
// You can precise a discriminant to extract object you want to target
// cf this link for more information : https://stackoverflow.com/questions/48750647/get-type-of-union-by-discriminant
type DiscriminateUnion<T, K extends keyof T, V extends T[K]> = T extends Record<
    K,
    V
>
    ? T
    : never;

type ListenerActionReturn = void | AppAction | Promise<AppAction | void>;

export type ListenerAction<S, T extends AppAction, V> = (
    state: S,
    action: DiscriminateUnion<T, 'type', V>,
) => ListenerActionReturn;

export interface ListenerActionFromContextArgs<S, T> {
    getState: () => S;
    action: T;
    dispatch: ListenerDispatch;
}

export type ListenerActionContextBase<S, T> = (
    args: ListenerActionFromContextArgs<S, T>,
) => void;

export type ListenerActionFromContext<
    S,
    T extends AppActionContext
> = ListenerActionContextBase<S, ReturnType<T>>;

export interface ListenerMiddlewareConfig {
    generateGraph?: boolean;
    isTest?: boolean;
}

/**
 * Creates a middleware that support listeners.
 *
 * _myModule.ts_
 *
 * ```
 * const myModule = createListenerMiddleware<AppState>();
 *
 * export const { addListener, middleware } = myModule;
 * ```
 *
 * _createAppStore.ts_
 *
 * ```
 * import { middleware as myModuleMiddleware } from './myModule.ts`;
 * ...
 * const middleware = [myModuleMiddleware];
 * ...
 * ```
 *
 * _myModule.listeners.ts_
 *
 * ```
 * import { addListener } from './myModule.ts`;
 *
 * addListener(...)
 * ```
 */
export const createListenerMiddleware = <S>() => {
    /**
     * @deprecated Use `dispatch` parameter under ListenerAction instead.
     */
    type SmartListenerAction<T extends AppAction, V> = (
        store: MiddlewareAPI<Dispatch, S>,
        action: DiscriminateUnion<T, 'type', V>,
    ) => void;

    enum ListenerType {
        ListenerAction,
        SmartListenerAction,
    }

    interface Listener {
        listenerType: ListenerType;
        action:
            | ListenerAction<any, any, string>
            | SmartListenerAction<any, string>;
        // TODO: Once we get ride of the addListenerOld and deprecated stuff here we could remove that
        destructuringArgs?: boolean;
        merge?: boolean;
        once?: boolean;
    }

    const listeners: Map<string, Listener[]> = new Map();

    function addAction(type: string, listener: Listener) {
        if (listeners.get(type) === undefined) {
            listeners.set(type, [listener]);
        } else {
            // @ts-ignore - already tested
            listeners.get(type).push(listener);
        }
    }

    function removeAction(type: string, listener: Listener) {
        const listenerActions = listeners.get(type);
        if (listenerActions) {
            const i = listenerActions.indexOf(listener);
            if (i !== -1) {
                listenerActions.splice(i, 1);
            }
            listeners.set(type, listenerActions);
        }
    }

    /**
     * @param type to listen (should be enum type) `extends string` is mandatory to test correctly the Enum's value
     *
     * @description
     * Be careful to not access the state after await on something since you won't work with the latest state.
     *
     * @example
     * addListener(Actions.MY_ACTION)<ActionsType>((state, action) => { ... })
     *
     * @returns
     * Action can return nothing or an action to dispatch
     * This action can be a Promise<AppAction>
     * Middleware is in charge to dispatch for you the action
     *
     * @deprecated Use the new syntax for adding listener. Please refer to addListenerNew for more details.
     */
    function addListenerOld<V extends string>(types: V | V[]) {
        return <T extends AppAction>(
            listenerAction: ListenerAction<S, T, V>,
        ) => {
            const action = {
                listenerType: ListenerType.ListenerAction,
                // Typescript doesn't want to convert our V generic into a string because it might be
                // something more specific (like a union) and wouldn't be true. Because we are driving that
                // we can ignore that warning with the `as any` cast first.
                action: (listenerAction as any) as ListenerAction<
                    any,
                    any,
                    string
                >,
            };

            (Array.isArray(types) ? types : [types]).forEach(type => {
                addAction(type, action);
            });
        };
    }

    /**
     * @param types to listen (should be enum type) `extends string` is mandatory to test correctly the Enum's value
     *
     * @summary Add a listener to an action and preserves its context.
     *
     * @description It has been chosen to stop support returning a promise to have only one path, so we now enforce
     * to always use dispatch. That way it is consistent across all listeners and easier to test, since there is only
     * one path possible. Also, it has been decided to replace `state` with `getState` to ensure people always have the
     * latest version of the state. Otherwise people would think if would have been up-to-date after doing async tasks,
     * and listener wouldn't behaves has expected.
     *
     * @example
     * addListener(Actions.myAction, ({ getState, action, dispatch }) => { ... })
     */
    function addListenerNew<V extends AppActionContextArgs>(
        types: V | V[],
        listenerAction: ListenerActionFromContext<S, V>,
    ) {
        const action = {
            listenerType: ListenerType.ListenerAction,
            destructuringArgs: true,
            action: listenerAction,
        };

        (Array.isArray(types) ? types : [types]).forEach(actionContext => {
            addAction(actionContext.type, action);
        });
    }

    /**
     * @param types to listen (action context created with `makeActionContext`)
     *
     * @example
     * addListener(Actions.myAction, ({ getState, action, dispatch }) => { ... })
     *
     * @example
     * addListener(Actions.MY_ACTION)<ActionsType>((state, action) => { ... }) // This one is deprecated and will be removed in future
     *
     * @returns
     * When using the old syntax only - Action can return nothing or an action to dispatch
     * This action can be a Promise<AppAction>
     * Middleware is in charge to dispatch for you the action
     */
    function addListener<V extends AppActionContextArgs>(
        types: V | V[],
        listenerAction: ListenerActionFromContext<S, V>,
    ): void;
    /**
     * @deprecated Use the `addListener(MyAction.test, ({action, dispatch, getState}) => {})` syntax instead
     */
    function addListener<V extends string>(
        types: V | V[],
    ): <T extends AppAction>(listenerAction: ListenerAction<S, T, V>) => void;
    function addListener(types: any, listenerAction?: any): any {
        if (listenerAction) {
            return addListenerNew(types, listenerAction);
        } else {
            return addListenerOld(types);
        }
    }

    /**
     * @deprecated Use addListener instead the same way addListeners was used
     */
    function addListeners<V extends string>(types: V[]) {
        return <T extends AppAction>(action: ListenerAction<S, T, V>) => {
            types.forEach(type => addListener(type)<T>(action));
        };
    }

    /**
     * @param type to listen (should be enum type) `extends string` is mandatory to test correctly the Enum's value
     *
     * With SmartListener, you can register a function with 2 parameters : (store and action)
     * it should be use only for particular use/cases in your listener. for example you need to use dispatch function more
     * than once
     * The preferable way is to use ListenerAction
     *
     * @deprecated Use the new `dispatch` parameter from addListener instead
     */
    function addSmartListener<V extends string>(type: V) {
        return <T extends AppAction>(
            listenerAction: SmartListenerAction<T, V>,
        ) => {
            const action = {
                listenerType: ListenerType.SmartListenerAction,
                action: listenerAction,
            };
            addAction(type, action);
        };
    }

    type MergeOnceListenerCallback = (
        actions: Array<AppAction<Action<string>, any>>,
    ) => void;

    interface MergeOnceListenerPath {
        actionsContexts: AppActionContext | AppActionContext[];
        callback?: MergeOnceListenerCallback;
    }

    /**
     * Registers listeners for all actions and wait for all of them being dispatched to resolve.
     * @param actionsContexts All actions that need to be dispatched
     * @param callback Data to return once every actions has been dispatched
     */
    async function waitForAllActionsToBeDispatched<
        T extends MergeOnceListenerCallback,
        V extends AppActionContext
    >(actionsContexts: V | V[], callback?: T) {
        const actions = await Promise.all(
            (Array.isArray(actionsContexts)
                ? actionsContexts
                : [actionsContexts]
            ).map(
                async actionContext =>
                    new Promise<any>(resolve => {
                        const registerPromise = {
                            listenerType: ListenerType.ListenerAction,
                            action: (({ action }) =>
                                resolve(action)) as ListenerAction<
                                any,
                                any,
                                string
                            >,
                            once: true,
                            merge: true,
                            destructuringArgs: true,
                        } as Listener;
                        addAction(actionContext.type, registerPromise);
                    }),
            ),
        );

        return {
            callback,
            actions: actions as Array<ReturnType<V>>,
        };
    }

    /**
     * Executes a callback when all specified actions has been dispatched
     * @param actionsContexts All actions that need to be dispatched
     * @param callback Executed when all actions listening are triggered
     */
    async function mergeOnceListener(
        actionsContexts: AppActionContextArgs | AppActionContextArgs[],
        callback: MergeOnceListenerCallback,
    ): Promise<void>;
    /**
     * Executes a specific callback when all actions of a path has been dispatched and cancel other paths
     * @param paths Every paths possible that contains all actions to register and the callback to run
     */
    async function mergeOnceListener(
        paths: MergeOnceListenerPath[],
    ): Promise<void>;
    async function mergeOnceListener<V extends AppActionContextArgs>(
        ...args:
            | [V | V[], MergeOnceListenerCallback]
            | [MergeOnceListenerPath[]]
    ) {
        const data =
            args.length === 1
                ? await Promise.race(
                      args[0].map(({ actionsContexts, callback }) =>
                          waitForAllActionsToBeDispatched(
                              actionsContexts,
                              callback,
                          ),
                      ),
                  )
                : await waitForAllActionsToBeDispatched(args[0], args[1]);

        if (data.callback) {
            data.callback(data.actions);
        }
    }

    const flushListener = () => listeners.clear();

    const pushDataToActionsAnalyzeServer = (
        from: string,
        to: string,
        data: any,
    ) => {
        axios
            .post(
                `http://localhost:3000/add?i=${iterator.value++}&from=${from}&to=${to}`,
                { ...data },
            )
            .catch(() => {
                // Do nothing on error
            });
    };

    const overrideStoreForGraph = (
        store: MiddlewareAPI<Dispatch, S>,
        action: AppAction,
    ) => ({
        ...store,
        dispatch: (actionToDispatch: AppAction) => {
            pushDataToActionsAnalyzeServer(
                action.type,
                actionToDispatch.type,
                actionToDispatch.payload,
            );
            return store.dispatch(actionToDispatch);
        },
    });

    const middleware = (config: ListenerMiddlewareConfig) => {
        function execAsync(callback: () => void) {
            // The reason for this is that without the setImmediate, each listeners waits for the completion of the first listener
            // in the "listenerActions map AND also wait for the end its "bubbling events" (subsequent "store.dispatch") before calling the next one.
            // This can bring some problems as the order in which we import those listeners is affecting the app behaviour a lot.
            // It can also bring some performance issue since one (really slow) listener could block the others. By applying this setImmediate,
            // we're changing all call to listeners by making them really "async". The javascript "tick" (https://hackernoon.com/understanding-js-the-event-loop-959beae3ac40, see "The Event Loop")
            // will than add all listeners function inside it's "call stack" and will not bubble deep down one specific listener before calling the next one.
            // Some performance tests has been done https://getjive.atlassian.net/browse/GTCMOB-1186 and a summary is given below.
            if (config.isTest) {
                // We need to remove setTimeout in test environment to make sure we can still "await" for listener completion before making any assertions.
                return callback();
            } else {
                // This promise is only to be able to unit test that our "setImmediate" is working as expected.
                // It is not changing the desired behaviour
                return new Promise<void>(resolve => {
                    // Performance tests results based on different solutions we tried for dispatch 60 actions back to back:
                    // without setImmediate or setTimeout: 1401 milliseconds
                    // with setTimeout when not using react-native-background: 5374 milliseconds
                    // with setTimeout when using react-native-background: 6837 milliseconds
                    // with setImmediate: 640 milliseconds
                    // In conclusion, the cost of using setTimeout was too high for a core feature like that. setTimeout is doing
                    // some back and forth from javascript to native and it slows down the process really quick. setImmediate doesn't
                    // require anything from native, so it is quicker and runs fine when the application is in background.
                    setImmediate(() => {
                        resolve(callback());
                    });
                });
            }
        }

        const runListener = async (
            listener: Listener,
            store: MiddlewareAPI,
            action: AppAction,
        ) => {
            if (listener.once) {
                removeAction(action.type, listener);
            }

            switch (listener.listenerType) {
                case ListenerType.ListenerAction:
                    const { getState, dispatch } = config.generateGraph
                        ? (overrideStoreForGraph(
                              store,
                              listener.merge
                                  ? ({
                                        type: 'MergeOnceListenerAction',
                                    } as AppAction)
                                  : action,
                          ) as MiddlewareAPI)
                        : store;

                    let actionToDispatch: void | AppAction<Action<any>, any>;
                    if (listener.destructuringArgs) {
                        await (listener.action as ListenerActionFromContext<
                            S,
                            any
                        >)({
                            getState,
                            action,
                            // Covering cases where multiple listeners listen to the same action. If first listener dispatch an action
                            // that changes the store immediately (aka: By hitting a reducer), the second listener will have the updated
                            // store as argument instead of the one present at the time the action has been dispatched. Adding a setImmediate
                            // around the dispatch ensure that every listeners listening to the same action will get the same state at entry point

                            // By the time we completes the listeners refactor in unit tests, we need this `isTestEnvironment` to prevent
                            // impacting others. This is this exact same precondition as the test environment check in `execAsync` method.
                            dispatch: (config.isTest
                                ? dispatch
                                : (...args) => {
                                      if (args[0]?.meta?.synchronous) {
                                          dispatch(args[0]);
                                      } else {
                                          setImmediate(() => dispatch(...args));
                                      }
                                  }) as Dispatch,
                        });
                    } else {
                        actionToDispatch = await (listener.action as ListenerAction<
                            S,
                            any,
                            any
                        >)(getState(), action);
                    }

                    try {
                        if (actionToDispatch) {
                            if (config.generateGraph) {
                                pushDataToActionsAnalyzeServer(
                                    action.type,
                                    actionToDispatch.type,
                                    actionToDispatch.payload,
                                );
                            }
                            store.dispatch(actionToDispatch);
                        }
                    } catch (error) {
                        console.error(
                            'Error to dispatch action, Promise on error',
                            error.message,
                            error.stack,
                        );
                    }

                    break;
                case ListenerType.SmartListenerAction:
                    return (listener.action as SmartListenerAction<any, any>)(
                        config.generateGraph
                            ? (overrideStoreForGraph(
                                  store,
                                  action,
                              ) as MiddlewareAPI)
                            : store,
                        action,
                    );
            }
        };

        return (store: MiddlewareAPI) => (next: Dispatch) => async (
            action: AppAction,
        ) => {
            next(action);

            const listenerActions = listeners.get(action.type) || [];

            // Gives the ability to hook on Promises when `dispatch` is called. So during unit tests
            // we can just do `await store.dispatch(...)` and it will wait for all actions to be executed.
            return Promise.all(
                listenerActions.map(listenerAction =>
                    execAsync(() => runListener(listenerAction, store, action)),
                ),
            );
        };
    };

    return {
        addListener,
        addListeners,
        addSmartListener,
        mergeOnceListener,
        flushListener,
        middleware,
    };
};
