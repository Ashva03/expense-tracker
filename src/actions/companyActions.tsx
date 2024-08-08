import { ActionCreatorWithPayload, createAction } from '@reduxjs/toolkit';
import * as Actions from './types';

/**
 * @desc Set Company Loader
 */
export const setCompanyLoading: ActionCreatorWithPayload<boolean, string> = createAction(Actions.SET_COMPANY_LOADING);

/**
 * @desc Set Company Loader
 */
export const setCompanyList: ActionCreatorWithPayload<any, string> = createAction(Actions.SET_COMPANY_LIST);