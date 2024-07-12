import { colors, typo } from '@/app/assets/style';
import styled from 'styled-components';

const Main = styled.div`
  background-color: ${colors.bgColor};
  padding: 156px 0 64px;
  height: 100vh;
  overflow: auto;
  @media only screen and (max-width: 768px) {
    padding: 132px 0 64px;
  }
  @media only screen and (max-width: 449px) {
    padding: 84px 0 84px;
  }
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 760px;
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 449px) {
    gap: 20px;
  }
`;
const Content = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGray};
  border-radius: 24px;
  padding: 42px 60px;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 2px 25px 0px rgba(0, 0, 0, 0.05);

  @media only screen and (max-width: 768px) {
    padding: 40px;
  }
  @media only screen and (max-width: 449px) {
    padding: 20px;
    border-radius: 12px;
  }
`;

const DetailSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media only screen and (max-width: 449px) {
    gap: 32px;
  }
`;

const Edit = styled.div`
  display: none;
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  border-radius: 20px;
  top: 0;
  background: #27272785;
  @media only screen and (max-width: 768px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }
  @media only screen and (max-width: 449px) {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    svg {
      width: 32px;
      height: 32px;
    }
  }
  svg {
    path {
      fill: none;
    }
  }
`;

const Profile = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  cursor: pointer;

  @media only screen and (max-width: 449px) {
    width: 80px;
    height: 80px;

    .avtar {
      border-radius: 12px;
      width: 80px;
      height: 80px;
    }
  }
  &:hover {
    ${Edit} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media only screen and (max-width: 449px) {
    gap: 20px;
  }
`;

const Title = styled.h5`
  ${typo.heading5}
  color:${colors.primary};
  @media only screen and (max-width: 449px) {
    ${typo.mobileH5}
  }
`;

const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: end;
  .button {
    box-shadow: none;
  }
  .manage-account {
    padding: 9px 19px;
  }
  .delete {
    justify-content: flex-end;
    padding: 9px 19px;
    color: ${colors.danger};
  }
  @media only screen and (max-width: 449px) {
    .button {
      padding: 9px 19px;
    }
  }
`;

const Manage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 449px) {
    gap: 20px;
  }
`;

const Account = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  hr {
    border: 0.5px solid ${colors.lightGray};
  }
`;

const Change = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;
const Left = styled.div`
  max-width: 537px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Line = styled.div`
  border-top: 1px solid ${colors.lightGray};
  height: 0;
`;

const SubTitle = styled.h6`
  ${typo.body2}
  color: ${colors.primary};
  @media only screen and (max-width: 449px) {
    ${typo.mobilebody2}
  }
`;
const Description = styled.p`
  ${typo.body3}
  color: ${colors.darkGray};
  @media only screen and (max-width: 449px) {
    ${typo.body4}
  }
`;
const ModalOpen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  z-index: 99;
`;
const Div = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 620px;
  width: 100%;
  z-index: 999;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    max-width: 520px;
  }
  @media (max-width: 449px) {
    padding: 0 20px;
  }
`;
const Div2 = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  max-width: 480px;
  width: 100%;
  z-index: 999;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    max-width: 380px;
  }
  @media (max-width: 449px) {
    padding: 0 20px;
    max-width: 390px;
  }
`;
export {
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
};
