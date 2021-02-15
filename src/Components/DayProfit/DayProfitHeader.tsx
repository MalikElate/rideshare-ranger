import React, {useState, useEffect} from 'react';

interface Props { 
  companyName: string, 
}

export const DailyProfitHeader: React.FC<Props> = (props) => {

  return (
    <div className="calc-headers">
      <header>
        <h1 className="calc-header-h2"> {props.companyName} Profit Calculator </h1>
      </header>
      <p className="calc-p"><i>
        Want to give yourself a raise? {props.companyName} Calculator to will tell you if a dash is profitable
      </i></p>
    </div>
  );
}

