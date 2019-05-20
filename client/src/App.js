
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../src/components/Home.js'
import './App.css';
import Customers from './components/Customers.js';
import SingleCustomer from './components/SingleCustomer.js';

class App extends Component{
  render(){
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/customer" component={Customers}/>
        <Route exact path = "/customers/:id" component = {SingleCustomer}/>
        {/* <Route exact path ="/" component = {About}/> */}
      </Switch>
    </div>
  </Router>
  );
  }
}

export default App;
