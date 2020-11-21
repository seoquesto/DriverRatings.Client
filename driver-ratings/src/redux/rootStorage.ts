import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { RootState } from './rootState';
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

let storage: Store<RootState>;

if (process.env.NODE_ENV === 'production') {
  storage = createStore(rootReducer, applyMiddleware(...middlewares))
} else {
  storage = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))
}

sagaMiddleware.run(rootSaga);

export { storage };