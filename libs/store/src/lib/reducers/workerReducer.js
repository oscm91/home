import { expose } from 'comlink';
import { combineReducers } from 'redux';
import paymentsReducer from './payments/reducer';
import productsReducer from './products/reducer';

const asyncReducer = combineReducers({
  payments: paymentsReducer,
  products: productsReducer,
});

expose(asyncReducer);
