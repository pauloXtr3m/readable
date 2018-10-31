/**
 *
 * PostFeed
 *
 */
import PropTypes from 'prop-types';
import { Feed } from 'semantic-ui-react';
import React from 'react';
import Post from '../Post';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
function PostFeed({ loading, error, posts, category }) {
  if (loading) {
    return <div>Loading</div>;
  } else if (!error && posts && posts.size !== 0) {
    return (
      <div>
        {category && <h4>{category}</h4>}
        <Feed>
          {Object.keys(posts).map(id => <Post key={id} post={posts[id]} />)}
        </Feed>
      </div>
    );
  } else if (!error || posts.size === 0) {
    return (
      <div>
        <h4>There no posts to show</h4>
      </div>
    );
  }
  return <div>Error, refresh the page</div>;
}

PostFeed.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  posts: PropTypes.any,
  category: PropTypes.string,
};

export default PostFeed;
