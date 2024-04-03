import { Dispatch } from "redux";
import { ApiCounterAction, ApiCounterTypes } from "../../types/apiCounter";
import axios from "axios";
export const fetchApi = () => {
    return async(dispatch: Dispatch<ApiCounterAction>) => {
        try {
            const date = '2024-03-28';
            const currencie = 'eur';
            axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currencie}.json`)
            .then((response) => {
              console.log(response.data)
            })
            
            dispatch({type: ApiCounterTypes.ADD_API, payload: 1})
        } catch (e) {
            console.log(e)
        }
    }
}