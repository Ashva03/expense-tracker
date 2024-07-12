import { colors, typo } from '@/app/assets/style';
import styled from 'styled-components';

const MainWrapper = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  @media (max-width: 768px) {
    padding: 0;
    gap: 40px;
  }
  @media (max-width: 449px) {
    gap: 32px;
  }
`;

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  @media only screen and (max-width: 768px) {
    gap: 16px;
  }
`;

const Heading = styled.h2`
  max-width: 836px;
  text-align: center;
  ${typo.heading2}
  color:${colors.primary};
  @media only screen and (max-width: 768px) {
    ${typo.tabletH2}
  }
  @media only screen and (max-width: 449px) {
    ${typo.mobileH2}
  }
`;

const Details = styled.p`
  max-width: 836px;
  text-align: center;
  ${typo.body1}
  color:${colors.darkGray};
  @media only screen and (max-width: 768px) {
    ${typo.body2}
  }
`;

const CenterConsole = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media only screen and (max-width: 449px) {
    grid-template-columns: 1fr;
  }
`;

const Services = styled.div`
  max-width: 648px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 60px;

  &:nth-child(1) {
    border-right: 1px solid ${colors.lightGray};
    border-bottom: 1px solid ${colors.lightGray};
  }
  &:nth-child(2) {
    border-bottom: 1px solid ${colors.lightGray};
  }

  &:nth-child(3) {
    border-right: 1px solid ${colors.lightGray};
  }

  @media only screen and (max-width: 768px) {
    padding: 24px;
    gap: 24px;
  }
  @media only screen and (max-width: 449px) {
    padding: 24px 0;
    &:nth-child(1) {
      padding: 0 0 24px 0;
      border-right: none;
      border-bottom: 1px solid ${colors.lightGray};
    }
    &:nth-child(2) {
      border-right: none;
      border-bottom: 1px solid ${colors.lightGray};
    }
    &:nth-child(3) {
      border-right: none;
      border-bottom: 1px solid ${colors.lightGray};
    }

    &:last-child {
      border-right: none;
      border-bottom: none;
    }
  }
`;

const Svg = styled.div`
  width: 66px;
  height: 66px;
  border-radius: 12px;
  border: 1px solid ${colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(136.9deg, rgba(249, 249, 249, 0) 5.83%, rgba(110, 110, 110, 0.17) 93.85%);
  @media only screen and (max-width: 768px) {
    width: 52px;
    height: 52px;
    border-radius: 8px;
    border: 1px solid ${colors.lightGray};
    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

const Content = styled.div`
  max-width: 528px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h4`
  ${typo.heading4}
  color:${colors.primary};
  @media only screen and (max-width: 768px) {
    ${typo.tabletH4}
  }
  @media only screen and (max-width: 449px) {
    ${typo.mobileH4}
  }
`;

const Description = styled.p`
  ${typo.body1}
  color:${colors.darkGray};
  @media only screen and (max-width: 768px) {
    ${typo.body2}
  }
`;

export { CenterConsole, Details, Services, Svg, TopContent, MainWrapper, Heading, Content, Title, Description };
