import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import './App.scss';

import { EPISODE, HOME, SHOW } from 'routesConfig';

import { ShowRoutes } from './show';
import { EpisodeRoutes } from './episode';

const AppRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Redirect to={HOME} />
    </Route>
    <Route path={SHOW}>
      <ShowRoutes />
    </Route>
    <Route path={EPISODE}>
      <EpisodeRoutes />
    </Route>
  </Switch>
);

export default AppRoutes;
