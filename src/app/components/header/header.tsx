'use client';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Buttondiv,
  Div,
  Item,
  ItemLogout,
  Line,
  Logo,
  Main,
  MobileIcon,
  Mobilelink,
  MobilelinkLogout,
  Mobilemenu,
  Mobileoption,
  Option,
  Options,
  Overlayblock,
  ProfileImage,
  Responsiveicon,
  Rightdiv,
  SVG,
  Status,
  ViewDropDown,
} from './styles';
import Link from 'next/link';
import Button from '../button/button';
import { images } from '../../assets/images';
import { Container } from '@/app/styles/commonStyle';
import SVGIcon from '@/app/assets/SVGIcon';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { HEADER_HIDE_PATHS } from '@/global/constants';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from '@/helper/common';
import { Dropdown, Menu } from 'antd';
import { RootReducerInterface } from '@/app/Interface/RootReducerInterface';
import Avatar from '../avatar/Avatar';
import { logoutUserDetails } from '@/services/appServices';

export default function Header() {
  const router = useRouter();
  const pathName = usePathname();
  const dispatch = useDispatch();
  let isScrollPage: boolean;
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
  const userSelector = useSelector((state: RootReducerInterface) => state.user);
  const { userDetails } = userSelector || {};

  const handleButtonClick = useCallback(() => {
    router.push('/login');
  }, [router]);

  const handleDropdownOpen = (flag: boolean) => {
    setOpenDropdown(flag);
  };

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prevState) => !prevState);
    setIsProfileMenuOpen(false);
  }, []);

  const handleScroll = useCallback(() => {
    setClientWindowHeight(window.scrollY);
  }, []);

  const onClickLogout = useCallback(async () => {
    const result = dispatch(logoutUserDetails());
    if (result) {
      setIsProfileMenuOpen(false);
      router.push('/login');
    }
  }, [dispatch, router]);

  const handleProfileClick = useCallback(() => {
    setIsProfileMenuOpen((prevState) => !prevState);
    setIsMenuOpen(false);
  }, []);

  const handleMenuOptionClick = useCallback(
    (value: string) => {
      setIsProfileMenuOpen(false);
      setIsMenuOpen(false);
      router.push(value);
    },
    [router],
  );
  //  for responsive -> on click outside the menu it closes
  const handleClose = useCallback(() => {
    setIsProfileMenuOpen(false);
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  if (clientWindowHeight > 0) {
    isScrollPage = true;
  } else {
    isScrollPage = false;
  }
  useEffect(() => {
    if (isMenuOpen || isProfileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen, isProfileMenuOpen]);

  if (pathName && HEADER_HIDE_PATHS.includes(pathName)) {
    return <></>;
  } else
    return (
      <div>
        <Div isScrollPage={isScrollPage}>
          <Container>
            <Main>
              <Logo href={'/'}>
                <img src={images.Logo.src} alt='logo' width={193} height={35} className='logo' />
              </Logo>
              <Rightdiv>
                <Options>
                  <Link href={'/dashboard'}>
                    <Option>Dashboard</Option>
                  </Link>
                  <Link href={'/entries'}>
                    <Option>Entries</Option>
                  </Link>
                  <Link href={'/split-entry'}>
                    <Option>Split Entries</Option>
                  </Link>
                  <Link href={'/expense-report'}>
                    <Option>Expense Report</Option>
                  </Link>
                  <Line />
                </Options>
                {isEmpty(userDetails?.id) ? (
                  <Buttondiv>
                    <Button title='Log In' onClick={handleButtonClick} />
                  </Buttondiv>
                ) : (
                  <Dropdown
                    trigger={['click']}
                    transitionName=''
                    placement='bottomRight'
                    onOpenChange={handleDropdownOpen}
                    destroyPopupOnHide={true}
                    getPopupContainer={(trigger: HTMLElement) => trigger.parentNode as HTMLElement}
                    dropdownRender={() => (
                      <ViewDropDown>
                        <Menu className='menuStyle'>
                          <Menu.Item>
                            <Item onClick={() => router.push('/mylibrary')}>My Library</Item>
                          </Menu.Item>
                          <Menu.Item>
                            <Item onClick={() => router.push('/setting')}>Settings</Item>
                          </Menu.Item>
                          <Menu.Item>
                            <Item onClick={() => router.push('/')}>Help</Item>
                          </Menu.Item>
                          <Menu.Item>
                            <ItemLogout onClick={onClickLogout}>Log Out</ItemLogout>
                          </Menu.Item>
                        </Menu>
                      </ViewDropDown>
                    )}>
                    <Status>
                      <ProfileImage>
                        <Avatar
                          imgSrc={userDetails?.profile_image || ''}
                          name={userDetails?.name || userDetails?.email || ''}
                          size={36}
                          className='avtar'
                          header={true}
                        />
                      </ProfileImage>
                      <p>{userDetails?.name || userDetails?.email || ''}</p>
                      <SVG>
                        <SVGIcon
                          name='dropdown-icon'
                          width='14'
                          height='14'
                          viewBox='0 0 18 18'
                          className={openDropdown ? 'dropdown-icon ' : ''}
                        />
                      </SVG>
                    </Status>
                  </Dropdown>
                )}
              </Rightdiv>
              <Responsiveicon>
                {isEmpty(userDetails?.id) ? (
                  <Button title='Log In' className='btn' onClick={handleButtonClick} />
                ) : (
                  <ProfileImage onClick={handleProfileClick}>
                    <Avatar
                      imgSrc={userDetails?.profile_image || ''}
                      name={userDetails?.name || userDetails?.email || ''}
                      size={44}
                      className='avtar'
                      header
                    />
                  </ProfileImage>
                )}
                {isMenuOpen ? (
                  <MobileIcon onClick={toggleMenu}>
                    <SVGIcon name='close-icon' width='24' height='24' viewBox='0 0 24 24' />
                  </MobileIcon>
                ) : (
                  <MobileIcon onClick={toggleMenu}>
                    <SVGIcon name='three-parallel-icon' width='24' height='24' viewBox='0 0 24 24' />
                  </MobileIcon>
                )}
              </Responsiveicon>
            </Main>
          </Container>
          {isMenuOpen && (
            <Overlayblock onClick={handleClose}>
              <Mobilemenu>
                <Mobileoption>
                  <div onClick={() => handleMenuOptionClick('/dashboard')}>
                    <Mobilelink>Dashboard</Mobilelink>
                  </div>
                  <div onClick={() => handleMenuOptionClick('/entries')}>
                    <Mobilelink>Entries</Mobilelink>
                  </div>
                  <div onClick={() => handleMenuOptionClick('/split-entry')}>
                    <Mobilelink>Split Entries</Mobilelink>
                  </div>
                  <div onClick={() => handleMenuOptionClick('/expense-report')}>
                    <Mobilelink>Expense Report</Mobilelink>
                  </div>
                </Mobileoption>
              </Mobilemenu>
            </Overlayblock>
          )}
          {isProfileMenuOpen && (
            <Overlayblock onClick={handleClose}>
              <Mobilemenu>
                <Mobileoption>
                  <div onClick={() => handleMenuOptionClick('/mylibrary')}>
                    <Mobilelink>My Library</Mobilelink>
                  </div>
                  <div onClick={() => handleMenuOptionClick('/setting')}>
                    <Mobilelink>Settings</Mobilelink>
                  </div>
                  <div onClick={() => handleMenuOptionClick('/')}>
                    <Mobilelink>Help</Mobilelink>
                  </div>
                  <div onClick={onClickLogout}>
                    <MobilelinkLogout>Log Out</MobilelinkLogout>
                  </div>
                </Mobileoption>
              </Mobilemenu>
            </Overlayblock>
          )}
        </Div>
      </div>
    );
}
