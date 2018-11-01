import {
  VOTE,
  VOTE_ERROR,
  VOTE_SUCCESS,
  DELETE_POST,
  DELETE_POST_ERROR,
  DELETE_POST_SUCCESS,
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_ERROR,
} from './constants';

export function vote(postId, option) {
  return { type: VOTE, postId, option };
}

export function voteSuccess(post) {
  return { type: VOTE_SUCCESS, post };
}

export function voteError(message) {
  return { type: VOTE_ERROR, message };
}

export function deletePost(postId) {
  return { type: DELETE_POST, postId };
}

export function deletePostSuccess(post) {
  return { type: DELETE_POST_SUCCESS, post };
}

export function deletePostError(message) {
  return { type: DELETE_POST_ERROR, message };
}

export function updatePost(post) {
  return { type: UPDATE_POST, post };
}

export function updatePostSuccess(post) {
  return { type: UPDATE_POST_SUCCESS, post };
}

export function updatePostError(message) {
  return { type: UPDATE_POST_ERROR, message };
}
