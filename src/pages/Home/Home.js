import React, { Component } from 'react';
import Header from './Header';
import WritePost from './WritePost'
import PostList from './PostList'

export default class Home extends Component {
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
