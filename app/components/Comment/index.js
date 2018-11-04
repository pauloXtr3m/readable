/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { compose } from 'redux';

import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import { Feed, Grid, Button, Icon, Form } from 'semantic-ui-react';
import { deleteComment, updateComment, voteComment } from './actions';

import { DOWN_VOTE, UP_VOTE } from './constants';

class Comment extends React.Component {
  state = { edit: false };

  edit = component => () => {
    component.setState({ edit: true });
  };

  update = (comment, component) => () => {
    component.props.updateCommentFunc({
      ...comment,
      title: component.state.title ? component.state.title : comment.title,
      body: component.state.body ? component.state.body : comment.body,
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
    const { comment, voteFunc, deleteCommentFunc } = this.props;

    if (this.state.edit) {
      return (
        <Form columns={2}>
          <Form.TextArea
            autoHeight
            label="Body"
            onChange={this.onChangeInput('body')}
            defaultValue={comment.body}
          />

          <Form.Group>
            <Button
              primary
              animated="vertical"
              onClick={this.update(comment, this)}
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
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <Grid columns={2}>
              <Grid.Column width={12}>
                <Feed.User>{comment.author}</Feed.User>
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
                  onClick={deleteCommentFunc(comment.id)}
                />
              </Grid.Column>
            </Grid>
          </Feed.Summary>

          <Feed.Extra text>{comment.body}</Feed.Extra>

          <Feed.Meta>
            <Feed.Like onClick={voteFunc(comment.id, UP_VOTE)}>
              <Icon name="thumbs up outline" />
            </Feed.Like>
            <Feed.Like onClick={voteFunc(comment.id, DOWN_VOTE)}>
              <Icon name="thumbs down outline" />
            </Feed.Like>
            <Feed.Like>{`${comment.voteScore} votes`}</Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object,
  voteFunc: PropTypes.func,
  deleteCommentFunc: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    voteFunc: (commentId, option) => () => {
      dispatch(voteComment(commentId, option));
    },
    deleteCommentFunc: commentId => () => {
      dispatch(deleteComment(commentId));
    },
    updateCommentFunc: comment => {
      dispatch(updateComment(comment));
    },
  };
}

const withConnect = connect(
  () => () => ({}),
  mapDispatchToProps,
);

export default compose(withConnect)(Comment);
