import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Doctor from './components/doctor'
import Patient from './components/patient'
import Pharmacist from './components/pharmacist'
import Login from './components/login'
import './App.css';


function App() {
  return (
    <div className='content'>
      <Router>
        <Switch>
          <Route path="/doctor" exact component={Doctor} />
          <Route path="/patient" exact component={Patient} />
          <Route path="/pharmacist" exact component={Pharmacist} />
          <Route path="/login" component={Login} />
          
          <Redirect to="/login"/>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
