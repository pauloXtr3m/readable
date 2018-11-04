/*
 *
 * PostDetail actions
 *
 */

import { GET_POST, GET_POST_SUCCESS } from './constants';

export function getPost(postId) {
  return {
    type: GET_POST,
    postId,
  };
}

export function getPostSuccess(post, comments) {
  return {
    type: GET_POST_SUCCESS,
    post,
    comments,
  };
}
