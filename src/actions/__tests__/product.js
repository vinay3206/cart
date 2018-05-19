import {
  FETCH_PRODUCTS,
  FETCH_FILTERS,
  ADD_TO_CART,
  APPLY_FILTER,
  FETCH_PRODUCT_DETAILS,
} from '../types';
import { fetchProducts, fetchFilters, addToCart, onFilterChange, fetchProductDetails } from '../product';

describe('fetchProducts action creator test', () => {
  it('should create an action to fetch the products', () => {
    const expectedAction = {
      type: FETCH_PRODUCTS,
    };
    expect(fetchProducts()).toEqual(expectedAction);
  });
});

describe('fetchFilters action creator test', () => {
  it('should create an action to fetch the filters', () => {
    const expectedAction = {
      type: FETCH_FILTERS,
    };
    expect(fetchFilters()).toEqual(expectedAction);
  });
});

describe('addToCart action creator test', () => {
  it('should create an action to add to cart', () => {
    const product = { id: 1 };
    const expectedAction = {
      type: ADD_TO_CART,
      payload: product,
    };
    expect(addToCart(product)).toEqual(expectedAction);
  });
});

describe('apply filter action creator test', () => {
  it('should create an action to apply filter', () => {
    const categoryId = 1;
    const optionId = 1;
    const value = 1;

    const expectedAction = {
      type: APPLY_FILTER,
      payload: { categoryId, optionId, value },
    };
    expect(onFilterChange(categoryId, optionId, value)).toEqual(expectedAction);
  });
});

describe('fetch product details action creator test', () => {
  it('should create an action to fetch product details', () => {
    const productId = 1;

    const expectedAction = {
      type: FETCH_PRODUCT_DETAILS,
      payload: productId,
    };
    expect(fetchProductDetails(productId)).toEqual(expectedAction);
  });
});
