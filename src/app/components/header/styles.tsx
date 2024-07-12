import { colors, typo } from '@/app/assets/style';
import Link from 'next/link';
import styled, { css } from 'styled-components';

interface Props {
  isScrollPage?: boolean;
  header?: boolean;
}
const Main = styled.div`
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 12px 0;
  }
`;

const Div = styled.div<Props>`
  border-bottom: 1px solid ${colors.lightGray};
  background-color: ${colors.offWhite};
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  margin: 0 auto;
  transition: all 0.4s;
  ${(props) =>
    props.isScrollPage &&
    css`
      background: ${colors.white};
    `};
`;
const Logo = styled(Link)`
  width: 193px;
  height: 35px;
  .logo {
    width: 193px;
    height: 35px;
    @media (max-width: 768px) {
      width: 144px;
      height: 26px;
    }
    @media (max-width: 449px) {
      width: 122px;
      height: 22px;
    }
  }
  @media (max-width: 768px) {
    width: 144px;
    height: 26px;
  }
  @media (max-width: 449px) {
    width: 122px;
    height: 22px;
  }
`;
const Rightdiv = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  @media (max-width: 768px) {
    gap: 24px;
  }
  @media (max-width: 749px) {
    display: none;
  }
  .ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-item {
    padding: 0;
  }
  .ant-dropdown {
    width: 187px;
    min-width: 187px !important;
  }
`;
const Options = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  a {
    padding: 10px 12px;
  }
  @media (max-width: 768px) {
    gap: 8px;
  }
`;
const Option = styled.div`
  ${typo.btntext};
  color: ${colors.primary};
  &:hover {
    color: ${colors.darkBlack};
  }
`;
const Buttondiv = styled.div``;

const Line = styled.div`
  border-right: 1px solid ${colors.lightGray};
  height: 32px;
`;
const Responsiveicon = styled.div`
  display: none;
  @media (max-width: 749px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  @media (max-width: 449px) {
    .btn {
      padding: 9px 19px;
    }
  }
`;
const Mobilemenu = styled.div`
  display: none;
  @media (max-width: 749px) {
    display: flex;
    padding: 22px 8px;
    gap: 40px;
    flex-direction: column;
    background-color: ${colors.offWhite};
    width: 100%;
    position: absolute;
    z-index: 1;
    .btn {
      padding: 8px;
      width: 100%;
    }
  }
`;
const Mobileoption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MobilelinkLogout = styled.div`
  ${typo.label};
  color: ${colors.danger};
  padding: 10px 12px;
  border-top: 1px solid ${colors.lightGray};
`;

const Mobilelink = styled.div`
  ${typo.label};
  color: ${colors.primary};
  padding: 10px 12px;
`;

const Overlayblock = styled.div`
  display: none;
  @media (max-width: 749px) {
    display: block;
    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    width: 100%;
    transition: all 200ms ease-in-out;
    background: rgba(0, 0, 0, 0.2);
    z-index: 1;
    top: 69px;
    height: calc(100vh - 64px);
  }
  @media (max-width: 449px) {
    top: 65px;
  }
`;

const ViewDropDown = styled.div`
  .menuStyle {
    display: flex;
    flex-direction: column;
    padding: 4px 0px 0;
    border: 1px solid ${colors.lightGray};
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.04);
    background-color: ${colors.white};
    max-width: 187px;
    width: 100%;
    margin-top: 4px;
    border-radius: 8px;
  }
`;

const Item = styled.div`
  ${typo.body3}
  color: ${colors.primary};
  padding: 8px 16px;
  &:hover {
    background: ${colors.dropdownhover};
    cursor: pointer;
  }
`;

const ItemLogout = styled.div`
  ${typo.body3}
  color: ${colors.danger};
  padding: 12px 16px;
  border-top: 1px solid ${colors.lightGray};
  &:hover {
    background: ${colors.dropdownhover};
    cursor: pointer;
    border-radius: 0 0 8px 8px;
  }
`;

const Status = styled.div`
  display: flex;
  gap: 8px;
  ${typo.body3};
  color: ${colors.darkGray};
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  .dropdown-icon {
    transform: rotate(180deg);
  }
  p {
    ${typo.body2};
    color: ${colors.primary};
    padding-left: 4px;
  }
`;

const ProfileImage = styled.div<Props>`
  overflow: hidden;
  object-fit: cover;
  @media (max-width: 449px) {
    .avtar {
      width: 32px;
      height: 32px;
      border-radius: 8px;
    }
  }
`;

const SVG = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

const MobileIcon = styled.div`
  display: flex;
  padding: 8px;
`;
export {
  Main,
  Logo,
  Rightdiv,
  Options,
  Option,
  Buttondiv,
  Div,
  Line,
  Responsiveicon,
  Mobilemenu,
  Mobileoption,
  Mobilelink,
  Overlayblock,
  ViewDropDown,
  Status,
  ProfileImage,
  Item,
  ItemLogout,
  MobilelinkLogout,
  MobileIcon,
  SVG,
};
