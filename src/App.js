import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/Layout/NavBar';
import Restaurants from './components/Restaurants/Restaurants';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Restaurants />
          </Switch>
        </div>
      </Fragment>
    </Router>
    
  );
}

export default App;
