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
  const formatedPosts = Array.of(posts).map(post => ({
    id: post.id,
    meta: `${post.voteScore} likes`,
    summary: post.body,
    date: '',
    image: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg',
  }));

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
          {formatedPosts.map(post => (
            <Feed.Event>
              <Feed.Label key={post.id} image={post.image} />
              <Feed.Content key={post.id}>
                <Feed.Summary>
                  {post.summary}
                  <Feed.Date>{post.date}</Feed.Date>
                </Feed.Summary>
                {/* <Feed.Extra text> */}
                {/* Ours is a life of constant reruns. We're always circling back to where we'd we started, */}
                {/* then starting all over again. Even if we don't run extra laps that day, we surely will */}
                {/* come back for more of the same another day soon. */}
                {/* </Feed.Extra> */}
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="like" />
                    {post.meta}
                  </Feed.Like>
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
