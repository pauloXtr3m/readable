/**
 *
 * PostFeed
 *
 */
import PropTypes from 'prop-types';
import { Feed, Segment, Select } from 'semantic-ui-react';
import React from 'react';
import Post from '../Post';
import * as MapUtils from '../../utils/MapUtils';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
class PostFeed extends React.Component {
  state = { posts: [] };

  onChangeSort = component => (e, select) => {
    if (select.value) {
      component.setState({
        posts: MapUtils.getMapSorted(component.props.posts, select.value),
        sortBy: select.value,
      });
    }
  };

  render() {
    const { loading, error, posts, category, filtered } = this.props;
    const sortBy = [
      { key: 'date', value: 'date', text: 'Date' },
      { key: 'score', value: 'voteScore', text: 'Score' },
    ];

    if (loading) {
      return <div>Loading</div>;
    } else if (!error && posts && posts.size !== 0) {
      const arrayPosts = this.state.posts.length
        ? this.state.posts
        : MapUtils.toArray(posts);

      return (
        <div>
          <Segment>
            {category && <h4>{category}</h4>}
            <h5>Sort by:</h5>
            <Select
              options={sortBy}
              placeholder="Sort by"
              onChange={this.onChangeSort(this)}
            />
            <Feed>
              {arrayPosts.map(post => {
                if (post.deleted) {
                  return null;
                }
                if (filtered) {
                  if (post.category === category) {
                    return <Post key={post.id} post={post} />;
                  }
                  return null;
                }
                return <Post key={post.id} post={post} />;
              })}
            </Feed>
          </Segment>
        </div>
      );
    } else if (!error || posts.size === 0 || !posts.length) {
      return (
        <div>
          <h4>There are no posts to show</h4>
        </div>
      );
    }
    return <div>Error, refresh the page</div>;
  }
}

PostFeed.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.bool,
  posts: PropTypes.any,
  category: PropTypes.string,
  filtered: PropTypes.bool,
};

export default PostFeed;
