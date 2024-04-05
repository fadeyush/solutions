export interface YuanProps {
    rubRatesYuan: number[];
    isYuanChecked: boolean;
    yuanRate: string;
}

export enum YuanTypes {
    CHANGE_YUAN_LINE_STATE = 'CHANGE_YUAN_LINE_STATE',
    ADD_YUAN_RUB_RATE = 'ADD_YUAN_RUB_RATE',
}

interface YuanActionChecked {
    type: YuanTypes.CHANGE_YUAN_LINE_STATE;
    payload: boolean,
}

interface YuanActionAdd {
    type: YuanTypes.ADD_YUAN_RUB_RATE;
    payload: number[],
}

export type YuanAction = YuanActionChecked | YuanActionAdd;
