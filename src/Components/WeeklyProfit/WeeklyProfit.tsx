import React, {useState} from 'react';

interface Props { 
  singleProfits: number, 
}

export const WeeklyProfit: React.FC<Props> = (props) => {

  return (
    <div>
      <header>
          <h2> Hello from weekly profit </h2> 
          <p>${props.singleProfits * 10}</p>
      </header>
    </div>
  );
}

