import { combineReducers } from 'redux';
import * as Actions from '../actions/types';
import { createReducer } from '@/helper/reduxHelpers';
import { createReducer as createReducerOrig, current, PayloadAction } from '@reduxjs/toolkit';
import { ReducerInterface } from '@/app/Interface/ReducerInterface';
import { UserSettingInputReducer } from '@/app/Interface/userInterface';

const userLoaderReducer = createReducer({
  initialState: false,
  actionType: Actions.SET_USER_LOADING,
});

const userDetailsReducer = createReducer({
  initialState: {},
  actionType: Actions.SET_CURRENT_USER,
});

const initialState = {
  name: '',
  email: '',
  profileImage: '',
};
const userSettingInputReducer = createReducerOrig(initialState, (builder) => {
  builder
    .addCase(
      Actions.SET_USER_SETTING_INPUT,
      (state = initialState, action: PayloadAction<UserSettingInputReducer, never>) => {
        return { ...(action.payload || {}) };
      },
    )
    .addCase(Actions.UPDATE_USER_SETTING_INPUT, (state, action: PayloadAction<ReducerInterface, never>) => {
      const stateValue = JSON.parse(JSON.stringify(current(state)));
      stateValue[action.payload.propsName] = action.payload.value;
      return stateValue;
    })
    .addCase(Actions.CLEAR_USER_SETTING_INPUT, () => {
      const stateClone = JSON.parse(JSON.stringify(initialState));
      return stateClone;
    });
});

const userReducer = combineReducers({
  loading: userLoaderReducer,
  userDetails: userDetailsReducer,
  userSettingInput: userSettingInputReducer,
});

export default userReducer;
