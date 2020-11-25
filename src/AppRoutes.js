import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import './App.scss';

import { ShowRoutes } from './show';
import { EpisodeRoutes } from './episode';

const AppRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to={`show/6771`} />
    </Route>
    <Route path="/show">
      <ShowRoutes />
    </Route>
    <Route path="/episode">
      <EpisodeRoutes />
    </Route>
  </Switch>
);

export default AppRoutes;
