import axios from "axios";

export async function getCurrencie(date:string, currencie: string ){
    try {
        const response = await axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currencie}.json`);
        return response.data;
    } catch(e) {
        console.log(e)
    }
};