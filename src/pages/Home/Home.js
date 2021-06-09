import React, { Component } from 'react';
import WritePost from './WritePost';
import PostList from './PostList';
import PropTypes from 'prop-types';

export default class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <div className="posts container">
          <WritePost />
          <PostList />
        </div>
      </>
    );
  }
}
