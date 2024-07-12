import { clearBrandReducerData } from '@/actions/brandActions';
import { setErrorMessage } from '@/actions/messageActions';
import { clearUserReducerData, setCurrentUser } from '@/actions/userActions';
import UserPreferenceSingleton from '@/helper/userPreferenceSingleton';
import { AnyAction, Dispatch } from 'redux';

/**
 * @desc Logout user details
 * @param {*}
 */
export const logoutUserDetails: any = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    await UserPreferenceSingleton.getInstance().clearStoredUserData();
    await UserPreferenceSingleton.removeInstance();
    dispatch(clearBrandReducerData());
    dispatch(setCurrentUser({}));
    dispatch(clearUserReducerData());
    return true;
  } catch (e) {
    dispatch(setErrorMessage('Something goes wrong, please try again later'));
    return false;
  } finally {
  }
};
