import React, {useState, useEffect} from 'react';
import { WeeklyProfit } from "../WeeklyProfit/WeeklyProfit"; 
import { DailyProfitHeader } from './DayProfitHeader'; 
import './DayProfit.css'; 

interface Props { 
  companyName: string, 
}

export const DoorDash: React.FC<Props> = (props) => {
  const [singleMiles, setSingleMiles] = useState<number>(0);
  const [singlePay, setSinglePay] = useState<number>(0);
  const [singleAdjustedPay, setSingleAdjustedPay] = useState<number>(0);
  const [singleMessage, setSingleMessage] = useState<string>("");

  const setMessageFunction = () => { 
    // any dash less than 5 dollars pay is unprofitable
    if (singlePay < 5) {
      setSingleMessage('This dash is unprofitable');
      return; 
    }
    // any dash further than 14 miles is unprofitable
    if (singleMiles > 14) {
      setSingleMessage('This dash is unprofitable');
      return; 
    }
    if (singlePay >= 5 && singleMiles < 3) {
      setSingleMessage('This dash is profitable');
      return; 
    } 
    if (singlePay >= 5 && singleMiles < 3) { 
      setSingleMessage('This dash is profitable');
      return; 
    }
  }
  return (
    <>
    <DailyProfitHeader companyName={props.companyName}/>      
    <div className="calc-page">
      <div className="calc-body">
        <div className="calc-main">
        <h1 className="calc-h2"> Single delivery profit </h1>
        <h3>Miles</h3>
        <div >
          <input 
            className="calc-input"
            placeholder="Number of miles" 
            type="number" 
            value={singleMiles} 
            onChange={(e)=>{
              setSingleMiles(Number(e.target.value)); 
              setMessageFunction(); 
              setSingleAdjustedPay(Number(Number(singlePay - (singleMiles/25 * 2.2)).toFixed(2)));
            }}
          />
          <div className="mui-slider-div">
            <input
            className='calc-slider'
            type='range' 
            aria-labelledby="discrete-slider-small-steps"
            step={0.5}
            min={.5}
            max={30}
            value={singleMiles}
            onChange={(e) => {
              setSingleMiles(Number(e.target.value)); 
              setSingleAdjustedPay(Number(Number(singlePay - (singleMiles/25 * 2.2)).toFixed(2)));
              setMessageFunction();
            }}
            />
          </div>
        </div>
        <h3>Pay</h3>
        <div>
          <input 
            className="calc-input"
            placeholder="Delivery pay out ($)" 
            type="number" 
            value={singlePay} 
            onChange={(e)=>{
              setSinglePay(Number(e.target.value)); 
              setMessageFunction(); 
              setSingleAdjustedPay(Number(Number(singlePay - (singleMiles/25 * 2.2)).toFixed(2)));
            }}
          />
          <div className="mui-slider-div">
            <input
            className='calc-slider'
            type='range' 
            aria-labelledby="discrete-slider-small-steps"
            step={0.5}
            min={.5}
            max={30}
            value={singlePay}
            onChange={(e) => {
              setSinglePay(Number(e.target.value));
              setSingleAdjustedPay(Number(Number(singlePay - (singleMiles/25 * 2.2)).toFixed(2)));
              setMessageFunction();
            }}
            />
          </div>
        </div> 
        <p>• Status: {singleMessage}</p>
        <p>• SinglePay: ${singleAdjustedPay}</p>
        <p>• Roundtrip time: {singleMiles>0? 15+singleMiles*6 : 0} minutes</p>
        <WeeklyProfit singleProfits={singleAdjustedPay}/>
        </div>
      </div>
    </div>
    </>
  );
}

