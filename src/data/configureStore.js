import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import ReduxThunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createRootReducer } from '@/data/rootReducer';
import logger from 'redux-logger';

const history = createBrowserHistory();

const rootReducer = createRootReducer(history);
export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(routerMiddleware(history), ReduxThunk, logger),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
  );

  return {
    store,
    history,
  };
}
