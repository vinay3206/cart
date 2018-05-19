import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import { Details } from '../detail';
import products from '../../reducers/mockData/products';

const product = products[0];

const cartItems = products.map((product) => {
  const returnObj = {
    qunatity: 1,
    item: product,
  };
  return returnObj;
});

const cart = { items: cartItems };

const match = { params: { id: 120 } };

it('renders correctly', () => {
  const component = <Details
    match={match}
    productDetail={product}
    fetchProductDetails={() => {}}
    addToCart={() => {}}
    cart={cart}
  />;
  const tree = renderer
    .create(<MemoryRouter>{component}</MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
