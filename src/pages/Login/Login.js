import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Login extends Component {
  static propTypes = {
    loginFunc : PropTypes.func.isRequired
  };

  inputEmail = createRef('')
  inputPassword = createRef('')

  login = () => {
    console.log('login request'+this.inputEmail.current.value+'--------'+this.inputPassword.current.value)
    this.props.loginFunc(this.inputEmail.current.value, this.inputPassword.current.value)
  }

  render() {
    return (
      <div className="login container">
        <h1 className="text-center">로그인</h1>
        <form>
          <input type="email" ref={this.inputEmail} className="form-control" placeholder="Email" required />
          <input type="password" ref={this.inputPassword} className="form-control" placeholder="Password" required />
          <button className="btn btn-lg btn-primary btn-block" onClick={this.login}  type="submit">
            로그인
          </button>
        </form>
        <p className="text-help text-center">
          계정이 필요하신가요?
          <Link className="text-center new-account" to="/signup">
            계정 만들기
          </Link>
        </p>
      </div>
    );
  }
}
