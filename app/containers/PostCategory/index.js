/**
 *
 * PostCategory
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Segment } from 'semantic-ui-react';
import PostFeed from '../../components/PostFeed/Loadable';

import { makeSelectLoading } from '../App/selectors';
import { makeSelectPosts } from '../HomePage/selectors';

export const PostCategory = ({ posts, loading, error, match }) => {
  const category = match.params.category_id;

  const postFeedProps = {
    posts,
    loading,
    error,
    category,
    filtered: true,
  };

  return (
    <div>
      <Segment>
        <PostFeed {...postFeedProps} />
      </Segment>
    </div>
  );
};

PostCategory.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  posts: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  getPostsByCategory: PropTypes.func.isRequired,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
  loading: makeSelectLoading(),
});

const withConnect = connect(
  mapStateToProps,
  () => ({}),
);

export default compose(withConnect)(PostCategory);
