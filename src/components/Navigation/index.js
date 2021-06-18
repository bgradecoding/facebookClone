import React from 'react';
import Logo from '../../components/Logo';
import Profile from '../../components/Profile';
import NaviItem from './NaviItem';
import { user } from '../../data/rootActions';
import { useSelector, useDispatch } from 'react-redux';

const Navigation = () => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer.user);

  return (
    <nav className="navbar fixed-top bg-blue">
      <Logo />
      <ul className="nav">
        <NaviItem to="/login" text="로그인" show={!userState} />
        <NaviItem to="/signup" text="회원가입" show={!userState} />
        <Profile show={userState} user={userState} />
        <NaviItem to="/signout" action={() => dispatch(user.logoutUser())} text="로그아웃" show={userState} />
      </ul>

      <style jsx>{`
        .fixed-top {
          height: 50px;
        }
        .bg-blue {
          background-color: #3b5999;
        }
        /* ".nav" 임이의 prefix가 추가되지만 ".nav-item .nav-link"은 추가되지 않습니다. 
          자식 컴포넌트에 스타일을 적용할 수 있습니다. */
        .nav :global(.nav-item .nav-link) {
          color: white;
          font-weight: 800;
          font-size: 12px;
          cursor: pointer;
          line-height: 26px;
        }
        .nav :global(.nav-item .nav-link:hover) {
          color: rgba(255, 255, 255, 0.75);
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
