import { fromJS } from 'immutable';
import postCategoryReducer from '../reducer';

describe('postCategoryReducer', () => {
  it('returns the initial state', () => {
    expect(postCategoryReducer(undefined, {})).toEqual(fromJS({}));
  });
});
