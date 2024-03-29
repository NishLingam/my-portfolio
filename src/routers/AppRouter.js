import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import Portfolio from '../pages/Portfolio';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/index.html" exact>
          <HomePage />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route>
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
