import {api} from "./api";
export const currenciesService ={
    getCurr: ()=> api.get('/NBUStatService/v1/statdirectory/exchange?json')
}
