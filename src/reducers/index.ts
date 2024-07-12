import { combineReducers } from 'redux';
import authReducer from './authReducer';
import brandReducer from './brandReducer';
import userReducer from './userReducer';
import messageReducer from './messageReducer';

export default combineReducers({
  auth: authReducer,
  brand: brandReducer,
  user: userReducer,
  message: messageReducer,
});
