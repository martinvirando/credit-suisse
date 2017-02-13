import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore } from './redux/createStore';
import getRoutes from './routes';

import './styles/styles.scss';

const store = createStore(browserHistory, {});
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store} key="provider">
    <Router history={history}>
      {getRoutes(store)}
    </Router>
  </Provider>,
  document.getElementById('root'),
);
