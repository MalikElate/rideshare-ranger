import React from 'react';

const DoorDash: React.FC = () => {
  return (
    <div className="App">
        <header>
            <h1>DoorDash Calculator</h1>
        </header>
        <p> Can't decide if a delivery is profitable? Use the DoorDash Calculator to find out </p>
        <br></br>
        <br></br>
        <div>
        <input placeholder="Number of Miles"></input>
        <br></br>
        <input placeholder="Pay"></input>
        <br></br>
        </div>
        <div>
            <button> Enter </button>
        </div>
        <p></p>
    </div>
  );
}

export default DoorDash;
