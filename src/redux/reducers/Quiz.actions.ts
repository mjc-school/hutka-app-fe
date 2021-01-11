import { createActions, createAction } from "../index";

export const QuizActions = createActions({
  loadConfig: createAction("quiz/loadConfig")(),
});
