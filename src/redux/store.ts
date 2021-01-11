import { configureStore } from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";

import { QuizReducer } from "./reducers/Quiz.reducer";

export const Store = configureStore({
  reducer: {
    counter: QuizReducer,
  },
  middleware: [ReduxThunk],
});
