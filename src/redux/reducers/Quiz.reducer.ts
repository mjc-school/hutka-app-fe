import { createReducer } from "@reduxjs/toolkit";
import { QuizActions } from ".";

const initial = {
  config: undefined,
};

export const QuizReducer = createReducer(initial, (builder) => {
  builder.addCase(QuizActions.loadConfig.type, (state, action) => {
    state.config = action;
  });
});
