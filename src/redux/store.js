import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root.reducer';
//import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root.saga';

const sagaMidleware = createSagaMiddleware();

const middlewares = [sagaMidleware];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMidleware.run(rootSaga);

export const persistor = persistStore(store);

//export default { store, persistor };
