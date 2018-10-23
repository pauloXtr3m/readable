/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */
import React from 'react';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { Container, Menu } from 'semantic-ui-react';
import PostFeed from '../../components/PostFeed';
import postsSaga from './saga';
import injectSaga from '../../utils/injectSaga';
import makeSelectPosts from './selectors';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  // componentDidMount() {
  //   if(!this.props.posts){
  //     this.props.getAllPosts();
  //   }
  // }
  render() {
    return (
      <div>
        <Menu secondary color="brown">
          <Menu.Item position="left">
            <h3>Readable</h3>
          </Menu.Item>
        </Menu>
        <Container>
          <PostFeed />
        </Container>
      </div>
    );
  }
}

export function mapDispatchToProps() {
  return {
    onChangePost: () => {},
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
