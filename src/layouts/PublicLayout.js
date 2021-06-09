import React, { Component } from 'react';
import { Route } from 'react-router-dom';

const PublicLayout = ({ component: Component, loginFunc, ...rest }) => {
  return <Route {...rest} render={(matchProps) => <Component {...matchProps} loginFunc={loginFunc}/>} />;
};

export default PublicLayout;
