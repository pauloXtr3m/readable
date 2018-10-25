import { createSelector } from 'reselect';

const selectRoute = state => state.get('route');
const selectGlobal = state => state.get('global');

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

const makeSelectPosts = () =>
  createSelector(selectGlobal, globalState => globalState.get('posts'));

export { makeSelectLocation, makeSelectPosts };
