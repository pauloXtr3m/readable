/**
 *
 * PostCategoryPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import PostFeed from '../../components/PostFeed/Loadable';

import { makeSelectLoading } from '../App/selectors';
import { getPostsFromCategory } from './action';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';
import injectSaga from '../../utils/injectSaga';
import saga from './saga';
import makeSelectPostCategory from './selectors';

class PostCategoryPage extends React.Component {
  componentDidMount() {
    this.props.getPostsByCategory(this.props.match.params.category_id);
  }

  render() {
    const { posts, loading, error, match } = this.props;
    const category = match.params.category_id;

    const postFeedProps = {
      posts,
      loading,
      error,
      category,
      filtered: true,
    };

    return (
      <div>
        <PostFeed {...postFeedProps} />
      </div>
    );
  }
}

PostCategoryPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  posts: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  getPostsByCategory: PropTypes.func.isRequired,
  match: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPostCategory(),
  loading: makeSelectLoading(),
});

const mapDispatchToProps = dispatch => ({
  getPostsByCategory: categoryId => dispatch(getPostsFromCategory(categoryId)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'category_page', reducer });
const withSaga = injectSaga({ key: 'category_page', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PostCategoryPage);
