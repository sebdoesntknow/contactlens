import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import root reducer
import rootReducer from './reducers/index';

import lenses from './data/lenses';
import users from './data/users';
import lensTemplates from './data/lensTemplates';

// create object for the default data
const defaultState = {
  lenses,
  lensTemplates,
  users
};

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
