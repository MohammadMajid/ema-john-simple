import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDetail from './components/ProductDetail/ProductDetail';

import {HashRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      
      <Router>
      <Header></Header>
        <Switch>
        <Route exact path="/shop">
        <Shop></Shop>
          </Route>
          <Route exact path="/review">
            <Review></Review>
          </Route>
          <Route exact path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route exact path="/">
          <Shop></Shop>
          </Route>
          <Route exact path="/product/:productKey">
          <ProductDetail></ProductDetail>
          </Route>
          <Route path="*">
          <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
