import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();

//  1 : Saga を middleware に追加
const middlewares = [sagaMiddleware];

//  2 : Logger を middleware に追加
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

//  3 : Store を作成し、Middleware を適用（接続？）
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
