interface RubRateProps {
    rubRate: number;
}

export interface YuanProps {
    rubRatesYuan: RubRateProps[];
    isYuanChecked: boolean;
}

export enum YuanTypes {
    CHANGE_YUAN_LINE_STATE = 'CHANGE_YUAN_LINE_STATE'
}

interface YuanActionChecked {
    type: YuanTypes.CHANGE_YUAN_LINE_STATE;
    payload: boolean,
}

export type YuanAction = YuanActionChecked;