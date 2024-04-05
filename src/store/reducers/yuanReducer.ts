import { YuanAction, YuanProps, YuanTypes } from "../../types/yuan";

const inittialState: YuanProps = {
    rubRatesYuan: [],
    isYuanChecked: false,
    yuanRate: 'cny'
}

export const yuanReducer = (state = inittialState, action:YuanAction): YuanProps => {
    switch (action.type) {
        case YuanTypes.CHANGE_YUAN_LINE_STATE:
            return {...state, isYuanChecked: action.payload}
        case YuanTypes.ADD_YUAN_RUB_RATE:
                return {...state, rubRatesYuan: action.payload}
        default:
            return state
    }
};

export const addYuanAction = (payload: boolean) => { return {type: YuanTypes.CHANGE_YUAN_LINE_STATE, payload: payload}};