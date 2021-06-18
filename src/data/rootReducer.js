import { combineReducers } from 'redux';
import userReducer from './users/reducers';
import postReducer from './posts/reducers';

const rootReducer = combineReducers({
  userReducer,
  postReducer,
});

export default rootReducer;
