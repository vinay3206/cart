import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ showHomeLink, showCartLink, cartItemsCount }) =>
  <div className="header">
    <div className="pull-right">
      {
        showHomeLink
        &&
        <Link to="/home" className="btn-flat btn-blue-light">Home</Link>
      }
      {
        showCartLink
        &&
        <Link to="/cart" className="btn-flat btn-red">
          Cart{cartItemsCount ? ` (${cartItemsCount})` : ''}
        </Link>
      }
    </div>
  </div>;

Header.defaultProps = {
  showCartLink: false,
  showHomeLink: true,
  cartItemsCount: 0,
};

Header.propTypes = {
  showCartLink: PropTypes.bool,
  showHomeLink: PropTypes.bool,
  cartItemsCount: PropTypes.number,
};

export default Header;
