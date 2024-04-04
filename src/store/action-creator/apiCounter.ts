import { Dispatch } from "redux";
import { ApiCounterAction, ApiCounterTypes } from "../../types/apiCounter";
import { getRubValue } from "../../components/helpers/getRubValue";
import { EuroAction, EuroTypes } from "../../types/euro";
import { getCurrencie } from "../../components/api/getCurrencie";
import { DollarAction, DollarTypes } from "../../types/dollar";
import { YuanAction, YuanTypes } from "../../types/yuan";
export const getChartValues = (dates:any[], currencie:string) => {
    return async (dispatch: Dispatch<ApiCounterAction | EuroAction | DollarAction | YuanAction>) => {
        try {
            let response;
            const dateNow = new Date();
            dates.forEach(async(date)=>{
                const dateCur = new Date(date)
                if(dateCur<=dateNow) {
                    response = await getCurrencie(date, currencie);
                    const value:number = getRubValue(response, currencie)!;
                    currencie === 'eur' ? 
                    dispatch({type: EuroTypes.ADD_EURO_RUB_RATE, payload: value}) : 
                    currencie === 'usd' ?
                    dispatch({type: DollarTypes.ADD_DOLLAR_RUB_RATE, payload: value}) :
                    dispatch({type: YuanTypes.ADD_YUAN_RUB_RATE, payload: value});
                    dispatch({type: ApiCounterTypes.ADD_API, payload: 1});
                }
            });
        } catch (e) {
            console.log(e)
        }
    }
}