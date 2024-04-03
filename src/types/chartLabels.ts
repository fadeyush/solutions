export interface ChartLabelsProps {
    labels: [];
}

export enum ChartLabelsTypes {
    ADD_LABELS = 'ADD_LABELS'
}

export interface ChartLabelsAction {
    type: ChartLabelsTypes.ADD_LABELS;
    payload: [],
}