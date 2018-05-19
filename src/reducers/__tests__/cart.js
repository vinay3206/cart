import reducer, { initialState } from '../cart';
import {
  ADD_TO_CART_SUCCESS,
} from '../../actions/types';

describe('cart initial state test', () => {
  it('should return the initial state', () => {
    expect(reducer(initialState, 'INITIAL')).toEqual(initialState);
  });
});


describe('cart reducer test with ADD_TO_CART_SUCCESS action type', () => {
  it('should add the item to cart for first time', () => {
    const action = {
      type: ADD_TO_CART_SUCCESS,
      payload: { id: 1 },
    };
    const expectedState = {
      items: [{
        quantity: 1,
        item: { id: 1 },
      }],
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it('should increment the count when item is already added in the cart', () => {
    const action = {
      type: ADD_TO_CART_SUCCESS,
      payload: { id: 1 },
    };
    const expectedState = {
      items: [{
        quantity: 2,
        item: { id: 1 },
      }],
    };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
