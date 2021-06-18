import { LIKE_POST, ADD_POST } from './actionType';

export const likePost = (seq) => {
  return {
    type: LIKE_POST,
    payload: seq,
  };
};

export const addPost = (paramPost) => {
  return {
    type: ADD_POST,
    payload: paramPost,
  };
};
