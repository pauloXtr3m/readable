/**
 *
 * PostFeed
 *
 */
import PropTypes from 'prop-types';
import { Feed } from 'semantic-ui-react';
import React from 'react';
import Comment from '../Comment/Loadable';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
function CommentFeed({ loading, error, comments, commentCount }) {
  if (loading) {
    return <div>Loading</div>;
  } else if (!error && comments && comments.size !== 0) {
    return (
      <div>
        <h3>{`${commentCount} comment${commentCount > 1 ? 's' : ''}`}</h3>
        <Feed>
          {Object.keys(comments).map(id => {
            if (comments[id].deleted) {
              return null;
            }
            return <Comment key={id} comment={comments[id]} />;
          })}
        </Feed>
      </div>
    );
  } else if (!error || comments.size === 0) {
    return (
      <div>
        <h4>There no comments in this post</h4>
      </div>
    );
  }
  return <div>Error, refresh the page</div>;
}

CommentFeed.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  comments: PropTypes.any,
  commentCount: PropTypes.number,
};

export default CommentFeed;
