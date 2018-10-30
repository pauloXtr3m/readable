import { LOAD_APPLICATION, VOTE } from './constants';

export function loadApplication() {
  return {
    type: LOAD_APPLICATION,
  };
}

export function vote(postId, option, index) {
  return { type: VOTE, postId, option, index };
}
