/* eslint-disable jsx-a11y/anchor-is-valid */

import { Menu } from 'semantic-ui-react';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CategoriesMenu({ categories }) {
  if (categories.length) {
    return (
      <Menu text vertical>
        <Menu.Item header>Categories</Menu.Item>

        {categories.map(category => (
          <div key={category.name}>
            <Link to={`/${category.path}`}>
              <Menu.Item name={category.name} />
            </Link>
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
