import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/HomePage';
import ErrorPage from '../Components/ErrorPage';
import Portfolio from '../Components/Portfolio';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path='/' exact = {true}> <HomePage /> </Route>
                <Route path='/portfolio'> <Portfolio /> </Route>
                <Route> <ErrorPage /> </Route> 
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;