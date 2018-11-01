import { LOAD_APPLICATION, LOAD_APPLICATION_SUCCESS } from './constants';

export function loadApplication() {
  return {
    type: LOAD_APPLICATION,
  };
}

export function loadApplicationSuccess(posts, categories) {
  return {
    type: LOAD_APPLICATION_SUCCESS,
    posts,
    categories,
  };
}

export function loadApplicationError(message) {
  return {
    type: LOAD_APPLICATION_SUCCESS,
    message,
  };
}
