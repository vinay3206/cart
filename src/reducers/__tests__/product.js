import reducer, { initialState } from '../product';

import {
  FETCH_PRODUCTS_SUCCESS,
  FETCH_FILTERS_SUCCESS,
  FETCH_PRODUCT_DETAILS_SUCCESS,
} from '../../actions/types';

describe('product initial state test', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, 'INITIAL')).toEqual(initialState);
  });
});

describe('product reducer test with FETCH_PRODUCTS_SUCCESS action type', () => {
  it('should update state', () => {
    const action = {
      type: FETCH_PRODUCTS_SUCCESS,
      payload: [{ id: 1 }],
    };

    const expectedState = {
      ...initialState,
      list: action.payload,
      filteredList: action.payload,
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});


describe('product reducer test with FETCH_FILTERS_SUCCESS action type', () => {
  it('should update filters state', () => {
    const action = {
      type: FETCH_FILTERS_SUCCESS,
      payload: [{ id: 1, options: [{ id: 2, label: '0-5' }] }],
    };

    const expectedState = {
      ...initialState,
      filters: [{ id: 1, options: [{ id: 2, label: '0-5', isApplied: false }] }],
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});

describe('product reducer test with FETCH_PRODUCT_DETAILS_SUCCESS action type', () => {
  it('should update product details state', () => {
    const action = {
      type: FETCH_PRODUCT_DETAILS_SUCCESS,
      payload: { id: 1 },
    };

    const expectedState = {
      ...initialState,
      productDetail: { id: 1 },
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
