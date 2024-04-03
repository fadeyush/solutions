import { ApiCounterProps, ApiCounterTypes, ApiCounterAction } from "../../types/apiCounter";

const inittialState: ApiCounterProps = {
    count: 0
}

export const apiCounterReducer = (state = inittialState, action:ApiCounterAction): ApiCounterProps => {
    switch (action.type) {
        case ApiCounterTypes.ADD_API:
            return {...state, count: state.count + action.payload}
        default:
            return state
    }
};