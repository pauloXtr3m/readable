/* eslint-disable jsx-a11y/anchor-is-valid */
import { Feed, Icon } from 'semantic-ui-react';
import React from 'react';
import { compose } from 'redux';

import { Link } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import { DOWN_VOTE, UP_VOTE } from './constants';
import { vote } from './actions';
import postsSaga from './saga';

import injectSaga from '../../utils/injectSaga';

function Post({ post, voteFunc }) {
  return (
    <Feed.Event key={post.id}>
      <Feed.Label image={post.image} />
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>{post.author}</Feed.User>
          {` posted ${post.title}`}
        </Feed.Summary>

        <Link to={`/${post.category}/${post.id}`}>
          <Feed.Extra text>{post.body}</Feed.Extra>
        </Link>

        <Feed.Meta>
          <Feed.Like onClick={voteFunc(post.id, UP_VOTE)}>
            <Icon name="thumbs up outline" />
          </Feed.Like>
          <Feed.Like onClick={voteFunc(post.id, DOWN_VOTE)}>
            <Icon name="thumbs down outline" />
          </Feed.Like>
          <Feed.Like>{`${post.voteScore} votes`}</Feed.Like>
          <Feed.Meta>{`${post.commentCount} comments`}</Feed.Meta>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
  );
}

Post.propTypes = {
  post: PropTypes.object,
  voteFunc: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    voteFunc: (postId, option) => () => {
      dispatch(vote(postId, option));
    },
  };
}

const withConnect = connect(
  () => () => ({}),
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'global', saga: postsSaga });

export default compose(
  withSaga,
  withConnect,
)(Post);
