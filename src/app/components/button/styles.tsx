import { colors, typo } from '@/app/assets/style';
import styled, { css, keyframes } from 'styled-components';

interface WrapButton {
  secondary?: boolean;
  isLoading?: boolean;
  responsivebtn?: boolean;
  transparentbutton?: boolean;
  width?: boolean;
  tertiary?: boolean;
  isDeletebutton?: boolean;
}

interface Prop {
  isLoading?: boolean;
  secondaryButtonLoadingColor?: boolean;
  width?: boolean;
}

const Buttons = styled.button<WrapButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 11px 23px;
  outline: none;
  cursor: pointer;
  background-color: ${colors.primary};
  border-radius: 8px;
  color: ${colors.white};
  white-space: nowrap;
  border: 1px solid transparent;
  ${typo.btntext};
  box-shadow: -4px -4px 5px 0px rgba(11, 255, 114, 0.06);
  &:hover {
    background-color: ${colors.darkBlack};
  }
  ${(props) =>
    props.secondary &&
    css`
      background: ${colors.secondary};
      color: ${colors.primary};
      &:hover {
        background: ${colors.secondaryhover};
      }
    `}
  ${(props) =>
    props.transparentbutton &&
    css`
      border: 1px solid ${colors.lightGray};
      background: transparent;
      color: ${colors.primary};
      box-shadow: none;
      &:hover {
        background: ${colors.offWhite};
      }
    `}
  ${(props) =>
    props.tertiary &&
    css`
      border: none;
      background: transparent;
      color: ${colors.primary};
      box-shadow: none;
      padding: 12px 24px;
      &:hover {
        background: ${colors.offWhite};
      }
      @media (max-width: 449px) {
        padding: 10px 23px !important;
      }
    `}
  ${(props) =>
    props.disabled &&
    css`
      background-color: ${colors.offWhite};
      color: ${colors.midDarkGrey};
      &:hover {
        background-color: ${colors.offWhite};
      }
    `}
    ${(props) =>
    props.width &&
    css`
      width: 100%;
    `} 
      ${(props) =>
    props.isDeletebutton &&
    css`
      background: ${colors.danger};
      color: ${colors.white};
      &:hover {
        background: ${colors.danger};
      }
      @media (max-width: 449px) {
        padding: 9px 19px !important;
      }
    `}
    @media (max-width: 449px) {
    /* ${typo.resbtntxt} */
    padding: 9px 23px;
  }
`;

const ButtonWrap = styled.div<Prop>`
  position: relative;
  display: inline-block;
  ${(props) =>
    props.isLoading &&
    css`
      &::before {
        position: absolute;
        top: 50%;
        left: calc(50% - 2px);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        content: '';
        display: block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: ${props.secondaryButtonLoadingColor ? colors.primary : colors.white};
        z-index: 2;
        margin-top: 4px;
        -webkit-animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
        animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
        -webkit-animation-delay: 0.15s;
        animation-delay: 0.15s;
      }
      ${Buttons} {
        cursor: wait;
        color: transparent;
        &:hover {
          cursor: wait;
        }
        &::before {
          position: absolute;
          top: 50%;
          left: calc(50% - 2px);
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: ${props.secondaryButtonLoadingColor ? colors.primary : colors.white};
          z-index: 2;
          margin-top: 4px;
          -webkit-animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
          animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
          margin-left: -15px;
        }
        &::after {
          position: absolute;
          top: 50%;
          left: calc(50% - 2px);
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          content: '';
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: ${props.secondaryButtonLoadingColor ? colors.primary : colors.white};
          z-index: 2;
          margin-top: 4px;
          -webkit-animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
          animation: 0.45s cubic-bezier(0, 0, 0.15, 1) infinite alternate ${ball};
          margin-left: 15px;
          -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
        }
      }
    `}
  ${(props) =>
    props.width &&
    css`
      width: 100%;
    `}
`;

const ball = keyframes`
  from {
    -webkit-transform: translateY(0) scaleY(0.8);
    transform: translateY(0) scaleY(0.8);
  }
  to {
    -webkit-transform: translateY(-10px);
    transform: translateY(-10px);
  }
`;

export { Buttons, ButtonWrap, ball };
