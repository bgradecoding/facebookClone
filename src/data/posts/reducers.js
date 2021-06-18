import { LIKE_POST, ADD_POST } from './actionType';

const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let tempState = [...state];
      tempState.push({
        seq: tempState.length,
        createdAt: new Date(),
        writer: { name: action.payload.userName },
        contents: action.payload.contents,
        likes: 0,
        likesOfMe: false,
      });
      return tempState.reverse();
    case LIKE_POST:
      let tempLikeState = [...state];
      tempLikeState.filter(function (post) {
        if (post.seq === action.payload.seq) {
          post.likesOfMe = !post.likesOfMe;
          post.likes += post.likesOfMe ? 1 : -1;
        }
      });
      return tempLikeState;
    default:
      return state;
  }
};

export default postReducer;
