import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import rootReducer from '../reducers';

const config = {
  key: 'redmart', // key is required
  storage, // storage is now required
  blacklist: ['product', 'cart'],
};
const reducer = persistReducer(config, rootReducer);

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
  );
  store.runSaga = sagaMiddleware.run;

  const persistor = persistStore(store);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return { persistor, store };
}
