import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Product from '../index';
import products from '../../../reducers/mockData/products';

const product = products[0];

it('renders correctly when count is 0 and add to cart is enabled', () => {
  const component = <Product
    product={product}
    onAddToCart={() => {}}
    count={0}
    isAddToCartDisabled={false}
  />;
  const tree = renderer
    .create(
      <MemoryRouter>{component}</MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when count is 1 and add to cart is disabled', () => {
  const component = <Product
    product={product}
    onAddToCart={() => {}}
    count={1}
    isAddToCartDisabled
  />;
  const tree = renderer
    .create(
      <MemoryRouter>{component}</MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
