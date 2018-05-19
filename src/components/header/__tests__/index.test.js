import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Header from '../index';

it('renders correctly with Cart link', () => {
  const component = <Header
    showCartLink
    showHomeLink={false}
  />;
  const tree = renderer
    .create(
      <MemoryRouter>{component}</MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with Home link', () => {
  const component = <Header
      showCartLink={false}
      showHomeLink
    />;
  const tree = renderer
    .create(
      <MemoryRouter>{component}</MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with Home and cart link', () => {
  const component = <Header
      showCartLink
      showHomeLink
    />;
  const tree = renderer
    .create(
      <MemoryRouter>{component}</MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with cart link and count', () => {
  const component = <Header
    showCartLink
    showHomeLink={false}
    cartItemsCount={4}
  />;
  const tree = renderer
    .create(
      <MemoryRouter>{component}</MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly with home,cart link and count', () => {
  const component = <Header
    showCartLink
    showHomeLink
    cartItemsCount={4}
  />;
  const tree = renderer
    .create(
      <MemoryRouter>{component}</MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
