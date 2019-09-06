import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Container from '../components/Layout/Container';

import NavBar from '../components/Layout/NavBar';

import Restaurants from '../components/Restaurants/Restaurants';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Categories from '../components/Categories/Categories';

const PublicRoute = ({ component : Component, ...rest }) => ( 
    <Route {...rest} render={ props => <Component {...props} /> } />
);


const PrivateRoute = ({ component: Component, ...rest }) => { 
  return <Route {...rest} render={ (props) => !rest.userLogged  ?  (<Redirect to="/" />) : (<Component {...props} />) } />
};

const Routing = () => {
    const token = localStorage.getItem('jwt');
    return (
      <Router>
        <Fragment>
          <NavBar />
          <div className="container">
            <Switch>
              <PublicRoute exact path="/" component={Container} />
              {token ? (
                ''
              ) : (
                <PublicRoute exact path="/login" component={Login} />
              )}
              {token ? (
                ''
              ) : (
                <PublicRoute exact path="/register" component={Register} />
              )}
              {token ? (
                <PrivateRoute
                  exact
                  path="/restaurants"
                  userLogged={true}
                  component={Restaurants}
                />
              ) : (
                <PrivateRoute userLogged={false} />
              )}
              {token ? (
                <PrivateRoute
                  exact
                  path="/categories"
                  userLogged={true}
                  component={Categories}
                />
              ) : (
                <PrivateRoute userLogged={false} />
              )}
            </Switch>
          </div>
        </Fragment>
      </Router>
    );

}

export default Routing;

// <PublicRoute component={() => <Error404 />} />;