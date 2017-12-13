import React from 'react';
import { Route, IndexRoute } from 'react-router';
import NavigationBar from '../components/NavigationBar';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import Logout from '../components/auth/Logout';
import Home from '../components/Home';

const routes = (
  <Route path="/" component={NavigationBar}>
    <IndexRoute component={Home} />
    <Route exact path="/register" component={Register} redirect />
    <Route path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />
  </Route>
);


export default routes;
