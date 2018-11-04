import { all, call, put, takeLatest } from 'redux-saga/effects';
import * as PostsApi from '../../utils/postsAPI';
import { LOAD_APPLICATION_ERROR } from '../App/constants';
import { getPostSuccess } from './actions';
import { GET_POST } from './constants';

import {
  ADD_COMMENT,
  DELETE_COMMENT,
  UPDATE_COMMENT,
  VOTE_COMMENT,
} from '../../components/Comment/constants';
import * as CommentsAPI from '../../utils/commentsAPI';
import {
  addCommentError,
  addCommentSuccess,
  deleteCommentError,
  deleteCommentSuccess,
  updateCommentError,
  updateCommentSuccess,
  voteCommentError,
  voteCommentSuccess,
} from '../../components/Comment/actions';

function* fetchPost(action) {
  try {
    const post = yield call(PostsApi.get, action.postId);
    const comments = yield call(PostsApi.getAllComments, action.postId);
    yield put(getPostSuccess(post, comments));
  } catch (e) {
    yield put({ type: LOAD_APPLICATION_ERROR, message: e.message });
  }
}

function* voteComment(action) {
  try {
    const comment = yield call(
      CommentsAPI.vote,
      action.commentId,
      action.option,
    );
    yield put(voteCommentSuccess(comment));
  } catch (e) {
    yield put(voteCommentError(e.message()));
  }
}

function* deleteComment(action) {
  try {
    const comment = yield call(CommentsAPI.remove, action.commentId);
    yield put(deleteCommentSuccess(comment));
  } catch (e) {
    yield put(deleteCommentError(e.message()));
  }
}

function* updateComment(action) {
  try {
    const comment = yield call(CommentsAPI.update, action.comment);
    yield put(updateCommentSuccess(comment));
  } catch (e) {
    yield put(updateCommentError(e.message()));
  }
}

function* addComment(action) {
  try {
    const comment = yield call(CommentsAPI.add, action.comment);
    yield put(addCommentSuccess(comment));
  } catch (e) {
    yield put(addCommentError(e.message()));
  }
}

export default function* postsSaga() {
  yield all([
    yield takeLatest(GET_POST, fetchPost),
    yield takeLatest(VOTE_COMMENT, voteComment),
    yield takeLatest(DELETE_COMMENT, deleteComment),
    yield takeLatest(UPDATE_COMMENT, updateComment),
    yield takeLatest(ADD_COMMENT, addComment),
  ]);
}
