import { combineReducers } from 'redux';
import { postsReducer } from './posts';
import { postDetailsReducer } from './postDetails';

export const serverUrl = 'http://localhost:3333';

const rootReducer = combineReducers({
  posts: postsReducer,
  postDetails: postDetailsReducer
});

export default rootReducer;