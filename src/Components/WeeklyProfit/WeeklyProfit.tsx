import React from 'react';

interface Props { 
  singleProfits: number, 
  singleMiles: number, 
  singleTime: number, 
}

export const WeeklyProfit: React.FC<Props> = (props) => {
  const { singleProfits } = props; 
  const { singleMiles } = props; 
  const { singleTime } = props; 
  return (
    <div>
      <header>
        <h1 className="calc-h2">Weekly profit</h1> 
        <p>• Pay after gas and car depreciation: ${(singleProfits * 20).toFixed(2)}</p>
        <p>• Time spent driving: {singleTime*20/60}</p>
        <p>• Average pay per hour: ${singleProfits>0? (singleProfits/(singleTime/60)).toFixed(2) : 0} per hour</p>
      </header>
    </div>
  );
}

