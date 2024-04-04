import { Dispatch } from "redux";
import { ApiCounterAction, ApiCounterTypes } from "../../types/apiCounter";
import { getRubValue } from "../../components/helpers/getRubValue";
import { EuroAction, EuroTypes } from "../../types/euro";
import { getCurrencie } from "../../components/api/getCurrencie";
export const fetchApi = (dates:any[], currencie:string) => {
    return async (dispatch: Dispatch<ApiCounterAction | EuroAction>) => {
        try {
            // const date = '2024-03-28';
            let response
            dates.forEach(async(date)=>{
                response = await getCurrencie(date, currencie);
                console.log(response);
                
                // dispatch({type: EuroTypes.ADD_EURO_RUB_RATE, payload: value})
            if (response) {
                const value:number = getRubValue(response, currencie)!;
                console.log(value);
            } else {
                return

            }
            })

            // const response = await getCurrencie(date, currencie);



            dispatch({type: ApiCounterTypes.ADD_API, payload: 1});
        } catch (e) {
            console.log(e)
        }
    }
}