import React from "react";
import {CurrencyValue} from "./Service";
import './index.css'
export const Header = () => {

    const [state, setState] = React.useState('11111');
    const data = React.useContext(CurrencyValue);


    React.useEffect(()=>{
        const arr = [];
        for (const i in data) {
            const curr = Object.keys(data[i]).shift();
            const value = Object.values(data[i]).shift();
            const res = `${curr}/UAH: ${value}`;
            arr.push(res)
        }
        setState([arr[0], '; ', arr[1]])
    }, [data])

    return (
        <div>
            <header>
                <h1>Курс валют</h1>
                <div className={'blue'}> {state}</div>
            </header>
        </div>
    )
}