import axios from 'axios';
import { serverUrl } from './'

const FETCH_ALL_POSTS = 'FETCH_ALL_POSTS';
const CLEAR_ALL_POSTS = 'CLEAR_ALL_POSTS';
const POSTS_ERROR = 'POSTS_ERROR';

export const postsReducer = (state = null, action) => {
  switch(action.type) {
    case FETCH_ALL_POSTS:
    case CLEAR_ALL_POSTS:
      return action.payload;
    case POSTS_ERROR:
      const error = new Error(action.err);
      return { error: error.message };
    default:
      return state;
  }
}

export const fetchPosts = () => async dispatch => {
  try {
    const res = await axios.get(`${serverUrl}/posts`);
    dispatch({ type: FETCH_ALL_POSTS, payload: res.data });
  } catch (err) {
    dispatch({ type: POSTS_ERROR, err });
  }
}

export const clearPosts = () => dispatch => {
  dispatch({ type: CLEAR_ALL_POSTS, payload: null  });
}