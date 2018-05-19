import React from 'react';
import renderer from 'react-test-renderer';

import ProductDetail from '../index';
import products from '../../../reducers/mockData/products';

const product = products[0];

it('renders correctly when product is provided', () => {
  const component = <ProductDetail
    product={product}
    onAddToCart={() => {}}
  />;
  const tree = renderer
    .create(component)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
