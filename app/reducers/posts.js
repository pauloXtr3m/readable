export const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_ALL_POSTS_SUCCEEDED':
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
};

export default postsReducer;
