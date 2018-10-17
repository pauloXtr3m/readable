/**
 *
 * PostFeed
 *
 */

import { Feed, Icon } from 'semantic-ui-react';
import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class PostFeed extends React.Component {
  render() {
    const events = [
      {
        date: '1 Hour Ago',
        image: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg',
        meta: '4 Likes',
        summary: 'Elliot Fu added you as a friend',
      },
      {
        date: '2 Hour Ago',
        image: 'https://react.semantic-ui.com/images/avatar/small/justen.jpg',
        meta: '8 Likes',
        summary: 'Elliot Fu added you as a enemy',
      },
    ];
    return (
      <div>
        <Feed>
          {events.map(event => (
            <Feed.Event>
              <Feed.Label image={event.image} />
              <Feed.Content>
                <Feed.Summary>
                  {event.summary}
                  <Feed.Date>{event.date}</Feed.Date>
                </Feed.Summary>
                {/* <Feed.Extra text> */}
                {/* Ours is a life of constant reruns. We're always circling back to where we'd we started, */}
                {/* then starting all over again. Even if we don't run extra laps that day, we surely will */}
                {/* come back for more of the same another day soon. */}
                {/* </Feed.Extra> */}
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="like" />
                    {event.meta}
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          ))}
        </Feed>
      </div>
    );
  }
}

PostFeed.propTypes = {};

export default PostFeed;
