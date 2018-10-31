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
import { LOAD_APPLICATION, LOAD_APPLICATION_SUCCESS } from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: true,
  error: false,
  posts: [],
  categories: [],
});

export const appReducer = (state = initialState, action) => {
  const { type, posts, categories } = action;

  switch (type) {
    case LOAD_APPLICATION:
      return state.set('loading', true).set('error', false);
    case LOAD_APPLICATION_SUCCESS:
      return state
        .set(
          'posts',
          posts.reduce((map, obj) => ({ ...map, [obj.id]: obj }), {}),
        )
        .set('categories', categories)
        .set('loading', false);
    default:
      return state;
  }
};

export default appReducer;
