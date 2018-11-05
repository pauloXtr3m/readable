/*
 *
 * PostDetail reducer
 *
 */

import { fromJS } from 'immutable';
import { GET_POST_SUCCESS } from './constants';
import {
  DELETE_POST_SUCCESS,
  UPDATE_POST_SUCCESS,
  VOTE_SUCCESS,
} from '../../components/Post/constants';
import {
  ADD_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
  VOTE_COMMENT_SUCCESS,
} from '../../components/Comment/constants';

export const initialState = fromJS({ post: '', comments: [] });

function postDetailReducer(state = initialState, action) {
  const { post, type, comments, comment } = action;

  switch (type) {
    case GET_POST_SUCCESS:
      return state
        .set('post', post)
        .set(
          'comments',
          comments.reduce((map, obj) => ({ ...map, [obj.id]: obj }), {}),
        );
    case VOTE_SUCCESS:
    case UPDATE_POST_SUCCESS:
    case DELETE_POST_SUCCESS:
      return state.set('post', post);

    case UPDATE_COMMENT_SUCCESS:
    case ADD_COMMENT_SUCCESS:
    case VOTE_COMMENT_SUCCESS:
    case DELETE_COMMENT_SUCCESS:
      return state.set('comments', {
        ...state.get('comments'),
        [comment.id]: { ...comment },
      });
    default:
      return state;
  }
}

export default postDetailReducer;
