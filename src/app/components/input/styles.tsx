import { colors, typo } from '@/app/assets/style';
import styled, { css } from 'styled-components';
interface Props {
  labelCta?: boolean;
  width?: any;
  hasError?: boolean;
  login?: boolean;
  onChange?: Function;
  disabled?: boolean;
}
const InputDiv = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Labels = styled.div<Props>`
  a {
    max-width: 230px;
    width: 100%;
    text-align: end;
    ${typo.body4}
    color: ${colors.darkGray};
    text-decoration: underline;
    cursor: pointer;
    &:hover {
      color: ${colors.primary};
    }
  }
  ${(props) =>
    props.labelCta &&
    css`
      display: none;
    `}
  ${(props) =>
    props.login &&
    css`
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      gap: 8px;
    `}
`;
const Label = styled.div<Props>`
  ${typo.label}
  color: ${colors.primary};
  ${(props) =>
    props.login &&
    css`
      max-width: 230px;
      width: 100%;
    `}
  ${(props) =>
    props.disabled &&
    css`
      color: ${colors.midDarkGrey};
    `}
`;

const InputSection = styled.div`
  position: relative;
`;

const SvgImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translate(-10%, -50%);
  cursor: pointer;
  svg {
    path {
      fill: none;
    }
  }
`;

const Input = styled.input<Props>`
  width: 100%;
  border-radius: 8px;
  padding: 10px 14px;
  border: 1px solid ${colors.lightGray};
  background: ${colors.offWhite};
  color: ${colors.primary};
  letter-spacing: 0.02em;
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
  ${typo.body2}
 
  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    color: ${colors.midDarkGrey};
  }
  &:focus {
    border: 1px solid ${colors.darkGray};
  }
  ${(props) =>
    props.hasError &&
    css`
      &:focus {
        border: 1px solid ${colors.danger};
      }
      border: 1px solid ${colors.danger};
      background-color: rgba(199, 10, 10, 0.06);
      &::placeholder {
        color: ${colors.primary};
      }
    `}
  ${(props) =>
    props.disabled &&
    css`
      color: ${colors.midDarkGrey};
    `}
  @media (max-width: 449px) {
    ${typo.mobilebody2};
    padding: 9px 15px;
  }
`;
const Errormessage = styled.div`
  p {
    margin: 0;
    color: ${colors.danger};
    ${typo.smalltxt};
  }
`;
const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
export { InputDiv, Labels, Label, Input, Errormessage, Maindiv, InputSection, SvgImage };
