import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { Action } from 'redux';

export * from '@reduxjs/toolkit';

type PayloadActionMeta = {
    dispatchedTime: number;
    stack?: string;
};

export type AppAction<A = Action, P = any> = A &
    (
        | PayloadAction<P, string, PayloadActionMeta, boolean>
        | PayloadAction<P, string, PayloadActionMeta>
    );

export interface AppActionContextArgs<
    T = any,
    P = any,
    ExternalActionData = {},
    Args extends any[] = any[]
> {
    (...args: Args): AppAction<Action<T>, P> & ExternalActionData;
    type: T;
}

export interface AppActionContext<T = any, P = any, ExternalActionData = {}> {
    (payload: P): AppAction<Action<T>, P> & ExternalActionData;
    type: T;
}

/**
 * Creates an action with the right typing for its payload.
 *
 * @example
 * const firstAction = makeActionContext('actions/first')()
 * console.log(firstAction.type) // prints 'actions/first'
 * store.dispatch(firstAction()) // It will force no payload
 *
 * @example
 * const firstAction = makeActionContext('actions/first')<boolean>()
 * console.log(firstAction.type) // prints 'actions/first'
 * store.dispatch(firstAction(true)) // It will force a boolean as payload
 *
 * @param type Action type name
 * @deprecated Use `createAction` instead
 */
export function makeActionContext<T extends string>(type: T) {
    return <P = void>() =>
        createAction(type, (payload: P) => ({
            payload,
            meta: {
                dispatchedTime: Date.now()
                // Uncomment if you need additional stack information
                // stack : new Error().stack,
            }
        }));
}

/**
 * Creates an action with the right typing for its payload and makes it as an error.
 *
 * @param type Action type name
 */
export function makeErrorActionContext<T extends string>(type: T) {
    return <P = void>() =>
        createAction(type, (payload: P) => ({
            payload,
            error: true,
            meta: {
                dispatchedTime: Date.now()
                // Uncomment if you need additional stack information
                // stack : new Error().stack,
            }
        }));
}

/**
 * Creates an action with the right typing for its payload and makes it as a synchronous dispatch and reducer application
 * @param type Action type name
 */
export function makeSynchronousActionContext<T extends string>(type: T) {
    return <P = void>() =>
        createAction(type, (payload: P) => ({
            payload,
            meta: {
                synchronous: true,
                dispatchedTime: Date.now()
                // Uncomment if you need additional stack information
                // stack : new Error().stack,
            }
        }));
}

/**
 * Creates a bundle of actions and adds type that can be used by reducers to infer payload type.
 *
 * @example
 * export const MyActions = createActions({
 *   firstAction: makeActionContext('myActions/first')<boolean>(),
 *   secondAction: makeActionContext('myActions/second')<number>(),
 * })
 *
 * export const MyReducer = (state: ... = INITIAL_STATE, action: typeof MyActions.Type) => {
 *   switch (action.type) {
 *     case MyActions.firstAction.type:
 *       // action.payload === boolean
 *
 *     case MyActions.secondAction.type:
 *       // action.payload === number
 *   }
 * }
 */
export function createActions<
    T extends { [key: string]: any },
    K extends keyof T
>(actions: T) {
    return actions as T & {
        Type: ReturnType<T[K]>;
    };
}
