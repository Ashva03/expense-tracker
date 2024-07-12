import { images } from '@/app/assets/images';
import { colors, typo } from '@/app/assets/style';
import styled from 'styled-components';

const Maindiv = styled.div`
  padding: 213px 0 120px;
  background-color: ${colors.bgColor};
  position: relative;
  @media (max-width: 768px) {
    padding: 128px 0 72px;
  }
  @media (max-width: 449px) {
    padding: 124px 0 60px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  max-width: 840px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const First = styled.div`
  padding: 10px 12px;
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    ${typo.btntext};
    color: ${colors.primary};
    svg {
      transition: transform 0.3s;
    }
    &:hover svg {
      transform: translateX(-4px);
    }
  }
`;
const Seconddiv = styled.div`
  display: flex;
  gap: 22px;
  align-items: center;
  img {
    border-radius: 12px;
    border: 1px solid ${colors.lightGray};
  }
  @media (max-width: 768px) {
    .logo {
      width: 60px;
      height: 60px;
      border-radius: 10px;
    }
    gap: 16px;
  }
`;
const Right = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
  h4 {
    color: ${colors.primary};
    ${typo.heading4}
  }
  p {
    color: ${colors.darkGray};
    ${typo.body1}
  }
  @media (max-width: 768px) {
    h4 {
      ${typo.tabletH4}
    }
    p {
      ${typo.mobilebody1}
    }
  }
  @media (max-width: 449px) {
    h4 {
      ${typo.mobileH4}
    }
  }
`;
const Detail = styled.div`
  text-align: center;
  ${typo.body1};
  color: ${colors.darkGray};
  @media (max-width: 768px) {
    ${typo.mobilebody1}
  }
`;
const Box = styled.div`
  padding: 12px;
  border: 1px solid ${colors.lightGray};
  border-radius: 8px;
  background-color: ${colors.offWhite};
  gap: 12px;
  display: flex;
  @media (max-width: 768px) {
    padding: 6px;
    gap: 8px;
  }
`;
const Leftbox = styled.div`
  border: 0.5px solid ${colors.lightGray};
  border-radius: 8px;
  background-color: ${colors.white};
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const Rightbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  h4 {
    ${typo.body2}
    color: ${colors.primary};
  }
  p {
    ${typo.body3}
    color: ${colors.darkGray};
  }
  @media (max-width: 768px) {
    h4 {
      ${typo.mobilebody2}
    }
    p {
      ${typo.mobilebody3}
    }
  }
`;
const Cards = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 768px) {
    margin-top: 4px;
    gap: 10px;
  }
  @media (max-width: 449px) {
    flex-direction: column;
  }
`;
const Background = styled.div`
  background-image: url(${images.detailSectionBg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  @media (max-width: 768px) {
    background-image: url(${images.tabletdetailSectionBg.src});
    background-size: contain;
    background-position: bottom;
  }
  @media (max-width: 449px) {
    background-image: url(${images.mobiledetailSectionBg.src});
    background-position: center;
  }
`;
export { Maindiv, Content, First, Seconddiv, Right, Detail, Box, Leftbox, Rightbox, Cards, Background };
