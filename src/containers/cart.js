import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../components/header';
import CartProducts from '../components/cart-product-list';

export const Cart = ({ cart: { items } }) =>
  (
    <div>
      <Header />
      <div className="flex-container">
        <div className="home-content-container flex-6">
          {
            items && items.length
            ?
              <CartProducts cartItems={items}/>
            :
              <span>No items in cart</span>
          }
        </div>
      </div>
    </div>
  );

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}


export default connect(mapStateToProps, null)(Cart);
