import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export default (initialState) => {
  let middlewares = [
    thunkMiddleware
  ];

  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares),
    ),
  );

  return store;
};
