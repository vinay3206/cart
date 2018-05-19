import { put } from 'redux-saga/effects';
import { addToCartHandler } from '../cart';
import { ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE } from '../../actions/types';

describe('addToCartHandler sage testing', () => {
  const action = {
    payload: {
      item: { id: 1 },
    },
  };
  const gen = addToCartHandler(action);

  it('should call the put functon with ADD_TO_CART_SUCCESS', () => {
    const next = gen.next();
    expect(next.value).toEqual(put({ type: ADD_TO_CART_SUCCESS, payload: action.payload }));
  });

  it('should call the put functon with ADD_TO_CART_FAILURE', () => {
    const next = gen.throw({ error: 'test' });
    expect(next.value).toEqual(put({ type: ADD_TO_CART_FAILURE }));
  });
});
