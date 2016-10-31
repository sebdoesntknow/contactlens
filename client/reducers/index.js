import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// import reducers
import lenses from './lenses';
import users from './users';
import lensTemplates from './lensTemplates';

const rootReducer = combineReducers({
  lenses,
  users,
  lensTemplates,
  routing: routerReducer
});

export default rootReducer;
