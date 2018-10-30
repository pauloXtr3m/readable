import { call, put, takeEvery } from 'redux-saga/effects';
import * as CategoriesAPI from '../../utils/categoriesAPI';

import {
  GET_POSTS_BY_CATEGORY,
  GET_POSTS_BY_CATEGORY_ERROR,
  GET_POSTS_BY_CATEGORY_SUCCESS,
} from './constants';

function* fetchPostByCategory(action) {
  try {
    const posts = yield call(CategoriesAPI.getAllPosts, action.categoryId);
    const newAction = { ...action, posts };
    yield put({ ...newAction, type: GET_POSTS_BY_CATEGORY_SUCCESS });
  } catch (e) {
    yield put({ type: GET_POSTS_BY_CATEGORY_ERROR, message: e.message });
  }
}

export default function* categorySaga() {
  yield takeEvery(GET_POSTS_BY_CATEGORY, fetchPostByCategory);
}
