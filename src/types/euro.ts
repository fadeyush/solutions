interface RubRateProps {
    rubRate: number;
}

export interface EuroProps {
    rubRatesEuro: RubRateProps[];
    isEuroChecked: boolean;
}

export enum EuroTypes {
    CHANGE_EURO_LINE_STATE = 'CHANGE_EURO_LINE_STATE'
}

interface EuroActionChecked {
    type: EuroTypes.CHANGE_EURO_LINE_STATE;
    payload: boolean,
}

export type EuroAction = EuroActionChecked;