import React from 'react';
import Product from '../product';

const CartProducts = ({ cartItems }) =>
  cartItems.map(({ item, quantity }) =>
    <Product
      product={item}
      key={`cart-${item.id}`}
      count={quantity}
      isAddToCartDisabled
    />
  );

export default CartProducts;
