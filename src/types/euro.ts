export interface EuroProps {
    rubRatesEuro: number[];
    isEuroChecked: boolean;
    euroRate: string;
}

export enum EuroTypes {
    CHANGE_EURO_LINE_STATE = 'CHANGE_EURO_LINE_STATE',
    ADD_EURO_RUB_RATE = 'ADD_EURO_RUB_RATE',
}

interface EuroActionChecked {
    type: EuroTypes.CHANGE_EURO_LINE_STATE;
    payload: boolean,
}

interface EuroActionAdd {
    type: EuroTypes.ADD_EURO_RUB_RATE;
    payload: number[],
}

export type EuroAction = EuroActionChecked | EuroActionAdd;