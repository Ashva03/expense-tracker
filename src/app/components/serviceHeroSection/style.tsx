import { images } from '@/app/assets/images';
import { colors, typo } from '@/app/assets/style';
import styled from 'styled-components';

const Main = styled.div`
  position: relative;
  width: 100%;
  padding: 213px 0 120px;
  margin: 0 auto;
  background-color: ${colors.bgColor};
`;

const Background = styled.div`
  background-image: url(${images.heroBackground.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  @media only screen and (max-width: 768px) {
    padding: 128px 0 72px;
    background-image: url(${images.tabletBg.src});
    background-size: cover;
    background-position: top;
  }
  @media (max-width: 449px) {
    background-image: url(${images.blogSectionMobileBg.src});
    background-size: cover;
  }
  z-index: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 22px;
`;

const Heading = styled.h1`
  max-width: 840px;
  text-align: center;
  ${typo.heading1};
  color: ${colors.primary};
  @media (max-width: 991px) {
    max-width: 680px;
    ${typo.tabletH1};
    text-align: center;
  }
  @media (max-width: 449px) {
    ${typo.heading3};
  }
`;

const Details = styled.p`
  max-width: 620px;
  text-align: center;
  margin: 0;
  ${typo.body1};
  color: ${colors.darkGray};
  @media (max-width: 991px) {
    max-width: 680px;
    ${typo.body2};
    text-align: center;
  }
`;

export { Background, Content, Details, Heading, Main };
