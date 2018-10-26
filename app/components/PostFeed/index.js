/**
 *
 * PostFeed
 *
 */
import PropTypes from 'prop-types';
import { Feed, Icon } from 'semantic-ui-react';
import React from 'react';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
function PostFeed({ loading, error, posts }) {
  // const events = [
  //   {
  //     date: '1 Hour Ago',
  //     image: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg',
  //     meta: '4 Likes',
  //     summary: 'Elliot Fu added you as a friend',
  //   },
  //   {
  //     date: '2 Hour Ago',
  //     image: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg',
  //     meta: '8 Likes',
  //     summary: 'Elliot Fu added you as a enemy',
  //   },
  // ];

  if (loading) {
    return <div>Loading</div>;
  } else if (!error) {
    return (
      <div>
        <Feed>
          {posts.map(post => (
            <Feed.Event>
              <Feed.Label key={post.id} image={post.image} />
              <Feed.Content key={post.id}>
                <Feed.Summary>
                  <Feed.User>{post.author}</Feed.User>
                  {` posted ${post.title}`}
                  {/* <Feed.Date>{post.date}</Feed.Date> */}
                </Feed.Summary>
                <Feed.Extra text>{post.body}</Feed.Extra>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="thumbs up outline" />
                  </Feed.Like>
                  <Feed.Like>
                    <Icon name="thumbs down outline" />
                  </Feed.Like>
                  <Feed.Like>{`${post.voteScore} votes`}</Feed.Like>
                  <Feed.Meta>{`${post.commentCount} comments`}</Feed.Meta>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          ))}
        </Feed>
      </div>
    );
  }
  return <div>Error, refresh the page</div>;
}

PostFeed.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  posts: PropTypes.any,
};

export default PostFeed;
