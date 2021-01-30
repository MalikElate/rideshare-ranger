import React, {useState} from 'react';

interface Props { 
  companyName: string, 
}

export const DoorDash: React.FC<Props> = (props) => {
  function handleSingleClick() { 
    console.log(singlePay/singleMiles); 
  }
  const [singleMiles, setSingleMiles] = useState<number>(0)
  const [singlePay, setSinglePay] = useState<number>(0)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    
    console.log(event.target.value)
  }

  return (
    <div>
      <header>
          <h1> {props.companyName} Profit Calculator </h1>
      </header>
      <h2> Single delivery profit </h2>
      <p> Can't decide if a delivery is profitable? Use the {props.companyName} Calculator to find out </p>
      <div>
          <input 
            placeholder="Number of miles" 
            type="number" 
            value={singleMiles || ""} 
            onChange={(e)=>setSingleMiles(Number(e.target.value))}
          />
      </div>
      <div>
        <input 
          placeholder="Payout" 
          type="number" 
          value={singlePay || ""} 
          onChange={(e)=>setSinglePay(Number(e.target.value))}
        />
      </div>
      <p>payout: ${Number(singlePay - (singleMiles/25 * 2.2)).toFixed(2)}</p>
      <div>
          <button onClick={handleSingleClick}> Enter </button>
      </div>
    </div>
  );
}

