import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';

import { QuizReducer } from '../Quiz';
import { DasboardReducer } from '../Dashboard';

export const Store = configureStore({
    reducer: {
        quiz: QuizReducer,
        dashboard: DasboardReducer,
    },
    middleware: [ReduxThunk],
});

console.log('Store', Store.getState());