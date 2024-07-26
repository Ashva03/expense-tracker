import { Dispatch } from 'redux';
import UserPreferenceSingleton from './userPreferenceSingleton';
import { isEmpty } from './common';
import { getUserDataById } from '@/services/userServices';

export const appInit: any = () => async (dispatch: Dispatch) => {
  const currentUser = UserPreferenceSingleton.getInstance().getCurrentUser();
  if (!isEmpty(currentUser)) {
    dispatch(getUserDataById(currentUser?.id));
  }

  // auth.onIdTokenChanged(async (userDetails) => {
  //   if (userDetails && !isEmpty(userDetails)) {
  //     const user = auth.currentUser;
  //     await user?.getIdToken();
  //   }
  // });

  // auth.onAuthStateChanged(async (userDetails) => {
  //   if (userDetails && !isEmpty(userDetails)) {
  //     const user = auth.currentUser;
  //     await user?.getIdToken();
  //   }
  // });
  return true;
};
