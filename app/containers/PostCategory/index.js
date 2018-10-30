/**
 *
 * PostCategory
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Segment } from 'semantic-ui-react';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPostCategory from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getPostsByCategory } from './actions';
import PostFeed from '../../components/PostFeed';

import { makeSelectLoading } from '../App/selectors';

export class PostCategory extends React.Component {
  componentDidMount() {
    this.props.getPostsByCategory(this.props.match.params.category_id);
  }
  render() {
    const { posts, loading, error } = this.props;

    const category = this.props.match.params.category_id;

    const postFeedProps = {
      posts,
      loading,
      error,
      category,
    };

    return (
      <div>
        <Segment>
          <PostFeed {...postFeedProps} />
        </Segment>
      </div>
    );
  }
}

PostCategory.propTypes = {
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

function mapDispatchToProps(dispatch) {
  return {
    getPostsByCategory: categoryId => dispatch(getPostsByCategory(categoryId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'postcategory', reducer });
const withSaga = injectSaga({ key: 'postcategory', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PostCategory);
