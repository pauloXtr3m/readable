import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import connect from 'react-redux/es/connect/connect';
import { compose } from 'redux';
import { addComment } from '../Comment/actions';
import { getPost } from '../../containers/PostDetailPage/actions';

class NewCommentForm extends React.Component {
  state = {};

  generateId() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  addComment = component => () => {
    const timestamp = Date.now();
    const id = component.generateId();
    component.props.addPostFunc({
      ...component.state,
      timestamp,
      id,
      parentId: component.props.postId,
    });

    component.props.getPostFunc(component.props.postId);

    component.cleanData(component);
  };

  cleanData = component => {
    component.setState({});
  };

  onChangeInput = label => (e, input) => {
    if (input.value) {
      this.setState({ [label]: input.value });
    }
  };

  render() {
    return (
      <div>
        <Segment>
          <h4>New comment</h4>
          <Form>
            <Form.Group>
              <Form.Input
                label="Author"
                placeholder="Author"
                onChange={this.onChangeInput('author')}
              />
            </Form.Group>
            <Form.TextArea
              label="Body"
              placeholder="Write about more detail about your comment"
              onChange={this.onChangeInput('body')}
            />
            <Button onClick={this.addComment(this)} primary>
              Add new comment
            </Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addPostFunc: comment => dispatch(addComment(comment)),
  getPostFunc: postId => dispatch(getPost(postId)),
});

const withConnect = connect(
  () => ({}),
  mapDispatchToProps,
);

export default compose(withConnect)(NewCommentForm);
