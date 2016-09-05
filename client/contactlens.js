import React from 'react';
import ReactDOM from 'react-dom';
// CSS stuff
import css from './styles/style.styl';
// Import components
import App from './components/App';
import Lenses from './components/Lenses';
import Lens from './components/Lens';

// Router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// State imports
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={App}>
        <IndexRoute component={Lenses}></IndexRoute>
        <Route path='/view/:lensId' component={Lens}></Route>
      </Route>
    </Router>
  </Provider>
);
// https://learnredux.com/view/lD46f78B4FE
ReactDOM.render(router, document.querySelector('#root'));
