import React from 'react';
// Router imports
import { Route, IndexRoute } from 'react-router';
// App components
import App from './App';
import Lenses from './Lenses';
import Lens from './Lens';
import SingleLens from './SingleLens';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Lenses} />
    <Route path='/view/:code' component={SingleLens} />
  </Route>
);

export default routes;
