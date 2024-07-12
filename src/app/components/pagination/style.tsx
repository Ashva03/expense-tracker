import { colors, typo } from '@/app/assets/style';
import styled, { css } from 'styled-components';
interface Props {
  disabled: boolean;
}
const PaginationDiv = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    text-align: center;
  }
  li {
    cursor: pointer;
    align-items: center;
    display: flex;
    width: 35px;
    height: 35px;
    padding: 7px 4px;
    border-radius: 4px;
    list-style-type: none;
    /* margin-left: 5px; */
    background-color: ${colors.white};
    justify-content: center;
    border: 1px solid ${colors.lightGray};
    color: ${colors.darkGray};
    ${typo.body3}
    &.three-dot {
      cursor: default;
      border: none;
      color: ${colors.primary};
      ${typo.body2}
    }
    &:hover {
      color: ${colors.darkBlack};
    }
  }
  @media only screen and (max-width: 768px) {
    li {
      width: 32px;
      height: 32px;
      ${typo.mobilebody3}
    }
  }
  @media only screen and (max-width: 320px) {
    gap: 6px;
  }
`;
const Control = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 4px;
  border-radius: 8px;
  ${typo.body2}
  color: ${colors.primary};
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border 0.3s ease;
  user-select: none;
  ${(props) =>
    props.disabled &&
    css`
      pointer-events: none;
      opacity: 1;
      cursor: default;
    `}
  &.text-color {
    color: ${colors.midDarkGrey};
  }
  @media (max-width: 768px) {
    ${typo.mobilebody2}
    padding: 6px 4px;
  }
`;
const PageDiv = styled.div`
  display: flex;
  user-select: none;
  gap: 12px;
  li {
    &.active {
      background-color: ${colors.primary};
      border: none;
      color: ${colors.white};
    }
  }
  @media only screen and (max-width: 320px) {
    gap: 6px;
  }
`;

export { PaginationDiv, Control, PageDiv };
