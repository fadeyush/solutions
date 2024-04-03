import { EuroAction, EuroProps, EuroTypes } from "../../types/euro";

const inittialState: EuroProps = {
    rubRatesEuro: [],
    isEuroChecked: false,
}

export const euroReducer = (state = inittialState, action:EuroAction): EuroProps => {
    switch (action.type) {
        case EuroTypes.CHANGE_LINE_STATE:
            return {...state, isEuroChecked: action.payload}
        default:
            return state
    }
};