'use client';
import LoginCard from '@/app/components/loginCard/loginCard';
import React, { useEffect, useState } from 'react';
import VerticalSlider from '../verticalSlider/verticalSlider';
import { ImageDataInterface } from '@/app/Interface/homePageInterface';
import { DIV, Gradient, Main, MainWrapper, Slider } from './style';
import { Container } from '@/app/styles/commonStyle';
import { ForgotPassword } from '../forgotPassword/forgotPassword';
import { usePathname, useRouter } from 'next/navigation';
import { isEmpty } from '@/helper/common';
import { useSelector } from 'react-redux';
import { RootReducerInterface } from '@/app/Interface/RootReducerInterface';
import SignupCard from '../signupCard/signUp';
import { LOGIN_ANIMATION_IMAGES, LOGIN_ANIMATION_IMAGES2, LOGIN_ANIMATION_IMAGES3, POSSIBLE_MEMBERSHIP_PAGES } from '@/global/constants';

interface props {
  sliderlist1: ImageDataInterface[];
  sliderlist2: ImageDataInterface[];
  sliderlist3: ImageDataInterface[];
}
export default function Login(props: props) {
  const pathName = usePathname();
  const router = useRouter();
  const [currentActivePage, setCurrentActivePage] = useState(POSSIBLE_MEMBERSHIP_PAGES.LOGIN);
  const userSelector = useSelector((state: RootReducerInterface) => state.user);
  const { userDetails } = userSelector || {};

  useEffect(() => {
    if (pathName === '/login' && !isEmpty(userDetails?.id)) {
      router.push('/');
    }
  }, [pathName, router, userDetails?.id]);

  return (
    <MainWrapper>
      <Container>
        <Main>
          <Slider>
            <VerticalSlider
              slider1Data={LOGIN_ANIMATION_IMAGES || []}
              slider2Data={LOGIN_ANIMATION_IMAGES2 || []}
              slider3Data={LOGIN_ANIMATION_IMAGES3 || []}
              isLogin={true}
            />
            <Gradient>
              <div className='top-Gratdient'></div>
              <div className='bottom-Gratdient'></div>
            </Gradient>
          </Slider>
          <DIV isSuccessfullPage={currentActivePage === POSSIBLE_MEMBERSHIP_PAGES.SUCCESSFULL_RESULT}>
            {currentActivePage === POSSIBLE_MEMBERSHIP_PAGES.LOGIN && (
              <LoginCard login isPadding={true} setCurrentActivePage={setCurrentActivePage} />
            )}
            {currentActivePage === POSSIBLE_MEMBERSHIP_PAGES.SIGNUP && (
              <SignupCard login isPadding={true} setCurrentActivePage={setCurrentActivePage} />
            )}
            {currentActivePage === POSSIBLE_MEMBERSHIP_PAGES.FORGOT && (
              <ForgotPassword setCurrentActivePage={setCurrentActivePage} />
            )}
          </DIV>
        </Main>
      </Container>
    </MainWrapper>
  );
}
