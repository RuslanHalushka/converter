import React from "react";
import './index.css'
import {CurrencyValue} from "./Service";

export const Converter = ()=>{

    const [currency1, setCurrency1] = React.useState('UAH');
    const [currency2, setCurrency2] = React.useState('UAH');

    const [number1, setNumber1] = React.useState(0);
    const [number2, setNumber2] = React.useState(0);

    const data = React.useContext(CurrencyValue);

    const convertValue = (valueFromInput, firstCurr, secondCurr, number)=>{


        number === 1 ? setNumber1(valueFromInput) : setNumber2(valueFromInput)
        for (const i in data) {
            if (firstCurr === 'UAH') {
                if (secondCurr === 'UAH') {
                    number === 1 ? setNumber2(valueFromInput) : setNumber1(valueFromInput)
                }
                for (const k in data) {
                    if (Object.keys(data[k]).toString() === secondCurr) {
                        const secondNum = Object.values(data[k]).shift();
                        const result = valueFromInput / secondNum;
                        number === 1 ? setNumber2(result) : setNumber1(result)
                    }
                }
            }
            if (Object.keys(data[i]).toString() === firstCurr) {
                const firstNum = Object.values(data[i]).shift()
                if (secondCurr === 'UAH') {
                    const res = firstNum * valueFromInput;
                    number === 1 ? setNumber2(res) : setNumber1(res);

                }
                for (const j in data) {
                    if (Object.keys(data[j]).toString() === secondCurr) {
                        const secondNum = Object.values(data[j]).shift();
                        const result = firstNum / secondNum * valueFromInput;
                        number === 1 ? setNumber2(result) : setNumber1(result)
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