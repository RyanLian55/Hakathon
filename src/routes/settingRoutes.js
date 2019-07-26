import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Store from '../pages/Setting/Store/Store';
import InStock from '../pages/Setting/InStock/InStock';
import Material from '../pages/Setting/Material/Material';

const settingRoutes = () => (
  <Switch>
    <Route exact path="/setting/store" component={Store} />
    <Route exact path="/setting/instock" component={InStock} />
    <Route exact path="/setting/material" component={Material} />
  </Switch>
);
export default settingRoutes;
