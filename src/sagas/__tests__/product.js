import { put } from 'redux-saga/effects';
import { fetchProductsHandler, fetchProductDetailHandler } from '../product';
import { FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAILURE,
} from '../../actions/types';
import products from '../../reducers/mockData/products';

describe('fetchProductsHandler sage testing', () => {
  const gen = fetchProductsHandler();

  it('should call the put functon with FETCH_PRODUCTS_SUCCESS', () => {
    const next = gen.next();
    expect(next.value).toEqual(put({ type: FETCH_PRODUCTS_SUCCESS, payload: products }));
  });

  it('should call the put functon with FETCH_PRODUCTS_FAILURE', () => {
    const next = gen.throw({ error: 'test' });
    expect(next.value).toEqual(put({ type: FETCH_PRODUCTS_FAILURE }));
  });
});

describe('fetchProductDetailHandler sage testing', () => {
  const action = {
    payload: 120,
  };
  const gen = fetchProductDetailHandler(action);

  it('should call the put functon with FETCH_PRODUCT_DETAILS_SUCCESS', () => {
    const next = gen.next();
    expect(next.value).toEqual(put({ type: FETCH_PRODUCT_DETAILS_SUCCESS, payload: products[0] }));
  });

  it('should call the put functon with FETCH_PRODUCT_DETAILS_FAILURE', () => {
    const next = gen.throw({ error: 'test' });
    expect(next.value).toEqual(put({ type: FETCH_PRODUCT_DETAILS_FAILURE }));
  });
});
