'use client';
import React from 'react';
import { Background, Bottomsection, Content, Div, Maindiv } from './styles';
import BlogHeroTitle from './blogHeroTitle';
import InputComponent from '../input/input';
import Button from '../button/button';
import { Container } from '@/app/styles/commonStyle';

export default function BlogHeroSection() {
  return (
    <>
      <Maindiv>
        <Background />
        <Container>
          <Content>
            <BlogHeroTitle />
            <Bottomsection>
              <Div>
                <InputComponent placeholder={'Enter your email address'} labelCta={true} className='input' />
              </Div>
              <Button
                title='Subscribe'
                iconName='right-icon'
                strokeColor='#FFf'
                iconSize='16'
                iconViewBox='0 0 16 16'
                rightIcon={true}
                className='subscribe-button'
              />
            </Bottomsection>
          </Content>
        </Container>
      </Maindiv>
    </>
  );
}
