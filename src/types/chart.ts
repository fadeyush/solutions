export interface ChartProps {
    labels: any[];
    dates: any[];
}

export enum ChartTypes {
    ADD_LABELS = 'ADD_LABELS',
    ADD_DATES = 'ADD_DATES'
}

interface ChartLabelsAction {
    type: ChartTypes.ADD_LABELS;
    payload: any[],
}

interface ChartDatesAction {
    type: ChartTypes.ADD_DATES;
    payload: any[],
}

export type ChartAction = ChartDatesAction | ChartLabelsAction;