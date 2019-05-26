import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './custom.css';

import NavBar from './components/NavBar'
import Incidents from './containers/incidents';
import SignUp from  './containers/SignUp'
import Login from  './containers/Login'
import IncidentDetails from './containers/incidentDetails'
import Edit from './containers/Edit'
import {  Route, Switch , HashRouter } from 'react-router-dom';


function APP() {
  return (
    <HashRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/incidents" component={ Incidents} />
          <Route exact path="/" component={Login} />
          <Route  path="/signup" component={SignUp} />
          <Route  path="/login" component={Login} />
          <Route exact path="/incidents/:id" component={IncidentDetails} />
          <Route path="/incidents/edit/:id" component={Edit} />
        </Switch>
      </div>
    </HashRouter>
     )
}
export default APP