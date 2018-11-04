import {
  ADD_COMMENT,
  ADD_COMMENT_ERROR,
  ADD_COMMENT_SUCCESS,
  DELETE_COMMENT,
  DELETE_COMMENT_ERROR,
  DELETE_COMMENT_SUCCESS,
  UPDATE_COMMENT,
  UPDATE_COMMENT_ERROR,
  UPDATE_COMMENT_SUCCESS,
  VOTE_COMMENT,
  VOTE_COMMENT_ERROR,
  VOTE_COMMENT_SUCCESS,
} from './constants';

export function voteComment(commentId, option) {
  return { type: VOTE_COMMENT, commentId, option };
}

export function voteCommentSuccess(comment) {
  return { type: VOTE_COMMENT_SUCCESS, comment };
}

export function voteCommentError(message) {
  return { type: VOTE_COMMENT_ERROR, message };
}

export function deleteComment(commentId) {
  return { type: DELETE_COMMENT, commentId };
}

export function deleteCommentSuccess(comment) {
  return { type: DELETE_COMMENT_SUCCESS, comment };
}

export function deleteCommentError(message) {
  return { type: DELETE_COMMENT_ERROR, message };
}

export function updateComment(comment) {
  return { type: UPDATE_COMMENT, comment };
}

export function updateCommentSuccess(comment) {
  return { type: UPDATE_COMMENT_SUCCESS, comment };
}

export function updateCommentError(message) {
  return { type: UPDATE_COMMENT_ERROR, message };
}

export function addComment(comment) {
  return { type: ADD_COMMENT, comment };
}

export function addCommentSuccess(comment) {
  return { type: ADD_COMMENT_SUCCESS, comment };
}

export function addCommentError(message) {
  return { type: ADD_COMMENT_ERROR, message };
}
