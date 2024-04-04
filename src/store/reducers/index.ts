import { combineReducers } from "redux";
import { apiCounterReducer } from "./apiCounterReducer";
import { charReducer } from "./chartReducer";
import { euroReducer } from "./euroReducer";
import { dollarReducer } from "./dollarReducer";
import { yuanReducer } from "./yuanReducer";

export const rootReducer = combineReducers({
    apiCounter: apiCounterReducer,
    chart: charReducer,
    euro: euroReducer,
    dollar: dollarReducer,
    yuan: yuanReducer,
});

export type RootState = ReturnType<typeof rootReducer>;