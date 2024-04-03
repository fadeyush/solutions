import { ChartLabelsAction, ChartLabelsProps, ChartLabelsTypes } from "../../types/chartLabels";

const inittialState: ChartLabelsProps = {
    labels: []
}

export const chartLabelsReducer = (state = inittialState, action:ChartLabelsAction): ChartLabelsProps => {
    switch (action.type) {
        case ChartLabelsTypes.ADD_LABELS:
            return {...state, labels: action.payload}
        default:
            return state
    }
};