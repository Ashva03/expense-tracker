'use client';
import { ConfigProvider, Dropdown, Menu } from 'antd';
import React, { useCallback, useState } from 'react';
import { Check, DropDiv, Status, ViewDropDown } from './style';
import SVGIcon from '@/app/assets/SVGIcon';
import { useDispatch, useSelector } from 'react-redux';
import { setIndustryField } from '@/actions/brandActions';
import { RootReducerInterface } from '@/app/Interface/RootReducerInterface';
import { IndustryDataInterface } from '@/app/Interface/brandInterface';
// interface Props{
//   tabletWidth?:boolean;
// }
export default function Dropdowns({
  menuItems,
  tableWidth,
}: {
  menuItems: IndustryDataInterface[];
  tableWidth?: boolean;
}) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dispatch = useDispatch();
  const brandSelector = useSelector((state: RootReducerInterface) => state.brand);
  const { industry } = brandSelector;
  const handleDropdownOpen = (flag: boolean) => {
    setOpenDropdown(flag);
  };

  const handleSelect = useCallback(
    async (value: string) => {
      await dispatch(setIndustryField(value));
    },
    [dispatch],
  );

  return (
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
            <ViewDropDown tabletWidth={tableWidth}>
              <Menu className='menuStyle'>
                <Menu.Item className='menuitem' onClick={() => handleSelect('All')}>
                  <Check>
                    All
                    {industry === 'All' && <SVGIcon name='correct-icon' width='18' height='18' viewBox='0 0 18 18' />}
                  </Check>
                </Menu.Item>
                {menuItems?.map((item: IndustryDataInterface, index: number) => {
                  return (
                    <>
                      <Menu.Item key={index} className='menuitem' onClick={() => handleSelect(item.title)}>
                        <Check>
                          {item.title}
                          {industry === item.title && (
                            <SVGIcon name='correct-icon' width='18' height='18' viewBox='0 0 18 18' />
                          )}
                        </Check>
                      </Menu.Item>
                    </>
                  );
                })}
              </Menu>
            </ViewDropDown>
          )}>
          <Status className={openDropdown ? 'active' : ''} tabletWidth={tableWidth}>
            <p className={industry ? 'selected-text' : ''}>{industry ? industry : 'Industry'}</p>
            <SVGIcon
              name='dropdown-icon'
              width='18'
              height='18'
              viewBox='0 0 18 18'
              className={openDropdown ? 'dropdown-icon ' : ''}
            />
          </Status>
        </Dropdown>
      </ConfigProvider>
    </DropDiv>
  );
}
