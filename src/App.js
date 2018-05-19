import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import HomePage from './containers/home';
import CartPage from './containers/cart';
import DetailsPage from './containers/detail';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/cart" component={CartPage} />
      <Route exact path="/detail/:id" component={DetailsPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
