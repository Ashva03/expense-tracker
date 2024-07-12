'use client';

import React from 'react';
import {
  Content,
  Title,
  Maindiv,
  SubTitle,
  TopDiv,
  BackTitle,
  ProfileMainDiv,
  ProfileDiv,
  Name,
  Date,
  RightDiv,
  LinkDiv,
} from './style';
import { Container } from '@/app/styles/commonStyle';
import { images } from '@/app/assets/images';
import SVGIcon from '@/app/assets/SVGIcon';

const NewsletterDetailHeroSection: React.FC = () => {
  return (
    <Maindiv>
      <Container>
        <Content>
          <TopDiv href={'/newsletter'}>
            <SVGIcon name='back-arrow-icon' width='16' height='16' viewBox='0 0 16 16' fill='none'></SVGIcon>
            <BackTitle>Back To News Post</BackTitle>
          </TopDiv>
          <div>
            <Title>Dui tristique amet a eget est et nunc luctus. </Title>
            <SubTitle>
              Sapien in velit turpis vestibulum vehicula nec neque. Neque et molestie libero scelerisque pellentesque.
              Cursus sit aenean id quam. Ac tellus id amet tincidunt mi scelerisque pretium eu.
            </SubTitle>
          </div>
          <ProfileMainDiv>
            <ProfileDiv>
              <img src={images.profile.src} width={52} height={52} alt='profile' />
              <div>
                <Name>Jenny Wilson</Name>
                <Date>May 8, 2024</Date>
              </div>
            </ProfileDiv>
            <RightDiv>
              <LinkDiv>
                <SVGIcon name='twitter-icon' width='12' height='12' viewBox='0 0 12 12' className='svgicon'></SVGIcon>
              </LinkDiv>
              <LinkDiv>
                <SVGIcon name='instagram-icon' width='12' height='12' viewBox='0 0 12 12' className='svgicon'></SVGIcon>
              </LinkDiv>
              <LinkDiv>
                <SVGIcon name='facebook-icon' width='12' height='12' viewBox='0 0 12 12' className='svgicon'></SVGIcon>
              </LinkDiv>
              <LinkDiv>
                <SVGIcon name='linkedin-icon' width='16' height='16' viewBox='0 0 16 16' className='svgicon'></SVGIcon>
              </LinkDiv>
            </RightDiv>
          </ProfileMainDiv>
        </Content>
      </Container>
    </Maindiv>
  );
};

export default NewsletterDetailHeroSection;
