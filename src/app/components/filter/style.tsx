import { colors, typo } from '@/app/assets/style';
import styled, { css } from 'styled-components';
interface Props {
  width?: boolean;
  tabletWidth?: boolean;
}
const DropDiv = styled.div`
  position: relative;
`;
const ViewDropDown = styled.div`
  .ant-checkbox + span {
    ${typo.body3};
  }
  .menuStyle {
    display: flex;
    flex-direction: column;
    padding: 4px 0px;
    border: 1px solid ${colors.lightGray};
    border-radius: 8px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.04);
    background-color: ${colors.white};
    overflow: auto;
    max-height: 352px;
    width: 100%;
    .ant-dropdown-menu-title-content {
      display: flex;
      gap: 8px;
      align-items: center;
    }
    .menuitem {
      ${typo.body2}
      color: ${colors.primary};
      padding: 8px 16px;
      .ant-dropdown
        .ant-dropdown-menu
        .ant-dropdown-menu-title-content
        .ant-dropdown-menu-submenu
        .ant-dropdown-menu
        .ant-dropdown-menu-title-content {
        max-width: 192px;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &:hover {
        background: ${colors.dropdownhover};
        border-radius: 0;
      }
    }
  }
  ::-webkit-scrollbar {
    height: 6px;
    background-color: ${colors.white};
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: ${colors.lightGray};
  }
  @media (max-width: 449px) {
    .menuStyle {
      max-width: -webkit-fill-available;
    }
  }
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 192px;
  width: 100%;
  border-radius: 8px;
  padding: 4px 0px;
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGray};
`;
const Status = styled.div<Props>`
  display: flex;
  gap: 8px;
  width: 192px;
  padding: 11px 15px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${colors.lightGray};
  ${typo.body3};
  color: ${colors.darkGray};
  align-items: center;
  .selected-text {
    color: ${colors.primary};
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    ${(props) =>
      props.width &&
      css`
        width: 220px;
      `}
  }
  @media (max-width: 449px) {
    padding: 9px 15px;
    width: 100%;
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  &.active {
    border-color: ${colors.primary};
    color: ${colors.primary};
    svg {
      path {
        stroke: ${colors.primary};
      }
    }
  }
  ${(props: Props) =>
    props.tabletWidth &&
    css`
      @media (max-width: 768px) {
        width: 100%;
      }
    `}
`;
export { ViewDropDown, Menu, Status, DropDiv };
