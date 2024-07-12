import { colors, typo } from '@/app/assets/style';
import Link from 'next/link';
import styled from 'styled-components';

const MainDiv = styled.div`
  display: flex;
  padding: 72px 0 72px 0;
  border-bottom: 1px solid ${colors.lightGray};
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  @media (max-width: 449px) {
    padding: 32px 0;
    flex-direction: column;
    gap: 24px;
  }
`;
const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 768px) {
    max-width: 364px;
    width: 100%;
  }
  @media (max-width: 449px) {
    max-width: max-content;
    gap: 16px;
  }
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 510px;
  width: 100%;
  @media (max-width: 449px) {
    gap: 16px;
  }
`;
const FooterLogo = styled(Link)`
  height: 44px;

  @media (max-width: 768px) {
    height: 32px;
    .logo {
      width: 178px;
      height: 32px;
    }
  }
`;

const Description = styled.div`
  ${typo.body1}
  color: ${colors.darkGray};
  @media (max-width: 769px) {
    ${typo.mobilebody1}
  }
`;
const LinkedinIcon = styled.div`
  cursor: pointer;
  display: flex;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightGray};
  &:hover {
    .svgicon {
      path {
        fill: ${colors.primary};
      }
    }
  }
  @media (max-width: 449px) {
    width: 32px;
    height: 32px;
    .svgicon {
      width: 12px;
      height: 12px;
    }
  }
`;
const RightContent = styled.div`
  display: flex;
  gap: 140px;
  @media (max-width: 768px) {
    max-width: 364px;
    width: 100%;
    gap: 60px;
    justify-content: flex-end;
  }
  @media (max-width: 449px) {
    justify-content: space-between;
    max-width: -webkit-fill-available;
  }
`;
const Columns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 449px) {
    gap: 16px;
    max-width: 165px;
    width: 100%;
  }
`;
const Heading = styled.div`
  ${typo.heading5}
  color: ${colors.primary};
  @media (max-width: 768px) {
    ${typo.tabletH5};
  }
  @media (max-width: 449px) {
    ${typo.mobileH5};
  }
`;
const Options = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 449px) {
    gap: 12px;
  }
`;
const CustomOption = styled.div`
  ${typo.body2}
  color: ${colors.darkGray};
  &:hover {
    color: ${colors.primary};
  }

  @media (max-width: 769px) {
    ${typo.mobilebody2};
  }
`;
const CopyRightText = styled.div`
  padding: 24px 0;
  ${typo.body4}
  text-align: center;
  color: ${colors.darkGray};
  @media (max-width: 768px) {
    ${typo.tabletbody4}
    padding: 16px 0;
  }
`;
const CopyRight = styled.div``;

export {
  MainDiv,
  LeftContent,
  Top,
  LinkedinIcon,
  FooterLogo,
  Description,
  RightContent,
  Columns,
  Heading,
  Options,
  CustomOption,
  CopyRight,
  CopyRightText,
};
