import { fromJS } from 'immutable';
import postDetailReducer from '../reducer';

describe('postDetailReducer', () => {
  it('returns the initial state', () => {
    expect(postDetailReducer(undefined, {})).toEqual(fromJS({}));
  });
});
