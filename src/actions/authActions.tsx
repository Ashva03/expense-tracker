import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import * as Actions from './types';

/**
 * @desc Set Auth Loader
 */
export const setAuthLoader: ActionCreatorWithPayload<boolean, string> = createAction(Actions.SET_AUTH_LOADER);

/**
 * @desc Clear Auth details
 */
export const clearAuthData = () => (dispatch: Dispatch) => {
  dispatch(setAuthLoader(false));
};
