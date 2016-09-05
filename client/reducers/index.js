import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducers
import lenses from './lenses';
import users from './users';

const rootReducer = combineReducers({
  lenses,
  users,
  routing: routerReducer
});

export default rootReducer;
