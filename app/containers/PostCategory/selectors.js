import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the postCategory state domain
 */

const selectPostCategoryDomain = state =>
  state.get('postcategory', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by PostCategory
 */

const makeSelectPostCategory = () =>
  createSelector(selectPostCategoryDomain, substate => substate.get('posts'));

export default makeSelectPostCategory;
export { selectPostCategoryDomain };
