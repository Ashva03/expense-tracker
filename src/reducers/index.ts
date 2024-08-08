import { combineReducers } from 'redux';
import authReducer from './authReducer';
import brandReducer from './brandReducer';
import userReducer from './userReducer';
import messageReducer from './messageReducer';
import companyReducer from './companyReducer';

export default combineReducers({
  auth: authReducer,
  brand: brandReducer,
  user: userReducer,
  message: messageReducer,
  company: companyReducer,
});
