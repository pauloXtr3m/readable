import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Grid } from 'semantic-ui-react';
import PostFeed from 'components/PostFeed/Loadable';
import { makeSelectPosts, makeSelectCategories } from './selectors';
import { loadApplication } from '../App/actions';
import CategoriesMenu from '../../components/CategoriesMenu';
import { makeSelectLocation } from '../App/selectors';
import NewPostForm from '../../components/NewPostForm';

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
            <NewPostForm categories={categories} />
            <PostFeed {...postFeedProps} />
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

export default compose(withConnect)(HomePage);
