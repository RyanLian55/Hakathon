import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Auth/Login/Login';

const userRoutes = () => (
  <Switch>
    <Route exact path="/account/login" component={Login} />
  </Switch>
);
export default userRoutes;
