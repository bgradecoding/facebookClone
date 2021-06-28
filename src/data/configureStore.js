import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createRootReducer } from '@/data/rootReducer';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './rootSaga'

const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const rootReducer = createRootReducer(history);
export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware, routerMiddleware(history)),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
  );
  sagaMiddleware.run(rootSaga);
  return {
    store,
    history,
  };
}
