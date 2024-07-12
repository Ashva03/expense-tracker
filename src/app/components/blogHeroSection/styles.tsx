import { images } from '@/app/assets/images';
import { colors, typo } from '@/app/assets/style';
import styled from 'styled-components';

const Maindiv = styled.div`
  padding: 212px 0 120px;
  background-color: ${colors.bgColor};
  position: relative;
  @media (max-width: 768px) {
    padding: 128px 0 72px;
  }
  @media (max-width: 449px) {
    padding: 124px 0 60px;
  }
`;

const Blogtitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  max-width: 840px;
  width: 100%;
  align-items: center;
`;
const Topdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
`;

const Title = styled.div`
  color: ${colors.primary};
  ${typo.heading1};
  text-align: center;
  @media (max-width: 768px) {
    ${typo.tabletH1}
  }
  @media (max-width: 449px) {
    ${typo.mobileH1}
  }
`;

const Bottomdiv = styled.div`
  ${typo.body1};
  color: ${colors.darkGray};
  text-align: center;
  @media (max-width: 768px) {
    ${typo.mobilebody1}
  }
`;
const Profile = styled.div`
  display: flex;
  .profile-img {
    border: 2px solid ${colors.white};
    border-radius: 50%;
    width: 36px;
    height: 36px;
  }
  ul {
    list-style: none;
    display: flex;
  }
  li {
    display: flex;
    margin-right: -14px;
  }
  @media (max-width: 768px) {
    .profile-img {
      width: 32px;
      height: 32px;
    }
  }
`;

const Heading = styled.div`
  ${typo.body2};
  color: ${colors.primary};
  @media (max-width: 768px) {
    ${typo.mobilebody2}
    text-align: center;
  }
`;
const Bottomsection = styled.div`
  display: flex;
  gap: 8px;
  .input {
    width: 316px;
  }
  .subscribe-button {
    path {
      stroke: ${colors.white};
    }
  }
  @media (max-width: 449px) {
    flex-direction: column;
    gap: 16px;
    align-items: center;
    width: 100%;
    .input {
      padding: 9px 16px;
      width: 100%;
    }
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  position: relative;
  z-index: 1;
  @media (max-width: 449px) {
    gap: 24px;
  }
`;
const Background = styled.div`
  background-image: url(${images.newsletterHeroBg.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  @media (max-width: 449px) {
    background-image: url(${images.blogSectionMobileBg.src});
  }
`;

const Div = styled.div`
  @media (max-width: 449px) {
    width: 100%;
  }
`;
export { Maindiv, Blogtitle, Title, Bottomdiv, Topdiv, Profile, Heading, Bottomsection, Content, Background, Div };
