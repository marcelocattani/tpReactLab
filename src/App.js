import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import details from './component/details';
import product from './component/product';
import home from './component/home';
import maps from './component/maps';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={home}></Route>
        <Route exact path="/home" component={home}></Route>
        <Route exact path="/maps" component={maps}></Route>
        <Route exact path="/products" component={product}></Route>
        <Route exact path="/details/:id" component={details}></Route>
      </Switch>
    );
  }
}

export default App;
