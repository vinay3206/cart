import React from 'react';
import renderer from 'react-test-renderer';

import Filter from '../index';
import filters from '../../../reducers/mockData/filters';

it('renders correctly', () => {
  const component = <Filter
    filters={filters}
    onFilterChange={() => {}}
  />;
  const tree = renderer
    .create(component)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
