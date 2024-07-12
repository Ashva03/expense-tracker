'use client';
import React, { useEffect } from 'react';
import { images } from '@/app/assets/images';
import Button from '../button/button';
import { useRouter } from 'next/navigation';
import { Box, Content, ContentDiv, Description, Icon, SuccesfullResetDiv, Title } from './style';
interface Props {
  onClose?: () => void;
  isSettingPage?: boolean;
  buttonTitle?: string;
  isLoginPage?: boolean;
}
const SuccessfullResetModal: React.FC<Props> = (props) => {
  const { isSettingPage, buttonTitle, isLoginPage } = props;
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/login');
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <Box isSettingPage={isSettingPage} isLoginPage={isLoginPage}>
      <SuccesfullResetDiv>
        <Icon>
          <img
            src={images.successfullResetIcon.src}
            width='80'
            height='80'
            alt={'sucessfull reset icon'}
            className='reseticon'
          />
        </Icon>
        <ContentDiv isSettingPage={isSettingPage}>
          <Content>
            <Title>Successfully Reset</Title>
            <Description>Your password has been successfully reset.</Description>
          </Content>
          <Button title={buttonTitle} onClick={handleButtonClick} secondary={true} width={true} className='button' />
        </ContentDiv>
      </SuccesfullResetDiv>
    </Box>
  );
};
export default SuccessfullResetModal;
