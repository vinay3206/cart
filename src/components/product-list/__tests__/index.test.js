import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import ProductList from '../index';
import products from '../../../reducers/mockData/products';

it('renders correctly with Cart link', () => {
  const component = <ProductList
    products={products}
    onAddToCart={() => {}}
  />;
  const tree = renderer
    .create(
      <MemoryRouter>{component}</MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
