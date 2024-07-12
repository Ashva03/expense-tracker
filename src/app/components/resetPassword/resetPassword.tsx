'use client';
import React, { useEffect, useState } from 'react';
import VerticalSlider from '../verticalSlider/verticalSlider';
import { ImageDataInterface } from '@/app/Interface/homePageInterface';
import { DIV, Gradient, Main, MainWrapper, Slider } from './style';
import SuccessfullResetModal from '../successfullResetModal/successfullResetModal';
import { Container } from '@/app/styles/commonStyle';
import { SetNewPassword } from '../setPassword/setPassword';
import { usePathname, useRouter } from 'next/navigation';
import { isEmpty } from '@/helper/common';
import { useSelector } from 'react-redux';
import { RootReducerInterface } from '@/app/Interface/RootReducerInterface';
import { POSSIBLE_MEMBERSHIP_PAGES } from '@/global/constants';

interface props {
  sliderlist1: ImageDataInterface[];
  sliderlist2: ImageDataInterface[];
  sliderlist3: ImageDataInterface[];
  oobCode: string;
}
export default function ResetPassword(props: props) {
  const pathName = usePathname();
  const router = useRouter();
  const { oobCode } = props;
  const [currentActivePage, setCurrentActivePage] = useState(POSSIBLE_MEMBERSHIP_PAGES.SET_PASSWORD);
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
              slider1Data={props?.sliderlist1 || []}
              slider2Data={props?.sliderlist2 || []}
              slider3Data={props?.sliderlist3 || []}
              isLogin
            />
            <Gradient>
              <div className='top-Gratdient'></div>
              <div className='bottom-Gratdient'></div>
            </Gradient>
          </Slider>
          <DIV isSuccessfullPage={currentActivePage === POSSIBLE_MEMBERSHIP_PAGES.SUCCESSFULL_RESULT}>
            {currentActivePage === POSSIBLE_MEMBERSHIP_PAGES.SET_PASSWORD && (
              <SetNewPassword
                onClose={() => router.push('/login')}
                oobCode={oobCode}
                setCurrentActivePage={setCurrentActivePage}
              />
            )}
            {currentActivePage === POSSIBLE_MEMBERSHIP_PAGES.SUCCESSFULL_RESULT && (
              <SuccessfullResetModal buttonTitle='Go Back to Login' isLoginPage={true} />
            )}
          </DIV>
        </Main>
      </Container>
    </MainWrapper>
  );
}
