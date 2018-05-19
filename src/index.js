import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store';
import rootSaga from './sagas';

const { persistor, store } = configureStore();
store.runSaga(rootSaga);

const ConnectedApp = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<div />}>
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
registerServiceWorker();

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./App', () => {
      ReactDOM.render(<ConnectedApp />, document.getElementById('root'));
    });
  }
}
