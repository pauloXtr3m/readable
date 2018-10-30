import { all, call, put, takeEvery } from 'redux-saga/effects';
import * as PostsAPI from '../../utils/postsAPI';
import * as CategoriesAPI from '../../utils/categoriesAPI';
import {
  LOAD_APPLICATION,
  LOAD_APPLICATION_ERROR,
  LOAD_APPLICATION_SUCCESS,
  VOTE,
  VOTE_ERROR,
  VOTE_SUCCESS,
} from '../App/constants';

function* fetchApplicationData(action) {
  try {
    const posts = yield call(PostsAPI.getAll, '');
    const categories = yield call(CategoriesAPI.getAll, '');
    const newAction = { ...action, posts, categories };
    yield put({ ...newAction, type: LOAD_APPLICATION_SUCCESS });
  } catch (e) {
    yield put({ type: LOAD_APPLICATION_ERROR, message: e.message });
  }
}

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
  yield all([
    yield takeEvery(LOAD_APPLICATION, fetchApplicationData),
    yield takeEvery(VOTE, vote),
  ]);
}
