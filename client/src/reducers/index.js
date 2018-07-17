import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import usersReducer from './users';
import auth from './auth';

export default combineReducers({
  users: usersReducer,
  auth,
  form: formReducer
});
