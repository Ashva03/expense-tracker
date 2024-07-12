import { colors, randomColorsArray, typo } from '@/app/assets/style';
import styled, { css } from 'styled-components';

interface Props {
  header?: boolean;
  size?: number;
}

const UserLogoWrapper = styled.div<Props>`
  display: flex;
  justify-content: center;
  img {
    border-radius: 20px;
    width: 100px;
    height: 100px;
    ${(props) =>
      props.header &&
      css`
        border-radius: 8px;
        width: 36px;
        height: 36px;
      `}
  }
  @media (max-width: 768px) {
    img {
      border-radius: 24px;
      ${(props) =>
        props.header &&
        css`
          border-radius: 8px;
        `}
    }
  }
  @media (max-width: 449px) {
    img {
      border-radius: 12px;
      width: 80px;
      height: 80px;
      ${(props) =>
        props.header &&
        css`
          border-radius: 8px;
          width: 32px;
          height: 32px;
        `}
    }
  }
`;

const TextWrapper = styled.div<Props>`
  align-items: center;
  justify-content: center;
  color: white;
  display: flex;
  background-color: ${randomColorsArray};
  border-radius: 20px;
  ${(props) =>
    props.size &&
    css`
      width: ${props.size}px;
      height: ${props.size}px;
      @media only screen and (max-width: 768px) {
        border-radius: 24px;
      }
      @media only screen and (max-width: 449px) {
        width: 80px;
        height: 80px;
        border-radius: 12px;
      }
      span {
        ${typo.heading2}
        color:${colors.primary};
        @media only screen and (max-width: 449px) {
          ${typo.mobileH1}
        }
      }
    `}
  ${(props) =>
    props.header &&
    css`
      border-radius: 8px;
      @media only screen and (max-width: 768px) {
        border-radius: 8px;
      }
      span {
        ${typo.tabletH5}
        @media only screen and (max-width:449px) {
          ${typo.mobileH5}
        }
      }
    `}
`;

const Image = styled.img``;

export { UserLogoWrapper, TextWrapper, Image };
