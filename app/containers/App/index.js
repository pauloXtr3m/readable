/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { compose } from 'redux';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PostCategory from 'containers/PostCategory/Loadable';
import { Container, Menu } from 'semantic-ui-react';
import { PostDetail } from '../PostDetail';
import injectSaga from '../../utils/injectSaga';
import appSaga from './saga';
import injectReducer from '../../utils/injectReducer';
import reducer from './reducer';

export function App() {
  return (
    <div>
      <Menu pointing secondary color="brown">
        <Link to="/">
          <Menu.Item position="left">
            <h3>Readable</h3>
          </Menu.Item>
        </Link>
      </Menu>
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/:category_id" component={PostCategory} />
          <Route exact path="/:category_id/:post_id" component={PostDetail} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </Container>
    </div>
  );
}

const withAppReducer = injectReducer({ key: 'global', reducer });
const withAppSaga = injectSaga({ key: 'global', saga: appSaga });

export default compose(
  withAppSaga,
  withAppReducer,
)(App);
