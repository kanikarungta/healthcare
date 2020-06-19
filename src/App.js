import React from 'react';
import './App.css'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/login'
import ProtectedRoute from './components/protectedRoute'

function App() {
  return (
    <div className='content'>
      <Router>
        <Switch>
          <ProtectedRoute path="/doctor" exact />
          <ProtectedRoute path="/patient" exact />
          <ProtectedRoute path="/pharmacist" exact />
          <Route path="/login" component={Login} />
          <Redirect to="/login"/>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
