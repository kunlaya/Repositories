import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NavBar from './Components/NavBar';
import Home from './Components/Home';
import ProductList from './Components/ProductList';

import './App.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={ProductList} />
      </Switch>
    </Router>
  );
}

export default App;
