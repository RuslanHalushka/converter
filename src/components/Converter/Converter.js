import React from "react";
import './Converter.css'
import {CurrencyValue} from "../index";

export const Converter = ()=>{

    const [currency1, setCurrency1] = React.useState('UAH');
    const [currency2, setCurrency2] = React.useState('UAH');

    const [number1, setNumber1] = React.useState(0);
    const [number2, setNumber2] = React.useState(0);

    const data = React.useContext(CurrencyValue);

    const someCurr = symbol => data[symbol].cc;
    const someRate = symbol => data[symbol].rate;
    const whichFunc = (someNum, someRes) => someNum === 1 ? setNumber2(someRes) : setNumber1(someRes);


    const convertValue = (valueFromInput, firstCurr, secondCurr, number)=>{

        number === 1 ? setNumber1(valueFromInput) : setNumber2(valueFromInput)
        for (const i in data) {
            if (firstCurr === 'UAH') {
                if (secondCurr === 'UAH') {
                    whichFunc(number, valueFromInput);
                }
                for (const k in data) {
                    if (someCurr(k) === secondCurr) {
                        const result = valueFromInput / someRate(k);
                        whichFunc(number, result);
                    }
                }
            }
            if (someCurr(i) === firstCurr) {
                if (secondCurr === 'UAH') {
                    const res = someRate(i) * valueFromInput;
                    whichFunc(number, res);
                }
                for (const j in data) {
                    if (someCurr(j) === secondCurr) {
                        const result = someRate(i) / someRate(j) * valueFromInput;
                        whichFunc(number, result);
                    }
                }
            }
        }

    }


    return(

        <div className={'bigBox'}>
            <div className={'border'}>
                <select className={'curr'} onChange={(e)=> {
                    const selectedCurr = e.target.value;
                    setCurrency1(selectedCurr);
                }}>
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
                <input type="number" value={number1} onChange={(event) =>{
                    convertValue(event.target.value, currency1, currency2, 1)
                }}/>
            </div>
            <div className={'border'}>
                <select className={'curr'} onChange={(e)=> {
                    const selectedCurr = e.target.value;
                    setCurrency2(selectedCurr);
                }}>
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>
                <input type="number" value={number2} onChange={(event) =>{
                    convertValue(event.target.value, currency2, currency1, 2)
                }}/>
            </div>
        </div>
    )
}