import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { DoorDash } from '../DayProfit/DayProfit';
import { NavBar } from '../NavBar/NavBar'
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar/>
      <div className="calculator-div">
        <Route exact path="/doordash" component={()=><DoorDash companyName="DoorDash"/>}/>
        <Route exact path="/uber-eats" component={()=><DoorDash companyName="Uber Eats"/>}/>
        <Route exact path="/grubhub" component={()=><DoorDash companyName="Grubhub"/>}/>
        <Route exact path="/postmates" component={()=><DoorDash companyName="Postmates"/>}/>
        <Route exact path="/instacart" component={()=><DoorDash companyName="Instacart"/>}/>
      </div>
    </Router>
  );
}

export default App;
