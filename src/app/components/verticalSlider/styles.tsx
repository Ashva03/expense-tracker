import { colors } from '@/app/assets/style';
import styled, { css, keyframes } from 'styled-components';

interface Props {
  isLogin?: boolean;
  reverse?: boolean;
}

const slideUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
`;

const slideDown = keyframes`
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
`;

const Wrapper = styled.div<Props>`
  width: 180px;
  height: 654px; /* Adjust to fit the total height of images */
  /* overflow: hidden; */
  position: relative;
  ${(props) =>
    props.isLogin &&
    css`
      height: 100vh;
    `}
`;

const Imagediv = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 32px;
  animation: ${({ reverse }) => (reverse ? slideDown : slideUp)} 60s linear infinite;
  img {
    width: 180px;
    height: 180px;
    border-radius: 12px;
    border: 1px solid ${colors.lightGray};
  }
`;

const Animation = styled.div<Props>`
  display: flex;
  gap: 32px;
  justify-content: space-between;
  @media (max-width: 1024px) {
    ${(props) =>
      props.isLogin &&
      css`
        margin: 0 auto;
      `}
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export { Imagediv, Wrapper, Animation };
