import React, {useState, useEffect} from 'react';

interface Props { 
  companyName: string, 
}

export const DailyProfitHeader: React.FC<Props> = (props) => {

  return (
    <div className="calc-headers">
      <header>
        <h1 className="calc-h1"> {props.companyName} Profit Calculator </h1>
      </header>
      <p className="calc-p"><i>Can't decide if a delivery is profitable? Use the {props.companyName} Calculator to find out</i></p>
    </div>
  );
}

