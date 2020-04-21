import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import manageBand from './reducers/manageBand'
import {logger} from 'redux-logger'

const store = createStore(manageBand, applyMiddleware(logger))


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
