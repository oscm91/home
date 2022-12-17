import { combineReducers } from 'redux';

import paymentsReducer from './payments/reducer';
import productsReducer from './products/reducer';

const appReducer = combineReducers({
  payments: paymentsReducer,
  products: productsReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
