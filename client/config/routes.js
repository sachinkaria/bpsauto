import React from 'react';
import { Route, IndexRoute } from 'react-router';
import NavigationBar from '../components/NavigationBar';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import Logout from '../components/auth/Logout';
import Home from '../components/Home';
import Dashboard from '../components/users/dashboard';

const routes = (
  <Route path="/" component={NavigationBar}>
    <IndexRoute component={Home} />
    <Route exact path="/register" component={Register} redirect />
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route exact path="/logout" component={Logout} />
  </Route>
);


export default routes;
