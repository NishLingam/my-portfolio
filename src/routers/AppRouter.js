import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import Portfolio from '../pages/Portfolio';
import TapMath from '../pages/TapMath';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path='/' exact = {true}> <HomePage /> </Route>
                <Route path='/portfolio'> <Portfolio /> </Route>
                <Route path='/tapmath'> <TapMath /> </Route>
                <Route> <ErrorPage /> </Route> 
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;