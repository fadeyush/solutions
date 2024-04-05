export interface DollarProps {
    rubRatesDollar: number[];
    isDollarChecked: boolean;
    dollarRate: string;
}

export enum DollarTypes {
    CHANGE_DOLLAR_LINE_STATE = 'CHANGE_DOLLAR_LINE_STATE',
    ADD_DOLLAR_RUB_RATE = 'ADD_DOLLAR_RUB_RATE',
}

interface DollarActionChecked {
    type: DollarTypes.CHANGE_DOLLAR_LINE_STATE;
    payload: boolean,
}

interface DollarActionAdd {
    type: DollarTypes.ADD_DOLLAR_RUB_RATE;
    payload: number[],
}

export type DollarAction = DollarActionChecked | DollarActionAdd;