import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Order from '../pages/Manager/Order/Order';

const settingRoutes = () => (
  <Switch>
    <Route exact path="/manager/order" component={Order} />
  </Switch>
);
export default settingRoutes;
