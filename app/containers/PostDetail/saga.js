import { call, put, takeEvery } from 'redux-saga/effects';
import * as PostsApi from '../../utils/postsAPI';
import {
  LOAD_APPLICATION,
  LOAD_APPLICATION_ERROR,
  LOAD_APPLICATION_SUCCESS,
} from '../App/constants';

function* fetchPosts(action) {
  try {
    const posts = yield call(PostsApi.getAll, '');
    const newAction = { ...action, posts };
    yield put({ ...newAction, type: LOAD_APPLICATION_SUCCESS });
  } catch (e) {
    yield put({ type: LOAD_APPLICATION_ERROR, message: e.message });
  }
}

export default function* postsSaga() {
  yield takeEvery(LOAD_APPLICATION, fetchPosts);
}
