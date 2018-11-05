/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Icon, Grid, Feed, Form } from 'semantic-ui-react';
import { DOWN_VOTE, UP_VOTE } from './constants';

export const PostDetailed = ({
  post,
  voteFunc,
  isEditing,
  deletePostFunc,
  onChangeInput,
  update,
  cancel,
  edit,
}) => {
  if (!post) {
    return <div />;
  }

  if (isEditing) {
    return (
      <Form key={post.id} columns={2}>
        <Form.Input
          onChange={onChangeInput('title')}
          label="Title"
          defaultValue={post.title}
        />

        <Form.TextArea
          autoHeight
          label="Body"
          onChange={onChangeInput('body')}
          defaultValue={post.body}
        />

        <Form.Group>
          <Button primary animated="vertical" onClick={update}>
            <Button.Content hidden>Submit</Button.Content>
            <Button.Content visible>
              <Icon name="check" />
            </Button.Content>
          </Button>

          <Button animated="vertical" onClick={cancel}>
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
      <Feed.Content>
        <Feed.Summary>
          <Grid columns={2}>
            <Grid.Column width={12}>
              <Feed.User>{post.author}</Feed.User>
              <h2>{post.title}</h2>
            </Grid.Column>
            <Grid.Column width={4}>
              <Button basic icon="pencil" circular onClick={edit} />
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

        <Feed.Extra text>{post.body}</Feed.Extra>

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
};

PostDetailed.propTypes = {
  post: PropTypes.object,
  voteFunc: PropTypes.func,
  isEditing: PropTypes.bool,
  deletePostFunc: PropTypes.func,
  onChangeInput: PropTypes.func,
  update: PropTypes.func,
  cancel: PropTypes.func,
  edit: PropTypes.func,
};

export default PostDetailed;
