import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import CartProducts from '../index';
import products from '../../../reducers/mockData/products';

const cartItems = products.map((product) => {
  const returnObj = {
    qunatity: 1,
    item: product,
  };
  return returnObj;
});

it('renders correctly', () => {
  const component = <CartProducts
    cartItems={cartItems}
    onFilterChange={() => {}}
  />;
  const tree = renderer
    .create(<MemoryRouter>{component}</MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
