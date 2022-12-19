import { applyMiddleware, compose, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { save } from 'redux-localstorage-simple';
import { withAsyncReducer } from './middleware/workerMiddleware';
import getAsyncReducer from './worker/rootAsyncReducer';
import rootReducer from './reducers/rootReducer';
import productsFacade from './reducers/products/facade';

const composeEnhancers =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

function getStore(initialState): Store {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(save(), withAsyncReducer(getAsyncReducer), thunk)
    )
  );
}

const actions: any = {

};

const facade: any = {
  productsFacade,
};

export { getStore, actions, facade };
