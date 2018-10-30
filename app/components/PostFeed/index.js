/**
 *
 * PostFeed
 *
 */
import PropTypes from 'prop-types';
import { Feed, Icon } from 'semantic-ui-react';
import React from 'react';
import { Link } from 'react-router-dom';
import { DOWN_VOTE, UP_VOTE } from '../../containers/App/constants';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
function PostFeed({ loading, error, posts, category, vote }) {
  if (loading) {
    return <div>Loading</div>;
  } else if (!error && posts.length) {
    return (
      <div>
        {category && <h4>{category}</h4>}
        <Feed>
          {posts.map((post, index) => (
            <Feed.Event key={post.id}>
              <Feed.Label image={post.image} />
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User>{post.author}</Feed.User>
                  {` posted ${post.title}`}
                  {/* <Feed.Date>{post.date}</Feed.Date> */}
                </Feed.Summary>

                <Link to={`/${post.category}/${post.id}`}>
                  <Feed.Extra text>{post.body}</Feed.Extra>
                </Link>

                <Feed.Meta>
                  <Feed.Like onClick={vote(post.id, UP_VOTE, index)}>
                    <Icon name="thumbs up outline" />
                  </Feed.Like>
                  <Feed.Like onClick={vote(post.id, DOWN_VOTE, index)}>
                    <Icon name="thumbs down outline" />
                  </Feed.Like>
                  <Feed.Like>{`${post.voteScore} votes`}</Feed.Like>
                  <Feed.Meta>{`${post.commentCount} comments`}</Feed.Meta>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          ))}
        </Feed>
      </div>
    );
  } else if (!error && !posts.length) {
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
  vote: PropTypes.func,
};

export default PostFeed;
