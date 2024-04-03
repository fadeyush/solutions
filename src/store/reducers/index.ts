import { combineReducers } from "redux";
import { apiCounterReducer } from "./apiCounterReducer";
import { chartLabelsReducer } from "./chartLabelsReducer";

export const rootReducer = combineReducers({
    apiCounter: apiCounterReducer,
    chartLabels: chartLabelsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;