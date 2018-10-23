import { fromJS } from 'immutable/dist/immutable';

const postsInitialState = fromJS({
  posts: null,
});

export const postsReducer = (state = postsInitialState, action) => {
  switch (action.type) {
    case 'GET_ALL_POSTS_SUCCEEDED':
      return state.merge({
        location: action.posts,
      });
    default:
      return state;
  }
};

export default postsReducer;
