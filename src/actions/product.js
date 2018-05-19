import {
  FETCH_PRODUCTS,
  FETCH_FILTERS,
  ADD_TO_CART,
  APPLY_FILTER,
  FETCH_PRODUCT_DETAILS,
} from './types';

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const fetchFilters = () => ({
  type: FETCH_FILTERS,
});

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const onFilterChange = (categoryId, optionId, value) => ({
  type: APPLY_FILTER,
  payload: { categoryId, optionId, value },
});

export const fetchProductDetails = (id) => ({
  type: FETCH_PRODUCT_DETAILS,
  payload: id,
});

export default fetchProducts;
