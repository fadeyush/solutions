import { DollarAction, DollarProps, DollarTypes } from "../../types/dollar";

const inittialState: DollarProps = {
    rubRatesDollar: [],
    isDollarChecked: false,
    dollarRate: 'usd'
}

export const dollarReducer = (state = inittialState, action:DollarAction): DollarProps => {
    switch (action.type) {
        case DollarTypes.CHANGE_DOLLAR_LINE_STATE:
            return {...state, isDollarChecked: action.payload}
        case DollarTypes.ADD_DOLLAR_RUB_RATE:
                return {...state, rubRatesDollar: [...state.rubRatesDollar, action.payload]}
        default:
            return state
    }
};

export const addDollarAction = (payload: boolean) => { return {type: DollarTypes.CHANGE_DOLLAR_LINE_STATE, payload: payload}};