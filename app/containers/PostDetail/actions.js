/*
 *
 * PostDetail actions
 *
 */

import { GET_POST } from './constants';

export function getPostDetail(postId) {
  return {
    type: GET_POST,
    postId,
  };
}
