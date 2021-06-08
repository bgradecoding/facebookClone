import React, { Component } from 'react';
import Header from './Header';
import WritePost from './WritePost'
import PostList from './PostList'
import PropTypes from 'prop-types'

export default class Home extends Component {

  static propTypes = {
    
  }

  render() {
    return (
      <>
        <Header />
        <div className="posts container">
        <WritePost/>
        <PostList/>
        </div>
      </>
    );
  }
}
