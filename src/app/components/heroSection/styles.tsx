import { images } from '@/app/assets/images';
import { colors } from '@/app/assets/style';
import styled from 'styled-components';

const Content = styled.div`
  background-color: ${colors.bgColor};
  position: relative;
  overflow: hidden;
  padding-top: 93px;
  @media (max-width: 768px) {
    padding-top: 64px;
  }
`;
const Background = styled.div`
  background-image: url(${images.heroBackground.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${colors.lightGray};
  @media (max-width: 768px) {
    background-image: unset;
    border-bottom: none;
  }
`;
const HeroSectionContent = styled.div`
  display: flex;
  gap: 83px;
  justify-content: space-between;
  margin-right: -100px;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    background-image: url(${images.tabletBg.src});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    flex-direction: column;
    gap: 0;
    margin-right: 0;
  }
  @media (max-width: 449px) {
    background-image: url(${images.mobileBg.src});
  }
`;

export { Content, Background, HeroSectionContent };
