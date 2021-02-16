import { createActions, createAction } from '../redux/index';

export default createActions({
    loadConfig: createAction('dashboard/loadRoutes'),
    chooseRoute: createAction('dashboard/chooseRoute'),
});
