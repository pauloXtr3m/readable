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
import {
  LOAD_APPLICATION,
  LOAD_APPLICATION_SUCCESS,
  VOTE_ERROR,
  VOTE_SUCCESS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  posts: [],
  categories: [],
});

export const appReducer = (state = initialState, action) => {
  const { type, posts, post, categories, index } = action;

  switch (type) {
    case LOAD_APPLICATION:
      return state.set('loading', true).set('error', false);
    case LOAD_APPLICATION_SUCCESS:
      return state
        .set('posts', posts)
        .set('categories', categories)
        .set('loading', false);
    case VOTE_SUCCESS:
      return state.setIn(['posts', index], post);
    case VOTE_ERROR:
      return state.set('error', action.message);

    default:
      return state;
  }
};

export default appReducer;
