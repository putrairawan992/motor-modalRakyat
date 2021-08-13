import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Search from 'pages/Search';
import Product from 'pages/Product';

const RouterManager = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/product/:id" component={Product} />
  </Switch>
);

export default RouterManager;
