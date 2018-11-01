import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as PostsAPI from '../../utils/postsAPI';
import * as CategoriesAPI from '../../utils/categoriesAPI';
import { LOAD_APPLICATION } from './constants';
import { loadApplicationError, loadApplicationSuccess } from './actions';
import {
  deletePostError,
  deletePostSuccess,
  updatePostError,
  updatePostSuccess,
  voteError,
  voteSuccess,
} from '../../components/Post/actions';
import {
  DELETE_POST,
  UPDATE_POST,
  VOTE,
} from '../../components/Post/constants';

function* fetchApplicationData() {
  try {
    const posts = yield call(PostsAPI.getAll, '');
    const categories = yield call(CategoriesAPI.getAll, '');
    yield put(loadApplicationSuccess(posts, categories));
  } catch (e) {
    yield put(loadApplicationError(e.message()));
  }
}

function* vote(action) {
  try {
    const post = yield call(PostsAPI.vote, action.postId, action.option);
    yield put(voteSuccess(post));
  } catch (e) {
    yield put(voteError(e.message()));
  }
}

function* deletePost(action) {
  try {
    const post = yield call(PostsAPI.remove, action.postId);
    yield put(deletePostSuccess(post));
  } catch (e) {
    yield put(deletePostError(e.message()));
  }
}

function* updatePost(action) {
  try {
    const post = yield call(PostsAPI.update, action.post);
    yield put(updatePostSuccess(post));
  } catch (e) {
    yield put(updatePostError(e.message()));
  }
}

export default function* appSaga() {
  yield all([
    takeEvery(LOAD_APPLICATION, fetchApplicationData),
    takeLatest(VOTE, vote),
    takeLatest(DELETE_POST, deletePost),
    takeLatest(UPDATE_POST, updatePost),
  ]);
}
