/*
 *
 * PostCategory reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_POSTS_BY_CATEGORY,
  GET_POSTS_BY_CATEGORY_ERROR,
  GET_POSTS_BY_CATEGORY_SUCCESS,
} from './constants';

export const initialState = fromJS({ posts: '', loading: false, error: false });

function postCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_BY_CATEGORY:
      return state.set('loading', true).set('error', false);
    case GET_POSTS_BY_CATEGORY_SUCCESS:
      return state.set('posts', action.posts).set('loading', false);
    case GET_POSTS_BY_CATEGORY_ERROR:
      return state.set('error', true).set('loading', false);
    default:
      return state;
  }
}

export default postCategoryReducer;
