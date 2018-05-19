import { put } from 'redux-saga/effects';
import { FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAILURE,
} from '../actions/types';
import products from '../reducers/mockData/products';

export function* fetchProductsHandler() {
  try {
    yield put({ type: FETCH_PRODUCTS_SUCCESS, payload: products });
  } catch (error) {
    yield put({ type: FETCH_PRODUCTS_FAILURE });
  }
}

export function* fetchProductDetailHandler(action) {
  try {
    const item = products.find((p) => p.id === parseInt(action.payload, 10));
    yield put({ type: FETCH_PRODUCT_DETAILS_SUCCESS, payload: item });
  } catch (error) {
    yield put({ type: FETCH_PRODUCT_DETAILS_FAILURE });
  }
}
