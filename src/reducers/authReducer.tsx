import { combineReducers } from 'redux';
import * as Actions from '../actions/types';
import { createReducer } from '@/helper/reduxHelpers';

const loadingReducer = createReducer({
  initialState: false,
  actionType: Actions.SET_AUTH_LOADER,
});

const authReducer = combineReducers({
  loading: loadingReducer,
});

export default authReducer;
