import React, {createContext} from "react";
import {Header} from "./Header";
import {Converter} from "./Converter";

export const CurrencyValue = createContext(null);
export function Service(){
    const [data, setData] = React.useState({});

    React.useEffect(()=>{
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
            .then(value => value.json())
            .then(value => value.filter(result => result.cc === 'EUR' || result.cc === 'USD'))
            .then((value) =>{
                const currency1 = {'USD': value[0].rate}
                const currency2 = {'EUR': value[1].rate};
                const currencies = [currency1, currency2];
                setData(currencies);
                return currencies
            })
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