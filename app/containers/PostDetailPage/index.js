/**
 *
 * PostDetailPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Post from 'components/Post/Loadable';
import { connect } from 'react-redux';
import { Container, Feed, Segment } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { makeSelectPost, makeSelectComments } from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getPost } from './actions';
import CommentFeed from '../../components/CommentFeed/Loadable';
import NewCommentForm from '../../components/NewCommentForm';

class PostDetailPage extends React.PureComponent {
  componentDidMount() {
    this.props.getPostFunc(this.props.match.params.post_id);
  }

  render() {
    const { post, comments } = this.props;

    if (!post.id) {
      return <div> This Post was deleted</div>;
    }

    return (
      <div>
        <Container textAlign="justified">
          <Feed>
            <Post post={post} detailed />
          </Feed>
          <NewCommentForm postId={post.id} />
          <Segment>
            <CommentFeed comments={comments} commentCount={post.commentCount} />
          </Segment>
        </Container>
      </div>
    );
  }
}

PostDetailPage.propTypes = {
  post: PropTypes.any,
  comments: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  getPostFunc: PropTypes.func.isRequired,
  match: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  post: makeSelectPost(),
  comments: makeSelectComments(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPostFunc: postId => {
      dispatch(getPost(postId));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'post_page', reducer });
const withSaga = injectSaga({ key: 'post_page', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PostDetailPage);
