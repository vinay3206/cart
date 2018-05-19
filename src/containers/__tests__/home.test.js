import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import { Home } from '../home';
import products from '../../reducers/mockData/products';
import filters from '../../reducers/mockData/filters';

const cartItems = products.map((product) => {
  const returnObj = {
    qunatity: 1,
    item: product,
  };
  return returnObj;
});

const cart = { items: cartItems };

const product = {
  list: products,
  filteredList: products,
  productDetail: null,
  filters,
};

it('renders correctly', () => {
  const component = <Home
    cart={cart}
    product={product}
    fetchProducts ={() => {}}
    fetchFilters= {() => {}}
    onFilterChange = {() => {}}
    addToCart = {() => {}}
  />;
  const tree = renderer
    .create(<MemoryRouter>{component}</MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
