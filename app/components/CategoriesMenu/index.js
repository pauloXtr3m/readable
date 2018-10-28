import { Menu } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

function CategoriesMenu({ categories }) {
  if (categories.length) {
    return (
      <Menu text vertical>
        <Menu.Item header>Categories</Menu.Item>

        {categories.map(category => (
          <div key={category.name}>
            <Route
              render={({ history }) => (
                <Menu.Item
                  onClick={() => history.push(`/${category.path}`)}
                  name={category.name}
                />
              )}
            />
          </div>
        ))}
      </Menu>
    );
  }

  return <div />;
}

CategoriesMenu.propTypes = {
  categories: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default CategoriesMenu;
