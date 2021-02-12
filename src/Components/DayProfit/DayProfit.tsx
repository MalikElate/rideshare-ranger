import React, {useState, useEffect} from 'react';
import { Slider } from '@material-ui/core';
import { WeeklyProfit } from "../WeeklyProfit/WeeklyProfit"; 
import { DailyProfitHeader } from './DayProfitHeader'; 

interface Props { 
  companyName: string, 
}

export const DoorDash: React.FC<Props> = (props) => {
  const [singleMiles, setSingleMiles] = useState<number>(0);
  const [singlePay, setSinglePay] = useState<number>(0);
  const [singleAdjustedPay, setSingleAdjustedPay] = useState<number>(0);
  const [singleMessage, setSingleMessage] = useState<string>("");

  useEffect(() => {
    setMessageFunction(); 
  }, []);

  const setMessageFunction = () => { 
    if ((0 < singleMiles) && (singleMiles <= 2)  && (singlePay > 4)){
        setSingleMessage('This dash is unprofitable');
    }
  }
  return (
    <div className="calc-page">
      <DailyProfitHeader companyName={props.companyName}/>      
      <div className="calc-body">
        <h1 className="calc-h2"> Single delivery profit </h1>
        <div >
          <input 
            className="calc-input"
            placeholder="Number of miles" 
            type="number" 
            value={singleMiles || ""} 
            onChange={(e)=>setSingleMiles(Number(e.target.value))}
          />
          <div className="mui-slider-div">
            <input
            className='calc-slider'
            type='range' 
            aria-labelledby="discrete-slider-small-steps"
            step={0.5}
            min={.5}
            max={30}
            value={singleMiles || ""}
            onChange={(e) => {
              setSingleMiles(Number(e.target.value)); 
              setSingleAdjustedPay(Number(Number(singlePay - (singleMiles/25 * 2.2)).toFixed(2)));
              setMessageFunction();
            }}
            />
          </div>
        </div>
        <div>
          <input 
            className="calc-input"
            placeholder="Delivery pay out ($)" 
            type="number" 
            value={singlePay || ""} 
            onChange={(e)=>setSinglePay(Number(e.target.value))}
          />
          <div className="mui-slider-div">
            <input
            className='calc-slider'
            type='range' 
            aria-labelledby="discrete-slider-small-steps"
            step={0.5}
            min={.5}
            max={30}
            value={singlePay || ""}
            onChange={(e) => {
              setSinglePay(Number(e.target.value));
              setSingleAdjustedPay(Number(Number(singlePay - (singleMiles/25 * 2.2)).toFixed(2)));
              setMessageFunction();
            }}
            />
          </div>
        </div> 
        <p>Status: {singleMessage}</p>
        <p>singlePay: ${singleAdjustedPay}</p>
        <p> Roundtrip time: {singleMiles>0? 15+singleMiles*6 : 0} minutes</p>
        <WeeklyProfit singleProfits={singleAdjustedPay}/>
      </div>
    </div>
  );
}

