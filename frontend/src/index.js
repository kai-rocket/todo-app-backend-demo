import 'core-js/stable';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'regenerator-runtime';

import App from './components/App';
import configureStore from './configureStore';

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
