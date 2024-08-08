'use client';
import { setCompanyList } from '@/actions/companyActions';
import { setErrorMessage } from '@/actions/messageActions';
import { setUserLoading } from '@/actions/userActions';
import { getAPIErrorReason } from '@/helper/common';
import { createCompany, getCompanyList } from '@/serverActions/companyActions';
import { AnyAction, Dispatch } from 'redux';

/**
 * @desc Add company details
 * @param {*} payload
 */
export const addcompanyDetails: any = (payload: any) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch(setUserLoading(true));
    const response = await createCompany(payload);
    if (response) {
      return response
    }
    return false;
  } catch (e) {
    dispatchUserError(getAPIErrorReason(e) || 'Something goes wrong, please try again later', dispatch);
    return false;
  } finally {
    dispatch(setUserLoading(false));
  }
};

/**
 * @desc Get company list
 * @param {*} userId
 */
export const getUserCompanyList: any = (userId: any) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch(setUserLoading(true));
    const response = await getCompanyList(userId);
    if (response) {
      dispatch(setCompanyList(response))
      return response
    }
    return false;
  } catch (e) {
    dispatchUserError(getAPIErrorReason(e) || 'Something goes wrong, please try again later', dispatch);
    return false;
  } finally {
    dispatch(setUserLoading(false));
  }
};

export function dispatchUserError(msg: string, dispatch: Dispatch<AnyAction>) {
  dispatch(setErrorMessage(msg));
}
