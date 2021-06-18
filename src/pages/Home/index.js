import React from 'react';
import Post from './Post';
import PostForm from './PostForm';
import { useDispatch, useSelector } from 'react-redux';
import { posts } from '../../data/rootActions';

const Home = ({ sposts, onCommentSubmit, onPostSubmit, sonLikeClicked }) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer.user);
  const postsState = useSelector((state) => state.postReducer);

  const onLikeClicked = (pSeq) => {
    dispatch(
      posts.likePost({
        seq: pSeq,
      })
    );
  };

  const doAddPost = (pContents) => {
    dispatch(
      posts.addPost({
        userName: userState.name,
        contents: pContents,
      })
    );
  };

  const postList = postsState.map((post) => (
    <Post key={post.seq} onCommentSubmit={onCommentSubmit} onLikeClicked={onLikeClicked} post={post} />
  ));

  return (
    <div className="posts container">
      <PostForm onPostSubmit={doAddPost} />
      {postList}
      <style jsx>{`
        .container {
          max-width: 600px;
        }
      `}</style>
    </div>
  );
};

export default Home;
