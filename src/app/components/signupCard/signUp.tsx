'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Card, Content, Firstblock, Heading, Lastblock, Logo, Maindiv, Secondblock, Thirdblock } from './styles';
import { Container } from '@/app/styles/commonStyle';
import Button from '../button/button';
import InputComponent from '../input/input';
import Link from 'next/link';
import { images } from '@/app/assets/images';
import { isEmailValid, isEmpty } from '@/helper/common';
import { useDispatch, useSelector } from 'react-redux';
import { usePathname, useRouter } from 'next/navigation';
import UserPreferenceSingleton from '@/helper/userPreferenceSingleton';
import { setErrorMessage } from '@/actions/messageActions';
import { RootReducerInterface } from '@/app/Interface/RootReducerInterface';
import { POSSIBLE_MEMBERSHIP_PAGES } from '@/global/constants';
import { signupUserDetails } from '@/serverActions/userActions';
import { appInit } from '@/helper/appInitHelper';

interface Props {
  login?: boolean;
  isPadding?: boolean;
  setCurrentActivePage?: (num: number) => void;
}

export default function SignupCard({ login, isPadding, setCurrentActivePage }: Props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const pathName = usePathname();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const userSelector = useSelector((state: RootReducerInterface) => state.user);
  const { userDetails } = userSelector || {};

  useEffect(() => {
    if (pathName === '/login' && !isEmpty(userDetails?.id)) {
      router.push('/dashboard');
    }
  }, [pathName, router, userDetails?.id]);

  const handleSubmit = useCallback(
    async (e: React.SyntheticEvent) => {
      e.preventDefault();
      if (isEmpty(name)) {
        dispatch(setErrorMessage(`Please enter name`));
        return;
      } else if (isEmpty(email)) {
        dispatch(setErrorMessage(`Please enter email`));
        return;
      } else if (!isEmailValid(email)) {
        dispatch(setErrorMessage(`Please enter correct email`));
        return;
      } else if (isEmpty(password)) {
        dispatch(setErrorMessage(`Please enter password`));
        return;
      }
      setLoading(true);
      try {
        const payload = {
          name, password, email
        }
        const result = await signupUserDetails(payload)
        if (result) {
          await UserPreferenceSingleton.getInstance().setCurrentUser(result);
          await dispatch(appInit());
          router.push('/dashboard');
        }
      } catch (err: any) {
        dispatch(setErrorMessage(`Failed to register : ${err}`));
      } finally {
        setLoading(false);
      }
    },
    [dispatch, email, name, password, router],
  );

  // const handleGoogleLogin = useCallback(async () => {
  //   try {
  //     const provider = new GoogleAuthProvider();
  //     const result = await signInWithPopup(auth, provider);
  //     const { user } = result;
  //     const { uid, email, displayName, photoURL } = user;
  //     if (uid) {
  //       const userData = await dispatch(getUserDataByUID(uid));
  //       if (isEmpty(userData)) {
  //         const responseAdd = await dispatch(
  //           addUserDetails({
  //             uid: uid,
  //             email: email || '',
  //             name: displayName,
  //             profile_image: photoURL,
  //           }),
  //         );
  //         if (responseAdd) {
  //           const addedUserData = await dispatch(getUserDataByEmail(email));
  //           UserPreferenceSingleton.getInstance().setCurrentUser(addedUserData);
  //           await dispatch(appInit());
  //           router.push('/');
  //         }
  //       } else {
  //         UserPreferenceSingleton.getInstance().setCurrentUser(userData);
  //         await dispatch(appInit());
  //         router.push('/');
  //       }
  //     }
  //   } catch (error) {
  //     dispatch(setErrorMessage(`Error logging in with Google : ${error}`));
  //   }
  // }, [dispatch, router]);

  if (!isEmpty(userDetails?.id)) return <React.Fragment></React.Fragment>;
  else
    return (
      <>
        <Maindiv login={login}>
          <Container isPadding={isPadding}>
            <Card login={login} onSubmit={handleSubmit}>
              <Content login={login}>
                {login && (
                  <Logo>
                    <img src={images.Logo.src} alt='logo' width={193} height={35} className='logo' />
                  </Logo>
                )}
                <Firstblock>
                  <Heading>SIGNUP</Heading>
                  {/* <Buttons>
                    <Button
                      title='Continue with Google'
                      leftIcon={true}
                      iconName='google-icon'
                      iconSize='16'
                      iconViewBox='0 0 16 16'
                      transparentbutton={true}
                      width={true}
                      className='button'
                      onClick={handleGoogleLogin}
                    />
                  </Buttons> */}
                </Firstblock>
                <Secondblock>
                  {/* <Line />
                  <Text>or</Text>
                  <Line /> */}
                </Secondblock>
                <Thirdblock>
                  <InputComponent
                    title='Name'
                    placeholder={'Enter your name'}
                    className='input'
                    type='text'
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                  />
                  <div className={`input-container active`}>
                    <InputComponent
                      title='Email'
                      placeholder={'Enter your email address'}
                      className='input'
                      type='email'
                      value={email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    />
                  </div>
                  <div style={{ marginBottom: '22px' }}>
                    <InputComponent
                      title='Password'
                      placeholder={'Enter your password'}
                      className='input'
                      login
                      type='password'
                      newpassword={true}
                      value={password}
                      onForgotClick={() => {
                        if (setCurrentActivePage) setCurrentActivePage(POSSIBLE_MEMBERSHIP_PAGES.FORGOT);
                      }}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button
                    title={'Create'}
                    type='submit'
                    secondary={true}
                    width={true}
                    secondaryButtonLoadingColor={true}
                    className='button'
                    isLoading={loading}
                  />
                </Thirdblock>
                <Lastblock>
                  <a
                    onClick={() => {
                      if (setCurrentActivePage) setCurrentActivePage(POSSIBLE_MEMBERSHIP_PAGES.LOGIN);
                      else router.push('/login');
                    }}>
                    Back to Login
                  </a>
                </Lastblock>
                <Lastblock>
                  <span>By continuing, you agree to b2b creative’s</span>
                  <span>
                    <Link href={''}>Terms of Service</Link>
                    and
                    <Link href={''}>Privacy Policy.</Link>
                  </span>
                </Lastblock>
              </Content>
            </Card>
          </Container>
        </Maindiv>
      </>
    );
}
