import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as PostsAPI from '../../utils/postsAPI';
import * as CategoriesAPI from '../../utils/categoriesAPI';
import { LOAD_APPLICATION } from './constants';
import {
  loadApplication,
  loadApplicationError,
  loadApplicationSuccess,
} from './actions';
import {
  addPostError,
  addPostSuccess,
  deletePostError,
  deletePostSuccess,
  updatePostError,
  updatePostSuccess,
  votePostError,
  votePostSuccess,
} from '../../components/Post/actions';
import {
  ADD_POST,
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
    yield put(votePostSuccess(post));
  } catch (e) {
    yield put(votePostError(e.message()));
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

function* addPost(action) {
  try {
    const post = yield call(PostsAPI.add, action.post);
    yield put(addPostSuccess(post));
    yield put(loadApplication());
  } catch (e) {
    yield put(addPostError(e.message()));
  }
}

export default function* appSaga() {
  yield all([
    takeEvery(LOAD_APPLICATION, fetchApplicationData),
    takeLatest(VOTE, vote),
    takeLatest(DELETE_POST, deletePost),
    takeLatest(UPDATE_POST, updatePost),
    takeLatest(ADD_POST, addPost),
  ]);
}
