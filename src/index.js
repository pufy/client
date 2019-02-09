import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';

import './main.scss';  
import { store } from './store';
import Routes from './scenes/routes';

render(
  <Provider store={store}>
    <Routes/>
  </Provider>,
  document.getElementById('root'),
);

