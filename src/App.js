import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import { Header } from './navigation';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Route exact path="/">
        home
      </Route>
      <Route path="/shows">
        <Switch>
          <Route path="/:id">show page</Route>
        </Switch>
      </Route>
    </Router>
  </div>
);

export default App;
