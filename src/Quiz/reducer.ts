import { createReducer } from '@reduxjs/toolkit';
import QuizActions from './actions';

const initial = {
    config: {}
};

// console.log(JSON.stringify(QuizActions, null, 2));

export default createReducer(initial, (builder) => {
    builder.addCase(QuizActions.loadConfig.type, (state, action) => {
        state.config = action;
    });
});
