import React from 'react';
import {Switch,Route} from 'react-router-dom'
import './App.css';

import HomePage from './pages/homepage.components.jsx';
import ShopPage from './pages/shop/shop.components';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
