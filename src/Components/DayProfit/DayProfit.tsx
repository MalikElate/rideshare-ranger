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
    // Update the document title using the browser API 
    console.log(singleMessage)
    setMessageFunction(); 
    console.log(singleMessage)
  }, []);

  const setMessageFunction = () => { 
    if ((0 < singleMiles) && (singleMiles <= 2)  && (singlePay > 4)){
        setSingleMessage('This dash is unprofitable');
    } else if ((0 >= singleMiles) && (singleMiles > 2)) {
        setSingleMessage('This dash is unprofitable');
        return "end function";
     } else if ((2 < singleMiles) && (singleMiles <= 3)  && (singlePay > 6)){
        setSingleMessage('This dash is profitable!');
        return "end function";
      } else if ((2 >= singleMiles) && (singleMiles > 3)) {
        setSingleMessage('This dash is unprofitable');   
        return "end function";
      } else if ((3 < singleMiles) && (singleMiles <= 4)  && (singlePay > 8)){
        setSingleMessage('This dash is unprofitable');
        return "end function";
      } else if ((3 >= singleMiles) && (singleMiles > 4)) {
        setSingleMessage('This dash is unprofitable');
      } else if ((4 < singleMiles) && (singleMiles <= 5)  && (singlePay > 11)){
        setSingleMessage('This dash is unprofitable');
        return "end function";
      } else if ((4 >= singleMiles) && (singleMiles > 5)) {
        setSingleMessage('This dash is unprofitable');
      } else if ((5 < singleMiles) && (singleMiles <= 6)  && (singlePay > 15)){
        setSingleMessage('This dash is unprofitable');
        return "end function";
      } else if ((5 >= singleMiles) && (singleMiles > 6)) {
        setSingleMessage('This dash is unprofitable');
      } else if ((6 < singleMiles) && (singleMiles <= 7)  && (singlePay > 18)){
      setSingleMessage('This dash is unprofitable');
        return "end function";
      } else if ((6 >= singleMiles) && (singleMiles > 7)) {
        setSingleMessage('This dash is unprofitable');
      } else if ((7 < singleMiles) && (singleMiles <= 9)  && (singlePay > 26)){
        setSingleMessage('This dash is unprofitable');
        return "end function";
      } else if ((7 >= singleMiles) && (singleMiles > 9)) {
        setSingleMessage('This dash is unprofitable');
      } else if ((9 < singleMiles) && (singleMiles <= 12)  && (singlePay > 35)){
        setSingleMessage('This dash is unprofitable');
      return "end function";
      } else if ((9 >= singleMiles) && (singleMiles > 12)) {
        setSingleMessage('This dash is unprofitable');
      } else if ((13 < singleMiles) && (singleMiles <= 16)  && (singlePay > 50)){
        setSingleMessage('This dash is unprofitable');
        return "end function";
      } else if ((13 >= singleMiles) || (singleMiles > 16)) {
        setSingleMessage('This dash is unprofitable');
      } else if (16 < singleMiles) {
        setSingleMessage('DoorDash does not assign dashes of this distance');
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
            className='calc-input'
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
        <div>
          <p>Status: {singleMessage}</p>
        </div>
        <div>
          <p>singlePay: ${singleAdjustedPay}</p>
        </div>
        <p> Roundtrip time: {singleMiles>0? 15+singleMiles*6 : 0} minutes</p>
        <WeeklyProfit singleProfits={singleAdjustedPay}/>
      </div>
    </div>
  );
}

