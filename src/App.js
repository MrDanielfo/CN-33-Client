import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/Layout/NavBar';
import Container from './components/Layout/Container';

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
            <Route exact path="/" component={Container} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/restaurants" component={Restaurants} />
          </Switch>
        </div>
      </Fragment>
    </Router>
    
  );
}

export default App;
