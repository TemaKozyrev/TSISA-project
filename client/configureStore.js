import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

export default (initialState) => {
  let middlewares = [
    thunkMiddleware
  ];
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares),
  );

  return store;
};
