import React from 'react';
import 'skeleton-css/css/skeleton.css';
import './App.scss';

/* COMPONENTS */
import { Switch, Route, Link, useHistory, useLocation } from 'react-router-dom';
import Login from './pages/login/login'
import Dashboard from './pages/dashboard/dashboard'
import Apartment from './pages/apartment/apartment';
import NoMatch from './pages/no-match/no-match';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/apartment" component={Apartment} />
        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
