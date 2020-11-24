import React from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import ShowPage from '../show-page/ShowPage';

const ShowRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${path}`}>
        <Redirect to={`${path}/1`} />
      </Route>
      <Route path={`${path}/:id`}>
        <ShowPage />
      </Route>
    </Switch>
  );
};

export default ShowRoutes;
