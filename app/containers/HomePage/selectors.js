import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const makeSelectPosts = () =>
  createSelector(selectGlobal, globalState => globalState.get('posts'));

const makeSelectCategories = () =>
  createSelector(selectGlobal, globalState => globalState.get('categories'));

export { makeSelectPosts, makeSelectCategories };
