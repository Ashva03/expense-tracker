import { ActionCreatorWithOptionalPayload, ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit';
import * as Actions from './types';

/**
 * @desc Set success message
 */
export const setSuccessMessage: ActionCreatorWithPayload<string, string> = createAction(Actions.SET_RES_SUCCESS_MSG);

/**
 * @desc Set Error message
 */
export const setErrorMessage: ActionCreatorWithPayload<string, string> = createAction(Actions.SET_RES_ERROR_MSG);

/**
 * @desc Set Warning message
 */
export const setWarningMessage: ActionCreatorWithPayload<string, string> = createAction(Actions.SET_RES_WARNING_MSG);

/**
 * @desc Clear Response message
 */
export const clearResponseMessage: ActionCreatorWithOptionalPayload<any, string> = createAction(
  Actions.CLEAR_RES_MSG
);
