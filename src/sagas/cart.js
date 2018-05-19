import { put } from 'redux-saga/effects';
import { ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE } from '../actions/types';

export function* addToCartHandler(action) {
  try {
    const { payload } = action;

    yield put({ type: ADD_TO_CART_SUCCESS, payload });
  } catch (error) {
    yield put({ type: ADD_TO_CART_FAILURE });
  }
}

export default addToCartHandler;
