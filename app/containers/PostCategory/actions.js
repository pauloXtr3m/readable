/*
 *
 * PostCategory actions
 *
 */

import { GET_POSTS_BY_CATEGORY } from './constants';

export function getPostsByCategory(categoryId) {
  return {
    type: GET_POSTS_BY_CATEGORY,
    categoryId,
  };
}
