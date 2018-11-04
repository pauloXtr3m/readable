import { createSelector } from 'reselect';

const selectPosts = state => state.get('post_page');

const makeSelectPost = () =>
  createSelector(selectPosts, state => state.get('post'));

const makeSelectComments = () =>
  createSelector(selectPosts, state => state.get('comments'));

export { makeSelectPost, makeSelectComments };
