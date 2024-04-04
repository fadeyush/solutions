import { Dispatch } from "redux";
import { ApiCounterAction, ApiCounterTypes } from "../../types/apiCounter";
import { getRubValue } from "../../components/helpers/getRubValue";
import { EuroAction, EuroTypes } from "../../types/euro";
import { getCurrencie } from "../../components/api/getCurrencie";
export const fetchApi = (currencie:string) => {
    return async (dispatch: Dispatch<ApiCounterAction | EuroAction>) => {
        try {
            const date = '2024-03-28';

            const response = await getCurrencie(date, currencie);
            console.log(response);

            // const value:number = getRubValue(response, currencie)!;
            // dispatch({type: EuroTypes.ADD_EURO_RUB_RATE, payload: value})
            dispatch({type: ApiCounterTypes.ADD_API, payload: 1});
        } catch (e) {
            console.log(e)
        }
    }
}