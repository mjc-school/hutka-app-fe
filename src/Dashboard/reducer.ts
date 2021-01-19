import { createReducer } from '@reduxjs/toolkit';
// import {DashboardActions} from './';
import { routeNames, routes } from '../utils/kmlparser';
import { createActions, createAction } from '../redux/index';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  const index = getRandomInt(routes.length);


const initial = {
    routeNames,
    routes,
    choosed: routes[index],
    choosedName: routeNames[index]
};


const DashboardActions =  createActions({
    loadConfig: createAction('dashboard/loadRoutes'),
    chooseRoute: createAction('dashboard/chooseRoute'),
});

// console.log(JSON.stringify(QuizActions, null, 2));

export default createReducer(initial, (builder) => {
    builder.addCase(DashboardActions.chooseRoute.type, (state, action:any) => {
        state.choosed = action.payload;
    });
});
