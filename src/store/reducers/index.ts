import { combineReducers } from "redux";
import { apiCounterReducer } from "./apiCounterReducer";
export const rootReducer = combineReducers({
    apiCounter: apiCounterReducer,
});