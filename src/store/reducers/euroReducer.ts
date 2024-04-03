import { EuroAction, EuroProps, EuroTypes } from "../../types/euro";

const inittialState: EuroProps = {
    rubRatesEuro: [],
    isEuroChecked: false,
}

export const euroReducer = (state = inittialState, action:EuroAction): EuroProps => {
    switch (action.type) {
        case EuroTypes.CHANGE_EURO_LINE_STATE:
            return {...state, isEuroChecked: action.payload}
        default:
            return state
    }
};

export const addEuroAction = (payload: boolean) => { return {type: EuroTypes.CHANGE_EURO_LINE_STATE, payload: payload}};