import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import connect from 'react-redux/es/connect/connect';
import { compose } from 'redux';
import { addPost } from '../Post/actions';

class NewPostForm extends React.Component {
  state = {};

  generateId() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return `${s4() + s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
  }

  addPost = component => () => {
    const timestamp = Date.now();
    const id = component.generateId();
    component.props.addPostFunc({
      ...component.state,
      timestamp,
      id,
    });
  };

  onChangeInput = label => (e, input) => {
    if (input.value) {
      this.setState({ [label]: input.value });
    }
  };

  render() {
    const { categories } = this.props;
    const categoryArray = [];

    if (categories.length) {
      categories.forEach(c =>
        categoryArray.push({ key: c.name, value: c.name, text: c.name }),
      );
      return (
        <div>
          <Segment>
            <h4>New post</h4>
            <Form>
              <Form.Group>
                <Form.Input
                  label="Author"
                  placeholder="Author"
                  onChange={this.onChangeInput('author')}
                />
                <Form.Input
                  label="Title"
                  placeholder="Title"
                  onChange={this.onChangeInput('title')}
                />

                <Form.Select
                  label="Category"
                  placeholder="Select"
                  options={categoryArray}
                  onChange={this.onChangeInput('category')}
                />
              </Form.Group>
              <Form.TextArea
                label="Body"
                placeholder="Write about more detail about your post"
                onChange={this.onChangeInput('body')}
              />
              <Button onClick={this.addPost(this)} primary>
                Post
              </Button>
            </Form>
          </Segment>
        </div>
      );
    }
    return <div />;
  }
}

NewPostForm.propTypes = {
  categories: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

const mapDispatchToProps = dispatch => ({
  addPostFunc: post => dispatch(addPost(post)),
});

const withConnect = connect(
  () => ({}),
  mapDispatchToProps,
);

export default compose(withConnect)(NewPostForm);
