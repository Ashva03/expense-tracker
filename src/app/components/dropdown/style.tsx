import { colors, typo } from '@/app/assets/style';
import styled, { css } from 'styled-components';
interface Props {
  tabletWidth?: boolean;
}
const DropDiv = styled.div`
  :where(.css-dev-only-do-not-override-zg0ahe).ant-dropdown .ant-dropdown-menu .ant-dropdown-menu-title-content,
  :where(.css-dev-only-do-not-override-zg0ahe).ant-dropdown-menu-submenu
    .ant-dropdown-menu
    .ant-dropdown-menu-title-content {
    max-width: 220px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const ViewDropDown = styled.div<Props>`
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
    max-width: 220px;
    width: 100%;
    
    @media (max-width: 768px) {
      max-width: 176px;
    }
    @media (max-width: 449px) {
      max-width: -webkit-fill-available;
    }
    ${(props: Props) =>
      props.tabletWidth &&
      css`
        @media (max-width: 768px) {
          max-width: -webkit-fill-available;
        }
      `}
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
        max-width: 220px;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-radius: 0;
      }

      &:hover {
        background: ${colors.dropdownhover};
        border-radius: 0px;
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
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
  border-radius: 8px;
  padding: 4px 0px;
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGray};
  @media (max-width: 449px) {
    max-width: -webkit-fill-available;
  }
`;
const Check = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Status = styled.div<Props>`
  display: flex;
  width: 220px;
  padding: 11px 15px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid ${colors.lightGray};
  ${typo.body3};
  color: ${colors.darkGray};
  justify-content: space-between;
  align-items: center;
  p {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .selected-text {
    color: ${colors.primary};
  }
  .dropdown-icon {
    transform: rotate(180deg);
  }
  @media (max-width: 768px) {
    width: 166px;
    padding: 11px 15px;
  }

  @media (max-width: 449px) {
    padding: 9px 15px;
    width: 100%;
  }
  &.active {
    border-color: ${colors.primary};
    color: ${colors.primary};
  }
  ${(props: Props) =>
    props.tabletWidth &&
    css`
      @media (max-width: 768px) {
        width: 100%;
      }
    `}
`;
export { ViewDropDown, Menu, Status, DropDiv, Check };
