import { combineReducers } from 'redux';
import * as Actions from '../actions/types';
import { createReducer as createReducerOrig, PayloadAction } from '@reduxjs/toolkit';
import { message } from 'antd';

const initialState = {
  resError: '',
  resSuccess: '',
  resWarning: '',
};
const errorMessageReducer = createReducerOrig(initialState, (builder) => {
  builder
    .addCase(Actions.SET_RES_SUCCESS_MSG, (state = initialState, action: PayloadAction<string, never>) => {
      message.success(action.payload);
      return state;
    }).addCase(Actions.SET_RES_ERROR_MSG, (state = initialState, action: PayloadAction<string, never>) => {
      message.error(action.payload);
      return state;
    }).addCase(Actions.SET_RES_WARNING_MSG, (state = initialState, action: PayloadAction<string, never>) => {
      message.warning(action.payload);
      return state;
    }).addCase(Actions.CLEAR_RES_MSG, () => {
      const initialCreateState = JSON.parse(JSON.stringify(initialState));
      return initialCreateState;
    });
});


const messageReducer = combineReducers({
  message: errorMessageReducer,
});

export default messageReducer;
