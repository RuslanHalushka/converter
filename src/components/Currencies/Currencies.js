import React, {createContext} from "react";
import {Header, Converter} from "../index";
import {currenciesService} from "../../services";

export const CurrencyValue = createContext(null);
export function Currencies(){
    const [data, setData] = React.useState({});

    React.useEffect(()=>{
        currenciesService.getCurr()
            .then(value => value.data)
            .then(value => value.filter(result => result.cc === 'EUR' || result.cc === 'USD'))
            .then(value => setData(value))
            .catch((err)=> {
                console.log(err);
                alert('Дані не прийшли');
            })
    }, []);

    return(
        <CurrencyValue.Provider value={data}>
            <Header/>
            <Converter/>
        </CurrencyValue.Provider>
    )
}