import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import { HOME } from 'routesConfig';

import ShowPage from '../show-page/ShowPage';

const ShowRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`}>
        <Redirect to={`${HOME}`} />
      </Route>
      <Route path={`${path}/:id`}>
        <ShowPage />
      </Route>
    </Switch>
  );
};

export default ShowRoutes;
