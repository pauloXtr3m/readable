import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Grid, Segment } from 'semantic-ui-react';
import PostFeed from 'components/PostFeed/index';
import postsSaga from './saga';
import injectSaga from '../../utils/injectSaga';
import { makeSelectPosts, makeSelectCategories } from './selectors';
import { loadApplication } from '../App/actions';
import CategoriesMenu from '../../components/CategoriesMenu';
import reducer from '../App/reducer';
import injectReducer from '../../utils/injectReducer';
import { makeSelectLocation } from '../App/selectors';

export class HomePage extends React.Component {
  componentDidMount() {
    this.props.loadApplication();
  }
  render() {
    const { posts, loading, categories } = this.props;

    const postFeedProps = {
      posts,
      loading,
    };

    return (
      <div>
        <Grid columns={2}>
          <Grid.Column width={3}>
            <CategoriesMenu categories={categories} />
          </Grid.Column>
          <Grid.Column width={13}>
            <Segment>
              <PostFeed {...postFeedProps} />
            </Segment>
            {!posts.length && <h4>There are no posts to show</h4>}
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  posts: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  categories: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loadApplication: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    loadApplication: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadApplication());
    },
    changeCategory: name => {
      dispatch({ type: 'CHANGE_CATEGORY', name });
    },
  };
}

const mapStateToProps = createStructuredSelector({
  posts: makeSelectPosts(),
  categories: makeSelectCategories(),
  location: makeSelectLocation(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'global', reducer });
const withSaga = injectSaga({ key: 'global', saga: postsSaga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
