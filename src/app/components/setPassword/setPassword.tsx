import React, { useCallback, useState } from 'react';
import InputComponent from '../input/input';
import Button from '../button/button';
import { ButtonSection, Description, Form, FormContent, MainWrapper, Title } from '../forgotPassword/style';
import { isEmpty, validFirebaseErrorMessage } from '@/helper/common';
import { setErrorMessage, setSuccessMessage } from '@/actions/messageActions';
import { useDispatch } from 'react-redux';
import {
  confirmPasswordReset,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  verifyPasswordResetCode,
} from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { POSSIBLE_MEMBERSHIP_PAGES } from '@/global/constants';

interface Props {
  isSetPasswordModal?: boolean;
  onClose?: () => void;
  onOpenModal?: () => void;
  oobCode?: string;
  setCurrentActivePage?: (num: number) => void;
  isChangePasswordModel?: boolean;
}
export const SetNewPassword = (props: Props) => {
  const dispatch = useDispatch();
  const { isSetPasswordModal, onClose, oobCode, setCurrentActivePage } = props;
  const [loading, setLoading] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPasword] = useState('');

  const onSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      if (isEmpty(password)) {
        dispatch(setErrorMessage('Please enter password'));
        return;
      } else if (isEmpty(confirmPassword)) {
        dispatch(setErrorMessage('Please enter confirm password'));
        return;
      } else if (!isEmpty(password) && !isEmpty(confirmPassword)) {
        if (password !== confirmPassword) {
          dispatch(setErrorMessage('Password and confirm password must be same.'));
          return;
        }
      }
      try {
        setLoading(true);
        if (props?.isChangePasswordModel) {
          const user: any = auth.currentUser;
          if (user) {
            if (currentPassword === password) {
              dispatch(setErrorMessage('Current password and new password are same!'));
              return;
            }
            const credential = EmailAuthProvider.credential(user.email, currentPassword);
            await reauthenticateWithCredential(user, credential)
              .then(() => {
                // User re-authenticated, now update the password
                updatePassword(user, password)
                  .then(() => {
                    dispatch(setSuccessMessage('Password updated successfully'));
                  })
                  .catch((error) => {
                    dispatch(setErrorMessage('Error : changing password please try again'));
                  });
                if (onClose) onClose();
              })
              .catch((error) => {
                dispatch(setErrorMessage('Invalid Current Password'));
              });
          }
        } else if (oobCode) {
          await verifyPasswordResetCode(auth, oobCode)
            .then((email) => {
              confirmPasswordReset(auth, oobCode, password)
                .then(() => {
                  dispatch(setSuccessMessage('Your password set successfully!'));
                  if (setCurrentActivePage) setCurrentActivePage(POSSIBLE_MEMBERSHIP_PAGES.SUCCESSFULL_RESULT);
                })
                .catch((error) => {
                  const message = validFirebaseErrorMessage(error);
                  if (message) dispatch(setErrorMessage(message));
                });
            })
            .catch((error: any) => {
              const message = validFirebaseErrorMessage(error);
              if (message) dispatch(setErrorMessage(message));
            });
        }
      } catch (e: any) {
        dispatch(setErrorMessage(e.message));
      } finally {
        setLoading(false);
      }
    },
    [
      confirmPassword,
      currentPassword,
      dispatch,
      onClose,
      oobCode,
      password,
      props?.isChangePasswordModel,
      setCurrentActivePage,
    ],
  );

  return (
    <>
      <MainWrapper isSetPasswordModal={isSetPasswordModal}>
        <FormContent>
          <Title>Set New Password</Title>
          <Description>Password needs to be 8 characters and contain at least one alphabet and one number.</Description>
        </FormContent>
        <Form onSubmit={onSubmit}>
          {props?.isChangePasswordModel && (
            <InputComponent
              placeholder='Current password'
              title='Current password'
              type='password'
              newpassword
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          )}
          <InputComponent
            placeholder='New password'
            title='New password'
            type='password'
            newpassword
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputComponent
            placeholder='Confirm Password'
            title='Confirm Password'
            type='password'
            newpassword
            value={confirmPassword}
            onChange={(e) => setConfirmPasword(e.target.value)}
          />
          <ButtonSection>
            <Button
              type='submit'
              title='Change Password'
              isLoading={loading}
              secondary
              className='button'
              secondaryButtonLoadingColor={true}
            />
            <Button title='Cancel' tertiary className='button' onClick={onClose} />
          </ButtonSection>
        </Form>
      </MainWrapper>
    </>
  );
};
