require('normalize.css');
require('./app.scss');

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './containers/App';

const reducer = (state) => { return state; };
const store = createStore(reducer, {});
const element = document.querySelector('#app');

render(
  <Provider store={store}>
    <App pinsLeft={10}/>
  </Provider>,
  element
);
