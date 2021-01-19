import { configureStore } from '@reduxjs/toolkit';
import ReduxThunk from 'redux-thunk';

import { QuizReducer } from '../Quiz';

export const Store = configureStore({
    reducer: {
        quiz: QuizReducer
    },
    middleware: [ReduxThunk]
});
