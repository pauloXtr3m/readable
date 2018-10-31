import { fromJS } from 'immutable';
import { VOTE, VOTE_ERROR, VOTE_SUCCESS } from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: true,
  error: false,
  posts: [],
  categories: [],
});

export const voteReducer = (state = initialState, action) => {
  const { type, post } = action;

  switch (type) {
    case VOTE:
      return state;
    case VOTE_SUCCESS:
      return state.setIn(['posts', post.id], post);
    case VOTE_ERROR:
      return state.set('error', action.message);
    default:
      return state;
  }
};

export default voteReducer;
