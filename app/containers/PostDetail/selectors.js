import { createSelector } from 'reselect';

const selectPosts = state => state.get('postDetail');

const makeSelectPost = () =>
  createSelector(selectPosts, postState => postState);

export default makeSelectPost;
