import { createSelector } from 'reselect';

/**
 * Direct selector to the postCategory state domain
 */

const selectGlobal = globalState => globalState.get('category_page');

const makeSelectPostCategory = () =>
  createSelector(selectGlobal, substate => substate.get('posts'));

export default makeSelectPostCategory;
