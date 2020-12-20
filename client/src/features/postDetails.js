import axios from 'axios';
import { serverUrl } from './';

const FETCH_POST = 'FETCH_POST';
const CREATE_POST = 'CREATE_POST';
const UPDATE_POST = 'UPDATE_POST';
const DELETE_POST = 'DELETE_POST';
const POST_DETAILS_ERROR = 'POSTS_DETEAILS_ERROR';

export const postDetailsReducer = (state = null, action) => {
  switch(action.type) {
    case FETCH_POST:
    case CREATE_POST:
    case UPDATE_POST:
    case DELETE_POST:
      return action.payload;
    case POST_DETAILS_ERROR:
      const error = new Error(action.err);
      return { error: error.message };
    default:
      return state;
  }
}

export const fetchPostDetail = (id) => async dispatch => {
  try {
    const res = await axios.get(`${serverUrl}/posts/${id}`);
    dispatch({ type: FETCH_POST, payload: res.data });
  } catch (err) {
    dispatch({ type: POST_DETAILS_ERROR, err });
  }
}

export const createPost = (props) => async dispatch => {
  try {
    const res = await axios.post(`${serverUrl}/posts`, props);
    dispatch({ type: CREATE_POST, payload: res.data });
  } catch (err) {
    dispatch({ type: POST_DETAILS_ERROR, err })
  }
}