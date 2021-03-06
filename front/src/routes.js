import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from './App';
import CartPage from './components/cartPage/cartPage';
import ProductDisplayPage from './components/productDisplayPage/productDisplayPage';
import GlobalState from './components/context/GlobalState';
import './App.css';

const createRoutes = (
  <GlobalState>
    <Router>
      <Switch>
        <div className='App'>
          <Route exact path='/' component={App} />
          <Route exact path='/products/:id' component={ProductDisplayPage} />
          <Route exact path='/cart' component={CartPage} />
        </div>
      </Switch>
    </Router >
  </GlobalState>
);

export default createRoutes;