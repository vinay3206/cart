import { ADD_TO_CART_SUCCESS } from '../actions/types';

export const initialState = {
  items: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART_SUCCESS: {
      const { payload } = action;
      const { items } = state;
      const cartItem = items.find((i) => i.item.id === payload.id);
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        items.push({
          quantity: 1,
          item: payload,
        });
      }
      return {
        ...state,
        items: [...items],
      };
    }
    default:
      return state;
  }
}
