'use client';
import { images } from '@/app/assets/images';
import { ButtonSection, Content, Description, Div, Icon, MainDiv, Title } from './style';
import Button from '../button/button';
import { useCallback, useEffect, useState } from 'react';
import { auth } from '@/utils/firebase';
import { deleteUser } from '@/serverActions/userActions';
import { removeAllSaveBrands } from '@/serverActions/brandActions';
import { useDispatch, useSelector } from 'react-redux';
import { setErrorMessage, setSuccessMessage } from '@/actions/messageActions';
import { useRouter } from 'next/navigation';
import { logoutUserDetails } from '@/services/appServices';

interface Props {
  onClose: () => void;
}
const DeletePopUpModal: React.FC<Props> = (props) => {
  const { onClose } = props;
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const userSelector = useSelector((state: any) => state.user);
  const { userDetails } = userSelector || {};
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleDelete = useCallback(async () => {
    try {
      setLoading(true);
      const user: any = auth.currentUser;
      if (user) {
        try {
          // Delete user saved data from MongoDB
          const result = await removeAllSaveBrands(userDetails.uid);
          if (result) {
            // Delete user details from MongoDB
            const deleteResult = await deleteUser(userDetails.uid);
            if (deleteResult) {
              // If both MongoDB operations are successful, delete user from Firebase
              await user.delete();
              // Logout and clear user preferences
              const result = dispatch(logoutUserDetails());
              if (result) {
                dispatch(setSuccessMessage('Account deleted successfully'));
                onClose();
                router.push('/login');
              }
            }
          }
        } catch (error: any) {
          // Handle any error that occurs during the process
          dispatch(setErrorMessage(error.message));
        }
      } else {
        console.log('User does not exist');
      }
    } catch (error: any) {
      dispatch(setErrorMessage(error.message));
    } finally {
      setLoading(false);
    }
  }, [dispatch, onClose, router, userDetails.uid]);
  return (
    <MainDiv>
      <Icon>
        <img src={images.deleteIcon.src} alt={'delete icon'} className='delete-icon' />{' '}
      </Icon>
      <Content>
        <Title>Are you sure?</Title>
        <Description>
          Deleting your account is permanent and irreversible. You will lose all your collections and membership status,
          if any.
        </Description>
      </Content>
      <ButtonSection>
        <Div>
          <Button title='Cancel' transparentbutton={true} width={true} onClick={onClose} />
        </Div>
        <Div>
          <Button
            title='Delete Account'
            width={true}
            isDeletebutton={true}
            onClick={handleDelete}
            isLoading={loading}
          />
        </Div>
      </ButtonSection>
    </MainDiv>
  );
};

export default DeletePopUpModal;
