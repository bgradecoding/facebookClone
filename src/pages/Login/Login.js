import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
export default class Login extends Component {

  render() {
    return(
        <div className="login container">
        <h1 className="text-center">로그인</h1>
        <form>
          <input type="email" className="form-control" placeholder="Email" required />
          <input type="password" className="form-control" placeholder="Password" required />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            로그인
          </button>
        </form>
        <p className="text-help text-center">
          계정이 필요하신가요?
          <Link className="text-center new-account" to="/signup">계정 만들기</Link>
        </p>
      </div>
    );
  }
}
