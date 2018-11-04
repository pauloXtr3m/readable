/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { compose } from 'redux';

import connect from 'react-redux/es/connect/connect';
import PropTypes from 'prop-types';
import { deletePost, updatePost, votePost } from './actions';
import { PostCompact } from './compact';
import PostDetailed from './detailed';

class Post extends React.Component {
  state = { edit: false };

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
    const { detailed, post } = this.props;
    const postProps = {
      ...this.props,
      isEditing: this.state.edit,
      edit: this.edit(this),
      onChangeInput: this.onChangeInput,
      update: this.update(post, this),
      cancel: this.cancel(this),
    };

    if (detailed) {
      return <PostDetailed {...postProps} />;
    }
    return <PostCompact {...postProps} />;
  }
}

Post.propTypes = {
  detailed: PropTypes.bool,
  post: PropTypes.object,
  voteFunc: PropTypes.func,
  deletePostFunc: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    voteFunc: (postId, option) => () => {
      dispatch(votePost(postId, option));
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
