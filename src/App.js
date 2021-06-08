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

  state = {
    user: {
      seq: 0,
      name: "harry",
      profileImageUrl:
        "<https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png>"
    },
    posts: []
  };

  login = ( paramUser ) =>{
    this.setState({
      user : paramUser
    })
  }

  loginOut = () =>{
    this.setState({
      user : {}
    })
  }

  postAdd = () => {
    this.setState({
      ...this.state
    })
  }

  render() {
    return(
    <Router>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp}/>
      </Switch>
  </Router>
  )
  }
}
