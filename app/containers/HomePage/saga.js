import { call, put, takeEvery } from 'redux-saga/effects';
import * as PostsAPI from '../../utils/postsAPI';
import * as CategoriesAPI from '../../utils/categoriesAPI';
import {
  LOAD_APPLICATION,
  LOAD_APPLICATION_ERROR,
  LOAD_APPLICATION_SUCCESS,
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

export default function* postsSaga() {
  yield takeEvery(LOAD_APPLICATION, fetchApplicationData);
}
