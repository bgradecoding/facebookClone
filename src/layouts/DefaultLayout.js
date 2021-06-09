import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from '../pages/Home/Header';

const DefaultLayout = ({ component: Component,  props,...rest }) => {
  return (
    <Route
      exact
      {...rest}
      render={(matchProps) => (
        <div>
          <Header />
          
          <Component {...matchProps} />
        </div>
      )}
    />
  );
};

export default DefaultLayout;
