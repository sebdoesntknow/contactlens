import React from 'react';
import ReactDOM from 'react-dom';
// CSS stuff
import css from './styles/style.styl';
// Import components
import Main from './components/Main';
import Lenses from './components/Lenses';
import Lens from './components/Lens';

// Router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Lenses}></IndexRoute>
      <Route path='/view/:lensId' component={Lens}></Route>
    </Route>
  </Router>
);
// https://learnredux.com/view/G1CSA5AyDvI
ReactDOM.render(router, document.querySelector('#root'));
