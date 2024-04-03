interface RubRateProps {
    rubRate: number;
}

export interface DollarProps {
    rubRatesDollar: RubRateProps[];
    isDollarChecked: boolean;
}

export enum DollarTypes {
    CHANGE_DOLLAR_LINE_STATE = 'CHANGE_DOLLAR_LINE_STATE'
}

interface DollarActionChecked {
    type: DollarTypes.CHANGE_DOLLAR_LINE_STATE;
    payload: boolean,
}

export type DollarAction = DollarActionChecked;