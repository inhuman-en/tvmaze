import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import EpisodePage from '../episode-page/EpisodePage';

const EpisodeRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/:id`}>
        <EpisodePage />
      </Route>
    </Switch>
  );
};

export default EpisodeRoutes;
