/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import { GET_POSTS_CATEGORY_SUCCESS } from './constants';
import {
  ADD_POST_SUCCESS,
  DELETE_POST_ERROR,
  DELETE_POST_SUCCESS,
  UPDATE_POST_ERROR,
  UPDATE_POST_SUCCESS,
  VOTE_ERROR,
  VOTE_SUCCESS,
} from '../../components/Post/constants';

// The initial state of the App
export const initialState = fromJS({
  posts: [],
  categories: [],
});
export const categoriesReducer = (state = initialState, action) => {
  const { type, posts, post } = action;

  switch (type) {
    case GET_POSTS_CATEGORY_SUCCESS:
      return state.set(
        'posts',
        posts.reduce((map, obj) => ({ ...map, [obj.id]: obj }), {}),
      );
    case DELETE_POST_SUCCESS:
    case VOTE_SUCCESS:
    case UPDATE_POST_SUCCESS:
    case ADD_POST_SUCCESS:
      return state.set('posts', {
        ...state.get('posts'),
        [post.id]: { ...post },
      });
    case VOTE_ERROR:
    case DELETE_POST_ERROR:
    case UPDATE_POST_ERROR:
      return state.set('error', action.message);
    default:
      return state;
  }
};

export default categoriesReducer;
