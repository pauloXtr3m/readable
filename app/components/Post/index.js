/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Feed, Form, Grid, Icon } from 'semantic-ui-react';
import React from 'react';
import { compose } from 'redux';

import { Link } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import { DOWN_VOTE, UP_VOTE } from './constants';
import { deletePost, updatePost, vote } from './actions';

class Post extends React.Component {
  state = {
    edit: false,
  };

  edit = component => () => {
    component.setState({ edit: true });
  };

  update = (post, component) => () => {
    component.props.updatePostFunc({
      ...post,
      title: component.state.title ? component.state.title : post.title,
      body: component.state.body ? component.state.body : post.body,
    });
    component.setState({ edit: false });
  };

  cancel = component => () => {
    component.setState({ edit: false });
  };

  onChangeInput = label => (e, input) => {
    if (input.value) {
      this.setState({ [label]: input.value });
    }
  };

  render() {
    const { post, voteFunc, deletePostFunc } = this.props;

    if (this.state.edit) {
      return (
        <Form key={post.id} columns={2}>
          <Form.Input
            onChange={this.onChangeInput('title')}
            label="Title"
            defaultValue={post.title}
          />

          <Form.TextArea
            autoHeight
            label="Body"
            onChange={this.onChangeInput('body')}
            defaultValue={post.body}
          />

          <Form.Group>
            <Button
              primary
              animated="vertical"
              onClick={this.update(post, this)}
            >
              <Button.Content hidden>Submit</Button.Content>
              <Button.Content visible>
                <Icon name="check" />
              </Button.Content>
            </Button>

            <Button animated="vertical" onClick={this.cancel(this)}>
              <Button.Content hidden>Cancel</Button.Content>
              <Button.Content visible>
                <Icon name="cancel" />
              </Button.Content>
            </Button>
          </Form.Group>
        </Form>
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
                <Button
                  basic
                  icon="pencil"
                  circular
                  onClick={this.edit(this)}
                />
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
};

export function mapDispatchToProps(dispatch) {
  return {
    voteFunc: (postId, option) => () => {
      dispatch(vote(postId, option));
    },
    deletePostFunc: postId => () => {
      dispatch(deletePost(postId));
    },
    updatePostFunc: post => {
      dispatch(updatePost(post));
    },
  };
}

const withConnect = connect(
  () => () => ({}),
  mapDispatchToProps,
);

export default compose(withConnect)(Post);
