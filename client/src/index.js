import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import reducers from './reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise'
import thunk from 'redux-thunk'
import promise from 'redux-promise';

import './assets/css/tailwind.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunk)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
