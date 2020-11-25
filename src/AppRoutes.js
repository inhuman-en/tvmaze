import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import './App.scss';

import { ShowRoutes } from './show';

const AppRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to={`show/6771`} />
    </Route>
    <Route path="/show">
      <ShowRoutes />
    </Route>
  </Switch>
);

export default AppRoutes;
