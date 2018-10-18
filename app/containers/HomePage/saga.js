import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as PostsApi from '../../utils/postsAPI';

export const GET_ALL_POSTS_REQUEST = 'GET_ALL_POSTS_REQUEST';
export const GET_ALL_POSTS_SUCCEEDED = 'GET_ALL_POSTS_SUCCEEDED';
export const GET_ALL_POSTS_FAILED = 'GET_ALL_POSTS_FAILED';

function* fetchPosts(action) {
  try {
    const posts = yield call(PostsApi.getAll, '');
    const newAction = { ...action, posts };
    yield put({ type: 'GET_ALL_POSTS_SUCCEEDED', action: newAction });
  } catch (e) {
    yield put({ type: 'GET_ALL_POSTS_FAILED', message: e.message });
  }
}

function* postsSaga() {
  yield takeEvery('GET_ALL_POSTS_REQUEST', fetchPosts);
}

export default function* mainPostsSaga() {
  yield all(postsSaga());
}
