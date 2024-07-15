import React, { useCallback, useState } from 'react';
import { ButtonSection, Description, Form, FormContent, MainWrapper, Title } from './style';
import { Container } from '@/app/styles/commonStyle';
import InputComponent from '../input/input';
import Button from '../button/button';
import { useDispatch } from 'react-redux';
import { setErrorMessage } from '@/actions/messageActions';
import { isEmailValid, isEmpty } from '@/helper/common';
import { POSSIBLE_MEMBERSHIP_PAGES } from '@/global/constants';

interface Props {
  setCurrentActivePage: (num: number) => void;
}

export const ForgotPassword = (props: Props) => {
  const { setCurrentActivePage } = props;
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      if (isEmpty(email)) {
        dispatch(setErrorMessage('Please enter email address'));
        return;
      } else if (!isEmailValid(email)) {
        dispatch(setErrorMessage('Please enter valid email address'));
        return;
      }
      try {
        setLoading(true);
        const payload = { email }
        console.log('payload forgot', payload)
        // await sendPasswordResetEmail(auth, email)
        //   .then((data) => {
        //     dispatch(setSuccessMessage('Password reset lint sent to your email address!'));
        //     setCurrentActivePage(POSSIBLE_MEMBERSHIP_PAGES.LOGIN);
        //   })
        //   .catch((error) => {
        //     const message = validFirebaseErrorMessage(error);
        //     if (message) dispatch(setErrorMessage(message));
        //   });
      } catch (e) {
        console.log('error : ', e);
      } finally {
        setLoading(false);
      }
    },
    [dispatch, email],
  );

  return (
    <>
      <Container isPadding={true}>
        <MainWrapper>
          <FormContent>
            <Title>Forget your password?</Title>
            <Description>Enter your email address below and we’ll send you password reset instructions.</Description>
          </FormContent>
          <Form onSubmit={onSubmit}>
            <InputComponent
              placeholder='Enter your email address'
              title=''
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <ButtonSection>
              <Button type='submit' title='Sent Reset Link' isLoading={loading} secondary className='button' />
              <Button
                title='Back'
                tertiary
                className='button'
                onClick={() => setCurrentActivePage(POSSIBLE_MEMBERSHIP_PAGES.LOGIN)}
              />
            </ButtonSection>
          </Form>
        </MainWrapper>
      </Container>
    </>
  );
};
