export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_POSTS_SUCCEEDED = 'GET_ALL_POSTS_SUCCEEDED';

export const getAllPosts = filter => ({
  type: GET_ALL_POSTS,
  filter,
});

export const getAllPostsSucceded = filter => ({
  type: GET_ALL_POSTS_SUCCEEDED,
  filter,
});
