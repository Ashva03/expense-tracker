'use client';
import { images } from '@/app/assets/images';
import Link from 'next/link';
import {
  Columns,
  CopyRight,
  CopyRightText,
  CustomOption,
  Description,
  FooterLogo,
  Heading,
  LeftContent,
  LinkedinIcon,
  MainDiv,
  Options,
  RightContent,
  Top,
} from './style';
import SVGIcon from '@/app/assets/SVGIcon';
import { Container } from '@/app/styles/commonStyle';

interface Props { }
const Footer: React.FC<Props> = (Props) => {
  return (
    <Container>
      <MainDiv>
        <LeftContent>
          <Top>
            <FooterLogo href={'/'}>
              <img src={images.Logo.src} alt='logo' width={240} height={44} className='logo' />
            </FooterLogo>
            <Description>
              Thank you for visiting Expense Tracker. Manage your finances better with our easy-to-use tracking tools. Stay informed and in control of your financial journey.
            </Description>
          </Top>
          <LinkedinIcon>
            <SVGIcon name='linkedin-icon' width='16' height='16' viewBox='0 0 16 16' className='svgicon'></SVGIcon>
          </LinkedinIcon>
        </LeftContent>
        <RightContent>
          <Columns>
            <Heading>Company</Heading>
            <Options>
              <Link href={'/dashboard'}>
                <CustomOption>Dashboard</CustomOption>
              </Link>
              <Link href={'/company'}>
                <CustomOption>Company</CustomOption>
              </Link>
              <Link href={'/entries'}>
                <CustomOption>Entries</CustomOption>
              </Link>
              <Link href={'/split-entry'}>
                <CustomOption>Split Entries</CustomOption>
              </Link>
              <Link href={'/expense-report'}>
                <CustomOption>Expense Report</CustomOption>
              </Link>
            </Options>
          </Columns>
          <Columns>
            <Heading>Support</Heading>
            <Options>
              <Link href={'/'}>
                <CustomOption>Terms & Conditions</CustomOption>
              </Link>
              <Link href={'/'}>
                <CustomOption>Privacy Policy</CustomOption>
              </Link>
              <Link href={'/'}>
                <CustomOption>Cookie Policy</CustomOption>
              </Link>
            </Options>
          </Columns>
        </RightContent>
      </MainDiv>
      <CopyRight>
        <CopyRightText>© 2024, expense tracker</CopyRightText>
      </CopyRight>
    </Container>
  );
};
export default Footer;
