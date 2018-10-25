import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Container, Menu } from 'semantic-ui-react';
import PostFeed from 'components/PostFeed/Loadable';
import postsSaga from './saga';
import injectSaga from '../../utils/injectSaga';
import makeSelectPosts from './selectors';
import { loadApplication } from '../App/actions';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.getAllPosts();
  }
  render() {
    const { posts, loading } = this.props;

    const postFeedProps = {
      posts,
      loading,
    };

    return (
      <div>
        <Menu secondary color="brown">
          <Menu.Item position="left">
            <h3>Readable</h3>
          </Menu.Item>
        </Menu>
        <Container>
          <PostFeed {...postFeedProps} />
        </Container>
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  posts: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  getAllPosts: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    getAllPosts: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadApplication());
    },
    // onChangePost: () => {},
  };
}

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga: postsSaga });

export default compose(
  // withReducer,
  withSaga,
  withConnect,
)(HomePage);
