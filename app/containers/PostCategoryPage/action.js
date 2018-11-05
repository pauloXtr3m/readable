import { GET_POSTS_CATEGORY, GET_POSTS_CATEGORY_SUCCESS } from './constants';

export const getPostsFromCategory = categoryId => ({
  type: GET_POSTS_CATEGORY,
  categoryId,
});

export const getPostsFromCategorySuccess = posts => ({
  type: GET_POSTS_CATEGORY_SUCCESS,
  posts,
});
