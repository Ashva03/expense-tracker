'use client';
import { setErrorMessage } from '@/actions/messageActions';
import { setCurrentUser, setUserLoading } from '@/actions/userActions';
import { UserAddPayloadInterface } from '@/app/Interface/userInterface';
import { getAPIErrorReason, isEmpty } from '@/helper/common';
import { createUser, getUserByEmail, getUserByUid, updateUser } from '@/serverActions/userActions';
import { AnyAction, Dispatch } from 'redux';

/**
 * @desc Get user details by email
 * @param {*} email
 */
export const getUserDataByEmail: any = (email: string) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch(setUserLoading(true));
    const response = await getUserByEmail(email);
    return response;
  } catch (e) {
    dispatchUserError(getAPIErrorReason(e) || 'Something goes wrong, please try again later', dispatch);
    return undefined;
  } finally {
    dispatch(setUserLoading(false));
  }
};

/**
 * @desc Get user details by email
 * @param {*} uid
 */
export const getUserDataByUID: any = (uid: string) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch(setUserLoading(true));
    const response = await getUserByUid(uid);
    if (!isEmpty(response)) {
      dispatch(setCurrentUser(response));
      return response;
    }
    return undefined;
  } catch (e) {
    dispatchUserError(getAPIErrorReason(e) || 'Something goes wrong, please try again later', dispatch);
    return undefined;
  } finally {
    dispatch(setUserLoading(false));
  }
};

/**
 * @desc Add user details
 * @param {*} payload { uid, email }
 */
export const addUserDetails: any = (payload: UserAddPayloadInterface) => async (dispatch: Dispatch<AnyAction>) => {
  try {
    dispatch(setUserLoading(true));
    const response = await createUser(payload);
    return response;
  } catch (e) {
    dispatchUserError(getAPIErrorReason(e) || 'Something goes wrong, please try again later', dispatch);
    return false;
  } finally {
    dispatch(setUserLoading(false));
  }
};

/**
 * @desc Update user details
 * @param {*} payload { name, profile_image }
 */
export const updateUserDetails: any =
  (userId: string, payload: UserAddPayloadInterface) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(setUserLoading(true));
      const response = await updateUser(userId, payload);
      return response;
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
