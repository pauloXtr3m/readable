import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');

const makeSelectPosts = () =>
  createSelector(selectGlobal, globalState => globalState.get('posts'));

export default makeSelectPosts;
