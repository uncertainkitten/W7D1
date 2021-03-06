import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import logger from 'redux-logger';
import thunk from '../middleware/thunk.js';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
  );
}
