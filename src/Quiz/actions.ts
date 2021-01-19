import { createActions, createAction } from '../redux/index';

export default createActions({
    loadConfig: createAction('quiz/loadConfig')()
});
