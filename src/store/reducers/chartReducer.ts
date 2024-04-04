import { ChartAction, ChartProps, ChartTypes } from "../../types/chart";

const inittialState: ChartProps = {
    labels: [],
    dates: []
}

export const charReducer = (state = inittialState, action:ChartAction): ChartProps => {
    switch (action.type) {
        case ChartTypes.ADD_LABELS:
            return {...state, labels: action.payload}
        case ChartTypes.ADD_DATES:
            return {...state, dates: action.payload}
        default:
            return state
    }
};
