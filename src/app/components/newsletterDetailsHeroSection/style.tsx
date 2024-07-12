import { colors, typo } from '@/app/assets/style';
import Link from 'next/link';
import styled from 'styled-components';

const Maindiv = styled.div`
  background-color: ${colors.offWhite};
  position: relative;
`;

const Title = styled.div`
  ${typo.heading2};
  color: ${colors.primary};
  @media (max-width: 768px) {
    ${typo.tabletH2}
  }
  @media (max-width: 449px) {
    ${typo.tabletH4}
  }
`;

const SubTitle = styled.div`
  ${typo.body1};
  color: ${colors.darkGray};
  padding-top: 12px;
  @media (max-width: 768px) {
    padding-top: 10px;
    ${typo.mobilebody1}
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  z-index: 1;
  max-width: 920px;
  border-bottom: 1px solid ${colors.lightGray};
  margin: 0 auto;
  padding: 165px 0 60px;
  @media (max-width: 768px) {
    padding: 128px 0 40px;
    gap: 22px;
  }
  @media (max-width: 449px) {
    padding: 104px 0 32px;
  }
`;

const TopDiv = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  svg {
    transition: transform 0.3s;
  }
  &:hover svg {
    transform: translateX(-4px);
  }
`;

const BackTitle = styled.div`
  ${typo.label};
  color: ${colors.primary};
  @media (max-width: 449px) {
    ${typo.mobilebody2}
  }
`;

const ProfileMainDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 768px) {
    gap: 10px;
  }
  @media (max-width: 449px) {
    gap: 8px;
  }
`;

const Name = styled.div`
  ${typo.body1};
  color: ${colors.primary};
  @media (max-width: 768px) {
    ${typo.mobilebody1}
  }
`;

const Date = styled.div`
  ${typo.body3};
  color: ${colors.darkGray};
  padding-top: 4px;
  @media (max-width: 768px) {
    ${typo.body4}
  }
`;

const RightDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 768px) {
    gap: 12px;
  }
  @media (max-width: 449px) {
    gap: 10px;
  }
`;

const LinkDiv = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 2px 2px 24px 0px rgba(0, 0, 0, 0.06);
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  .svgicon {
    width: 12px;
    height: 12px;
  }
  &:hover {
    .svgicon {
      path {
        fill: ${colors.primary};
      }
    }
  }
`;

export {
  Maindiv,
  Title,
  Content,
  SubTitle,
  TopDiv,
  BackTitle,
  ProfileMainDiv,
  ProfileDiv,
  Name,
  Date,
  RightDiv,
  LinkDiv,
};
