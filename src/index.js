
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storageSession from 'redux-persist/lib/storage/session'


const persistConfig = {
    key: 'root',
    storage: storageSession,
  }
  
  const persistedReducer = persistReducer(persistConfig, rootReducer)

  let store = createStore(persistedReducer, composeWithDevTools(
      applyMiddleware(thunk),
    ));
  let persistor = persistStore(store)

// const store = createStore(rootReducer, composeWithDevTools(
//   applyMiddleware(thunk),
// ));

// let persistor = persistStore(store);


ReactDOM.render(
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>
    </Provider>, document.getElementById('root'));
serviceWorker.unregister();

