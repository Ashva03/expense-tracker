import { colors, typo } from '@/app/assets/style';
import styled, { css } from 'styled-components';
interface Props {
  width?: boolean;
  tabletWidth?: boolean;
  isBlogpage?: boolean;
}

const MainDiv = styled.div<Props>`
  position: relative;
  /* width: 100%; */
  max-width: 280px;

  ${(props: Props) =>
    props.tabletWidth &&
    css`
      @media (max-width: 768px) {
        max-width: -webkit-fill-available;
      }
    `}
  @media (max-width: 449px) {
    max-width: -webkit-fill-available;
    width: 100%;
  }
  ${(props: Props) =>
    props.isBlogpage &&
    css`
      @media (max-width: 749px) {
        max-width: -webkit-fill-available;
        width: 100%;
      }
    `}
`;
const SearchDiv = styled.input<Props>`
  display: flex;
  border: 1px solid ${colors.lightGray};
  border-radius: 8px;
  gap: 8px;
  padding: 11px 15px 11px 40px;
  width: 280px;
  ${typo.body3}
  color: ${colors.primary};
  background-color: transparent;
  letter-spacing: 0.02em;
  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    color: ${colors.darkGray};
  }
  &:focus {
    border: 1px solid ${colors.darkGray};
  }
  @media only screen and (max-width: 991px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 209px;
    padding: 11px 15px 11px 40px;
  }
  @media (max-width: 449px) {
    padding: 9px 16px 9px 40px;
    width: -webkit-fill-available;
  }
  ${(props: Props) =>
    props.width &&
    css`
      @media (max-width: 768px) {
        width: 280px;
      }
      @media (max-width: 449px) {
        width: -webkit-fill-available;
      }
    `}
  ${(props: Props) =>
    props.tabletWidth &&
    css`
      @media (max-width: 768px) {
        width: 100%;
      }
    `}
    ${(props: Props) =>
    props.isBlogpage &&
    css`
      @media (max-width: 749px) {
        width: 100%;
      }
    `}
`;
const SearchIcon = styled.div`
  position: absolute;
  top: 13px;
  left: 16px;
  width: 18px;
  height: 18px;
  @media (max-width: 768px) {
    top: 13px;
  }
  @media (max-width: 449px) {
    top: 11px;
  }
`;
export { SearchDiv, SearchIcon, MainDiv };
