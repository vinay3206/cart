import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import { Cart } from '../cart';
import products from '../../reducers/mockData/products';

const cartItems = products.map((product) => {
  const returnObj = {
    qunatity: 1,
    item: product,
  };
  return returnObj;
});

const cart = { items: cartItems };

it('renders correctly', () => {
  const component = <Cart
    cart={cart}
  />;
  const tree = renderer
    .create(<MemoryRouter>{component}</MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
