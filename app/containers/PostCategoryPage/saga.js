import { call, put, takeLatest } from 'redux-saga/effects';
import * as CategoriesAPI from '../../utils/categoriesAPI';
import { GET_POSTS_CATEGORY } from './constants';
import { getPostsFromCategorySuccess } from './action';

function* getPostsByCategory(action) {
  try {
    const posts = yield call(CategoriesAPI.getAllPosts, action.categoryId);
    yield put(getPostsFromCategorySuccess(posts));
  } catch (e) {
    // yield put(loadApplicationError(e.message()));
  }
}

export default function* appSaga() {
  yield takeLatest(GET_POSTS_CATEGORY, getPostsByCategory);
}
