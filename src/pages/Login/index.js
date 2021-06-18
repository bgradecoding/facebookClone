import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { user } from '../../data/rootActions';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const doLogin = () => {
    dispatch(
      user.loginUser({
        seq: 0,
        name: 'Jinho',
        profileImageUrl:
          'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
      })
    );

    history.push('/');
  };

  return (
    <div className="login container">
      <h1 className="text-center">로그인</h1>
      <form>
        <input type="email" className="form-control" placeholder="Email" required />
        <input type="password" className="form-control" placeholder="Password" required />
        <button className="btn btn-lg btn-primary btn-block" onClick={() => doLogin()}>
          로그인
        </button>
      </form>
      <p className="text-help text-center">
        계정이 필요하신가요?{' '}
        <Link className="text-center new-account" to="/signup">
          계정 만들기
        </Link>
      </p>
      <style jsx global>{`
        .login form {
          max-width: 320px;
          padding: 8px;
          margin: 0 auto;
        }
        .login input.form-control {
          font-size: 16px;
          height: auto;
          padding: 10px;
        }
        .login button.btn {
          background-color: #3b5999;
          color: #fffffe;
          font-weight: 800;
          border-color: unset;
          margin-top: 10px;
        }
        .login .text-help {
          margin-top: 10px;
        }
        .login .new-account {
          font-weight: 900;
          color: #3a5999;
        }
      `}</style>
    </div>
  );
};

export default Login;
