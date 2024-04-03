import { YuanAction, YuanProps, YuanTypes } from "../../types/yuan";

const inittialState: YuanProps = {
    rubRatesYuan: [],
    isYuanChecked: false,
}

export const yuanReducer = (state = inittialState, action:YuanAction): YuanProps => {
    switch (action.type) {
        case YuanTypes.CHANGE_LINE_STATE:
            return {...state, isYuanChecked: action.payload}
        default:
            return state
    }
};