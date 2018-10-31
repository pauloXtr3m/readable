import { VOTE } from './constants';

export function vote(postId, option) {
  return { type: VOTE, postId, option };
}
