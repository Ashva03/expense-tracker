'use client';
import { ConfigProvider, Dropdown, Menu } from 'antd';
import React, { useCallback, useState } from 'react';
import { DropDiv, Status, ViewDropDown } from './style';
import SVGIcon from '../../assets/SVGIcon';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerInterface } from '@/app/Interface/RootReducerInterface';
import { setSortingType } from '@/actions/brandActions';
interface Props {
  width?: boolean;
  tabletWidth?: boolean;
}
const Filter: React.FC<Props> = (Props) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { width, tabletWidth } = Props;
  const dispatch = useDispatch();
  const brandSelector = useSelector((state: RootReducerInterface) => state.brand);
  const { sortType } = brandSelector;

  const handleDropdownOpen = (flag: boolean) => {
    setOpenDropdown(flag);
  };

  const handleSelect = useCallback(
    async (value: string) => {
      await dispatch(setSortingType(value));
    },
    [dispatch],
  );

  const menuItems = ['Recently Updated', 'Newest', 'Oldest'];
  return (
    <div>
      <DropDiv>
        <ConfigProvider
          theme={{
            components: {
              Dropdown: {
                zIndexPopup: 1,
              },
            },
          }}>
          <Dropdown
            trigger={['click']}
            transitionName=''
            placement='bottomLeft'
            onOpenChange={handleDropdownOpen}
            destroyPopupOnHide={true}
            getPopupContainer={(trigger: HTMLElement) => trigger.parentNode as HTMLElement}
            dropdownRender={() => (
              <ViewDropDown>
                <Menu className='menuStyle'>
                  {menuItems.map((item, index) => (
                    <Menu.Item key={index} className='menuitem' onClick={() => handleSelect(item)}>
                      {item}
                    </Menu.Item>
                  ))}
                </Menu>
              </ViewDropDown>
            )}>
            <Status className={openDropdown ? 'active' : ''} width={width} tabletWidth={tabletWidth}>
              <div className='icon'>
                <SVGIcon
                  name='filter-icon'
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  className={openDropdown ? 'dropdown-icon ' : ''}
                />
              </div>
              <p className={sortType ? 'selected-text' : ''}>{sortType ? sortType : 'Sort By'}</p>
            </Status>
          </Dropdown>
        </ConfigProvider>
      </DropDiv>
    </div>
  );
};
export default Filter;
