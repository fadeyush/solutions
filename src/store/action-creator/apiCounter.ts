import { Dispatch } from "redux";
import { ApiCounterAction, ApiCounterTypes } from "../../types/apiCounter";
import axios from "axios";
import { getRubValue } from "../../components/helpers/getRubValue";
import { EuroAction, EuroTypes } from "../../types/euro";
export const fetchApi = () => {
    return async(dispatch: Dispatch<ApiCounterAction | EuroAction>) => {
        try {
            const date = '2024-03-28';
            const currencie = 'eur';
            const response = await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currencie}.json`);
            const value:number = getRubValue(response.data, currencie)!;
            console.log(response.data)
            dispatch({type: EuroTypes.ADD_EURO_RUB_RATE, payload: value})
            dispatch({type: ApiCounterTypes.ADD_API, payload: 1});
        } catch (e) {
            console.log(e)
        }
    }
}