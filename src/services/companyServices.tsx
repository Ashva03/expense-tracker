'use client';
import { setErrorMessage } from '@/actions/messageActions';
import { setUserLoading } from '@/actions/userActions';
import { getAPIErrorReason } from '@/helper/common';
import { createCompany } from '@/serverActions/companyActions';
import { AnyAction, Dispatch } from 'redux';

/**
 * @desc Add company details
 * @param {*} payload
 */
export const addcompanyDetails: any = (payload: any) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch(setUserLoading(true));
    console.log('====', payload)
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

export function dispatchUserError(msg: string, dispatch: Dispatch<AnyAction>) {
  dispatch(setErrorMessage(msg));
}
