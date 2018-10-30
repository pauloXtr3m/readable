import { createSelector } from 'reselect';

const selectRoute = state => state.get('route');

const selectGlobal = globalState => globalState.get('global');

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

const makeSelectLoading = () =>
  createSelector(selectGlobal, globalState => globalState.get('loading'));

const makeSelectError = () =>
  createSelector(selectGlobal, globalState => globalState.get('error'));

export { makeSelectLocation, makeSelectLoading, makeSelectError };
