/**
 *
 * PostDetail
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Divider } from 'semantic-ui-react';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectPostDetail from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getPostDetail } from './actions';

export class PostDetail extends React.PureComponent {
  componentDidMount() {
    this.props.getPostDetail();
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        <Container textAlign="justified">
          <b>{post.title}</b>
          <Divider />
          <p>{post.body}</p>
        </Container>
      </div>
    );
  }
}

PostDetail.propTypes = {
  post: PropTypes.any,
  getPostDetail: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  post: makeSelectPostDetail(),
});

function mapDispatchToProps(dispatch) {
  return {
    getPostDetail: dispatch(getPostDetail()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'postdetail', reducer });
const withSaga = injectSaga({ key: 'postdetail', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(PostDetail);
