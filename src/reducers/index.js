import { combineReducers } from 'redux';
import product from './product';
import cart from './cart';

const appReducer = combineReducers({
  product,
  cart,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
