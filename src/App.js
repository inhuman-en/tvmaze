import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';

import { Header } from './navigation';

import AppRoutes from './AppRoutes';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  </div>
);

export default App;
