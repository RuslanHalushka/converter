import React from "react";
import {CurrencyValue} from "../index";
import './Header.css'
export const Header = () => {

    const [state, setState] = React.useState(0);
    const data = React.useContext(CurrencyValue);

    React.useEffect(()=>{
        const arr = [];
        for (const i in data) {
            const res = `${data[i].cc}/UAH: ${data[i].rate}; `;
            arr.push(res)
        }
        setState(arr);
    }, [data])

    return (
        <div>
            <header>
                <h1>Курс валют</h1>
                <div className={'content'}> {state}</div>
            </header>
        </div>
    )
}