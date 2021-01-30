import React, {useState} from 'react';
import { Slider } from '@material-ui/core';
import WeeklyProfit
import {Adsense} from '@ctrl/react-adsense';
interface Props { 
  companyName: string, 
}

export const DoorDash: React.FC<Props> = (props) => {
  const [singleMiles, setSingleMiles] = useState<number>(0);
  const [singlePay, setSinglePay] = useState<number>(0);
  const [singleAdjustedPay, setSingleAdjustedPay] = useState<number>(0);
  return (
    <div>
      <header>
          <h1> {props.companyName} Profit Calculator </h1>
      </header>
      <h2> Single delivery profit </h2>
      <p> Can't decide if a delivery is profitable? Use the {props.companyName} Calculator to find out </p>
      <div>
          <label>mi</label>
          <input 
            placeholder="Number of miles" 
            type="number" 
            value={singleMiles || ""} 
            onChange={(e)=>setSingleMiles(Number(e.target.value))}
          />
      <Slider
        defaultValue={0.00000005}
        aria-labelledby="discrete-slider-small-steps"
        step={0.5}
        marks
        min={.5}
        max={30}
        value={singleMiles}
        onChangeCommitted={(event: React.ChangeEvent<{}>, value: number | number[]) => {setSingleMiles(Number(value))
          setSingleAdjustedPay(Number(Number(singlePay - (singleMiles/25 * 2.2)).toFixed(2)))
        }}
        onChange={(event: React.ChangeEvent<{}>, value: number | number[]) => {setSingleMiles(Number(value))
          setSingleAdjustedPay(Number(Number(singlePay - (singleMiles/25 * 2.2)).toFixed(2)))
        }}
        valueLabelDisplay="auto"
      />
      </div>
      <div>
        <label>$</label>
        <input 
          placeholder="Payout" 
          type="number" 
          value={singlePay || ""} 
          onChange={(e)=>setSinglePay(Number(e.target.value))}
        />
        <Slider
        defaultValue={0.00000005}
        aria-labelledby="discrete-slider-small-steps"
        step={0.5}
        marks
        min={.5}
        max={30}
        value={singlePay}
        onChangeCommitted={(event: React.ChangeEvent<{}>, value: number | number[]) => {setSinglePay(Number(value))
          setSingleAdjustedPay(Number(Number(singlePay - (singleMiles/25 * 2.2)).toFixed(2)))
        }}
        onChange={(event: React.ChangeEvent<{}>, value: number | number[]) => {setSinglePay(Number(value))
          setSingleAdjustedPay(Number(Number(singlePay - (singleMiles/25 * 2.2)).toFixed(2)))
        }}
        valueLabelDisplay="auto"
      />
      </div>
      <p>Payout: ${singleAdjustedPay} Roundtrip time: {singleMiles>0? 15+singleMiles*6 : 0} minutes</p>
      <Adsense
        client="ca-pub-2199692694058751"
        slot="7259870550"
      />
    </div>
  );
}

