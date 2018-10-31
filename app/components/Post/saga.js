import { call, put, takeLatest } from 'redux-saga/effects';
import * as PostsAPI from '../../utils/postsAPI';
import { VOTE, VOTE_ERROR, VOTE_SUCCESS } from './constants';

function* vote(action) {
  try {
    const post = yield call(PostsAPI.vote, action.postId, action.option);
    const newAction = { ...action, post };
    yield put({ ...newAction, type: VOTE_SUCCESS });
  } catch (e) {
    yield put({ type: VOTE_ERROR, message: e.message });
  }
}

export default function* postsSaga() {
  yield takeLatest(VOTE, vote);
}
