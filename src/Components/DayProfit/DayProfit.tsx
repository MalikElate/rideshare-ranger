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
  const [singleMessage, setSingleMessage] = useState<string>('');

  useEffect(() => {
    setMessageFunction(singleMiles, singlePay)
  }, [singleMiles, singlePay]);

  const setMessageFunction = (miles: number, pay: number) => { 
    switch (miles)  { 
      case 0: 
        setSingleMessage('Deliveries must have some distance'); 
        break; 
      case .5:  
      case 1: 
      case 1.5:  
      case 2: 
        if(singlePay >= 5.5) { 
          setSingleMessage('this dash is worth it'); 
        } else { 
          setSingleMessage('this dash is a waste of time'); 
        }
        break; 
      case 2.5: 
      case 3:
        if(singlePay >= 7) { 
          setSingleMessage('this dash is worth it'); 
        } else { 
          setSingleMessage('this dash is a waste of time'); 
        }
        break; 
      case 3.5:
      case 4:
        if(singlePay >= 8) { 
          setSingleMessage('this dash is worth it'); 
        } else { 
          setSingleMessage('this dash is a waste of time'); 
        }
        break; 
      case 4.5:
      case 5:
        if(singlePay >= 10) { 
          setSingleMessage('this dash is worth it'); 
        } else { 
          setSingleMessage('this dash is a waste of time'); 
        }
        break; 
      case 4.5:
      case 5:
      case 5.5: 
      case 6:
        if(singlePay >= 12) { 
          setSingleMessage('this dash is worth it'); 
        } else { 
          setSingleMessage('this dash is a waste of time'); 
        }
        break; 
      case 6.5:
      case 7:
      case 7.5:
      case 8:
        if(singlePay >= 15) { 
          setSingleMessage('this dash is worth it'); 
        } else { 
          setSingleMessage('this dash is a waste of time'); 
        }
        break; 
      case 8.5:
      case 9:
      case 9.5:
      case 10:
      case 10.5:
        if(singlePay >= 19) { 
          setSingleMessage('this dash is worth it'); 
        } else { 
          setSingleMessage('this dash is a waste of time'); 
        }
        break; 
      case 11:
      case 11.5:
      case 12:
      case 12.5:
      case 13:
      case 13.5:
      case 14:
      case 14.5:
      case 15:
        if(singlePay >= 27) { 
          setSingleMessage('this dash is worth it'); 
        } else { 
          setSingleMessage('this dash is a waste of time'); 
        }
        break; 
        default:
          setSingleMessage('this dash is a waste of time'); 
          break;
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

