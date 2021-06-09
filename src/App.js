import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import DefaultLayout from './layouts/DefaultLayout';
import PublicLayout from './layouts/PublicLayout';

export default class App extends Component {
  state = {
    user: null,
    posts: [],
  };

  login = (email, password) => {
    console.log('login-------------'+email+'-----'+password)
    if (email === 'harry@lgcns.com' && password === '1234') {
      this.setState({
        user: {
          seq: 0,
          name: 'harry',
          profileImageUrl:
            '<https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png>',
        },
      });
    }
  };

  loginOut = () => {
    this.setState({
      user: null,
    });
  };

  postAdd = () => {
    this.setState({
      ...this.state,
    });
  };

  render() {
    return (
      <Router>
        <DefaultLayout path="/" component={Home} props={this.state}/>
        <PublicLayout path="/login" component={Login} loginFunc={this.login} />
        <PublicLayout path="/signup" component={SignUp} />
      </Router>
    );
  }
}
