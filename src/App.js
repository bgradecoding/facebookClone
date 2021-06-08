import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'

export default class App extends Component {
  render() {
    return(
    <Router>
      <Switch>
      <Route exact path="/" component={Home}/>
      </Switch>
      <Switch>
      <Route path="/login" component={Login}/>
      </Switch>
      <Switch>
      <Route path="/signup" component={SignUp}/>
      </Switch>
  </Router>
  )
  }
}
