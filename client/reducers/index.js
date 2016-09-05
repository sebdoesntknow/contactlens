import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducers
import lenses from './lenses';
import users from './users';

const rootReducer = combineReducers({
  lenses,
  users,
  router: routerReducer
});

export rootReducer;
