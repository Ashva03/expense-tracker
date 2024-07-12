import { colors, typo } from '@/app/assets/style';
import styled, { css } from 'styled-components';
interface Props {
  isLibrary?: boolean;
}
const DiscoverDiv = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 768px) {
    gap: 20px;
  }
  @media (max-width: 449px) {
    gap: 16px;
  }
`;
const Top = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 449px) {
    .button {
      padding: 9px 12px;
    }
  }
`;
const Tab = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    gap: 16px;
  }
  @media (max-width: 768px) {
    align-items: center;
    flex-direction: column-reverse;
    gap: 16px;
  }
  @media (max-width: 449px) {
    gap: 8px;
  }
  ${(props: Props) =>
    props.isLibrary &&
    css`
      @media (max-width: 449px) {
        gap: 12px;
      }
    `}
`;
const Title = styled.div`
  ${typo.heading2}
  color: ${colors.primary};
  @media (max-width: 768px) {
    ${typo.tabletH2}
  }
  @media (max-width: 449px) {
    ${typo.mobileH2}
  }
`;
const LeftFrame = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 768px) {
    gap: 16px;
    width: 100%;
  }
  @media (max-width: 449px) {
    gap: 12px;
  }
`;
const RightFrame = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const Line = styled.div<Props>`
  display: flex;
  border-left: 1px solid #e3e3e3;
  height: 32px;
  @media (max-width: 768px) {
    display: none;
  }
  ${(props: Props) =>
    props.isLibrary &&
    css`
      display: none;
    `}
`;
const Buttondiv = styled.div<Props>`
  &.saved-fill-icon {
    svg {
      path {
        stroke: ${colors.primary};
        fill: ${colors.primary};
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
  ${(props: Props) =>
    props.isLibrary &&
    css`
      display: none;
    `}
`;
const Dropdowndiv = styled.div`
  @media (max-width: 768px) {
    width: 50%;
  }
`;
const Filterdiv = styled.div`
  @media (max-width: 768px) {
    width: 50%;
  }
`;
const ResponsiveButtondiv = styled.div<Props>`
  display: none;
  &.saved-fill-icon {
    svg {
      path {
        stroke: ${colors.primary};
        fill: ${colors.primary};
      }
    }
  }
  @media (max-width: 768px) {
    display: block;
  }
  ${(props: Props) =>
    props.isLibrary &&
    css`
      @media (max-width: 768px) {
        display: none;
      }
    `}
`;
const Div = styled.div`
  width: 100%;
`;
export {
  DiscoverDiv,
  Top,
  Tab,
  Title,
  LeftFrame,
  RightFrame,
  Line,
  Buttondiv,
  Dropdowndiv,
  Filterdiv,
  ResponsiveButtondiv,
  Div,
};
