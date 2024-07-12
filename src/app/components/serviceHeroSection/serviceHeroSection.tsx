'use client';
import React from 'react';
import Heroleft from '../heroLeft/heroleft';
import { Background, Content, Details, Heading, Main } from './style';
import { Container } from '@/app/styles/commonStyle';
import Tag from '../tag/tag';

export const ServiceHeroSection = () => {
  return (
    <>
      <Main>
        <Background />
        <Container>
          <Content>
            <Tag title={'Market Impact Services'} iconName='tag-threestar-icon' />
            <Heading>Unlock Superior Ad Performance with B2B Creative</Heading>
            <Details>
              Unlock the full potential of your brand with our expert ad creation services. At B2B Creative, we craft
              compelling and innovative ads that captivate your audience and drive results.{' '}
            </Details>
          </Content>
        </Container>
      </Main>
    </>
  );
};
