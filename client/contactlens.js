import React from 'react';
import ReactDOM from 'react-dom';
// CSS stuff
import css from './styles/style.styl';
// Router deps
import { Router, browserHistory } from 'react-router';
// App routes in components/route.js
import routes from './components/routes';

// State imports
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>
);
// https://learnredux.com/view/BWN-9bF51BU
ReactDOM.render(router, document.querySelector('#root'));
