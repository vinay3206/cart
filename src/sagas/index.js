import { takeLatest, takeEvery } from 'redux-saga/effects';

import { FETCH_PRODUCTS, FETCH_FILTERS, ADD_TO_CART, APPLY_FILTER, FETCH_PRODUCT_DETAILS } from '../actions/types';
import { fetchProductsHandler, fetchProductDetailHandler } from './product';
import { fetchFiltersHandler, applyFilterHandler } from './filter';
import { addToCartHandler } from './cart';

const handlers = [
  {
    type: FETCH_PRODUCTS,
    handler: fetchProductsHandler,
  },
  {
    type: FETCH_FILTERS,
    handler: fetchFiltersHandler,
  },
  {
    type: ADD_TO_CART,
    handler: addToCartHandler,
  },
  {
    type: APPLY_FILTER,
    handler: applyFilterHandler,
  },
  {
    type: FETCH_PRODUCT_DETAILS,
    handler: fetchProductDetailHandler,
  }
];

export default function* root() {
  for (let i = 0; i < handlers.length; i += 1) {
    if (handlers[i].takeEvery) {
      yield takeEvery(handlers[i].type, handlers[i].handler);
    } else {
      yield takeLatest(handlers[i].type, handlers[i].handler);
    }
  }
}
