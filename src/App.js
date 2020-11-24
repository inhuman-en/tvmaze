import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './App.scss';

import { Header } from './navigation';
import { ShowRoutes } from './show';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            home
          </Route>
          <Route path="/show">
            <ShowRoutes />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
