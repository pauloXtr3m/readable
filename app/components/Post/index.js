/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Feed, Grid, Icon, Input } from 'semantic-ui-react';
import React from 'react';
import { compose } from 'redux';

import { Link } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import { DOWN_VOTE, UP_VOTE } from './constants';
import { deletePost, updatePost, vote } from './actions';

class Post extends React.Component {
  state = { edit: false };

  edit() {
    this.setState({ edit: true });
  }

  update = post => () => {
    this.setState({ edit: false });
    this.props.updatePostFunc(post);
  };

  cancel() {
    this.setState({ edit: false });
  }

  render() {
    const { post, voteFunc, deletePostFunc } = this.props;

    if (this.state.edit) {
      return (
        <Feed.Event key={post.id}>
          <Feed.Label image={post.image} />
          <Feed.Content>
            <Feed.Summary>
              <Grid columns={2}>
                <Grid.Column width={12}>
                  <Input label="Author" text={post.author} />
                  {/* <Feed.User>{post.author}</Feed.User> */}
                  {/* {` posted ${post.title}`} */}
                  <Input label="Title" text={post.title} />
                </Grid.Column>
                <Grid.Column width={4}>
                  <Button
                    basic
                    icon="pencil"
                    circular
                    color="green"
                    onClick={this.update(post)}
                  />
                  <Button
                    basic
                    icon="cancel"
                    circular
                    color="red"
                    onClick={this.cancel}
                  />
                </Grid.Column>
              </Grid>
            </Feed.Summary>

            <Link to={`/${post.category}/${post.id}`}>
              <Input label="Content" text={post.body} />
            </Link>
          </Feed.Content>
        </Feed.Event>
      );
    }
    return (
      <Feed.Event key={post.id}>
        <Feed.Label image={post.image} />
        <Feed.Content>
          <Feed.Summary>
            <Grid columns={2}>
              <Grid.Column width={12}>
                <Feed.User>{post.author}</Feed.User>
                {` posted ${post.title}`}
              </Grid.Column>
              <Grid.Column width={4}>
                <Button basic icon="pencil" circular onClick={this.edit} />
                <Button
                  basic
                  icon="trash"
                  circular
                  color="red"
                  onClick={deletePostFunc(post.id)}
                />
              </Grid.Column>
            </Grid>
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
}

Post.propTypes = {
  post: PropTypes.object,
  voteFunc: PropTypes.func,
  deletePostFunc: PropTypes.func,
  updatePostFunc: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    voteFunc: (postId, option) => () => {
      dispatch(vote(postId, option));
    },
    deletePostFunc: postId => () => {
      dispatch(deletePost(postId));
    },
    updatePostFunc: post => () => {
      dispatch(updatePost(post));
    },
  };
}

const withConnect = connect(
  () => () => ({}),
  mapDispatchToProps,
);

export default compose(withConnect)(Post);
