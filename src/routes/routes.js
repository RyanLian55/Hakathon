import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserPage from '../pages/User/User';
import ServicePage from '../pages/Service/Service';
import UserRoutes from '../routes/userRoutes';
import SettingRoutes from '../routes/settingRoutes';
import ManagerRoutes from '../routes/managerRoutes';

const routes = (
  <Switch>
    <Route exact path="/service/" component={ServicePage} />
    <Route path="/account/" component={UserRoutes} />
    <Route path="/setting/" component={SettingRoutes} />
    <Route path="/manager/" component={ManagerRoutes} />
    <Route exact path="/" component={UserPage} />
  </Switch>
);

export default routes;
