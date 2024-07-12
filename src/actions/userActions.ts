import { ActionCreatorWithOptionalPayload, ActionCreatorWithPayload, Dispatch, createAction } from '@reduxjs/toolkit';
import * as Actions from './types';
import { ReducerInterface } from '@/app/Interface/ReducerInterface';
import { UserSettingInputReducer } from '@/app/Interface/userInterface';

/**
 * @desc Set User Loader
 */
export const setUserLoading: ActionCreatorWithPayload<boolean, string> = createAction(Actions.SET_USER_LOADING);

/**
 * @desc Set User Loader
 */
export const setCurrentUser: ActionCreatorWithPayload<any, string> = createAction(Actions.SET_CURRENT_USER);

/**
 * @desc set user setting input
 */
export const setUserSettingInput: ActionCreatorWithPayload<UserSettingInputReducer, string> = createAction(
  Actions.SET_USER_SETTING_INPUT,
);

/**
 * @desc update user setting input
 */
export const updateUserSettingInput: ActionCreatorWithPayload<ReducerInterface, string> = createAction(
  Actions.UPDATE_USER_SETTING_INPUT,
);

/**
 * @desc clear user setting input
 */
export const clearUserSettingInput: ActionCreatorWithOptionalPayload<undefined, string> = createAction(
  Actions.CLEAR_USER_SETTING_INPUT,
);

export const clearUserReducerData: any = () => (dispatch: Dispatch) => {
  dispatch(setUserLoading(false));
  dispatch(setCurrentUser({}));
  dispatch(clearUserSettingInput());
};
