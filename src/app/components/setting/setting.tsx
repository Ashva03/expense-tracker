'use client';
import { Container } from '@/app/styles/commonStyle';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Main,
  MainWrapper,
  Content,
  DetailSection,
  Profile,
  Edit,
  UserDetails,
  Title,
  UserForm,
  Input,
  ButtonSection,
  Manage,
  Account,
  Change,
  Left,
  SubTitle,
  Description,
  Line,
  ModalOpen,
  Div,
  Div2,
} from './style';
import SVGIcon from '@/app/assets/SVGIcon';
import Avatar from '../avatar/Avatar';
import Button from '../button/button';
import InputComponent from '../input/input';
import SuccessfullResetModal from '../successfullResetModal/successfullResetModal';
import DeletePopUpModal from '../deletePopUp/deletePopUp';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerInterface } from '@/app/Interface/RootReducerInterface';
import { setUserSettingInput, updateUserSettingInput } from '@/actions/userActions';
import { setErrorMessage } from '@/actions/messageActions';
import { getFirebaseUrlFromFile, isEmpty } from '@/helper/common';
import { getUserDataByUID, updateUserDetails } from '@/services/userServices';
import { SetNewPassword } from '../setPassword/setPassword';
import { useRouter } from 'next/navigation';

export const SettingComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isSetPasswordModalOpen, setIsSetPasswordModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const userSelector = useSelector((state: RootReducerInterface) => state.user);
  const { userDetails, userSettingInput } = userSelector || {};
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [profileImage, setProfileImage] = useState<{
    profile?: string;
    file?: File;
  }>({});

  useEffect(() => {
    if (userDetails?.id) {
      dispatch(
        setUserSettingInput({
          name: userDetails?.name || '',
          email: userDetails?.email || '',
          profileImage: userDetails?.profile_image || '',
        }),
      );
    }
  }, [dispatch, router, userDetails]);

  const handlePasswordClick = () => {
    setIsResetModalOpen(true);
    setIsSetPasswordModalOpen(false);
  };

  const handleResetClick = () => {
    setIsSetPasswordModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSetPasswordModalOpen(false);
    setIsDeleteModalOpen(false);
    setIsResetModalOpen(false);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleInputChange = useCallback(
    (propsName: string, value: string) => {
      dispatch(updateUserSettingInput({ propsName, value }));
    },
    [dispatch],
  );

  const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        const item = {
          profile: fileReader.result as string,
          file: file,
        };
        setProfileImage(item);
        handleInputChange('profileImage', item?.profile);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileRead = async (event: any) => {
    try {
      const file = event.target.files[0];
      let fileData = file?.name?.split('.');
      if (file.size > 500000) {
        dispatch(setErrorMessage('Please upload less than 500kb photo size.'));
        return false;
      }
      if (fileData[1] === 'jpg' || fileData[1] === 'jpeg' || fileData[1] === 'png') {
        await convertBase64(file);
      } else {
        dispatch(setErrorMessage('Please upload a valid type photo.'));
        return false;
      }
    } catch (e) {
      console.log('error', e);
    }
  };

  const handleUploadClick = () => {
    inputRef.current?.click();
  };

  const onSaveChanges = useCallback(async () => {
    try {
      setLoading(true);
      let profile = userDetails?.profile_image || '';
      if (profileImage && userDetails?.profile_image !== userSettingInput?.profileImage) {
        profile = (await getFirebaseUrlFromFile(profileImage?.file, 'UserProfiles', userDetails?.id, dispatch)) || '';
      }
      const payload = {
        name: userSettingInput?.name,
        profile_image: !isEmpty(profile) ? profile : userDetails?.profile_image,
      };
      const result = await dispatch(updateUserDetails(userDetails?.id, payload));
      if (result) {
        setProfileImage({});
        dispatch(getUserDataByUID(userDetails?.uid));
      }
    } catch (e) {
      console.log('error : ', e);
    } finally {
      setLoading(false);
    }
  }, [
    dispatch,
    profileImage,
    userDetails?.id,
    userDetails?.profile_image,
    userDetails?.uid,
    userSettingInput?.name,
    userSettingInput?.profileImage,
  ]);

  useEffect(() => {
    if (isSetPasswordModalOpen || isDeleteModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSetPasswordModalOpen, isDeleteModalOpen]);

  return (
    <>
      <Main>
        <Container>
          <MainWrapper>
            <Content>
              <DetailSection>
                <Profile>
                  <Avatar
                    imgSrc={userSettingInput?.profileImage}
                    name={userDetails?.name || userDetails?.email || ''}
                    size={100}
                  />
                  <Edit onClick={handleUploadClick}>
                    <input type='file' onChange={handleFileRead} ref={inputRef} style={{ display: 'none' }} />
                    <SVGIcon name='edit-icon' width='52' height='52' viewBox='0 0 52 52' className='svgicon' />
                  </Edit>
                </Profile>
                <UserDetails>
                  <Title>Personal Details</Title>
                  <UserForm>
                    <Input>
                      <InputComponent
                        placeholder='Enter your full name'
                        title='Full Name'
                        value={userSettingInput?.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                      />
                      <InputComponent
                        placeholder='Enter your email'
                        value={userSettingInput?.email}
                        disabled
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </Input>
                    <ButtonSection>
                      <Button
                        disabled={
                          userSettingInput?.name === (userDetails?.name || '') &&
                          userSettingInput?.email === (userDetails?.email || '') &&
                          userSettingInput?.profileImage === (userDetails?.profile_image || '')
                        }
                        isLoading={loading}
                        title='Save Changes'
                        className='button'
                        onClick={onSaveChanges}
                      />
                    </ButtonSection>
                  </UserForm>
                </UserDetails>
              </DetailSection>
            </Content>
            <Content>
              <Manage>
                <Title>Manage account</Title>
                <Account>
                  <Change>
                    <Left>
                      <SubTitle>Change Password</SubTitle>
                      <Description>Manage your password</Description>
                    </Left>
                    <ButtonSection>
                      <Button title='Change' className='manage-account' transparentbutton onClick={handleResetClick} />
                    </ButtonSection>
                  </Change>
                  <Line />
                  <Change>
                    <Left>
                      <SubTitle>Delete account</SubTitle>
                      <Description>Permanently delete your b2b creative account.</Description>
                    </Left>
                    <ButtonSection>
                      <Button title='Delete' transparentbutton className='delete' onClick={handleDeleteClick} />
                    </ButtonSection>
                  </Change>
                </Account>
              </Manage>
            </Content>
          </MainWrapper>
          {isDeleteModalOpen && (
            <>
              <ModalOpen onClick={handleCloseModal}></ModalOpen>
              <Div2>
                <DeletePopUpModal onClose={handleCloseModal} />
              </Div2>
            </>
          )}
          {isResetModalOpen && (
            <>
              <ModalOpen onClick={handleCloseModal}></ModalOpen>
              <Div2>
                <SuccessfullResetModal onClose={handleCloseModal} isSettingPage={true} buttonTitle='Go Back' />
              </Div2>
            </>
          )}
          {isSetPasswordModalOpen && (
            <>
              <ModalOpen onClick={handleCloseModal}></ModalOpen>
              <Div>
                <SetNewPassword
                  onClose={handleCloseModal}
                  onOpenModal={handlePasswordClick}
                  isSetPasswordModal={true}
                  isChangePasswordModel={true}
                />
              </Div>
            </>
          )}
        </Container>
      </Main>
    </>
  );
};
