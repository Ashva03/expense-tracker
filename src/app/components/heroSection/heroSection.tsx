'use client';
import React from 'react';
import { Background, Content, HeroSectionContent } from './styles';
import Heroleft from '../heroLeft/heroleft';
import VerticalSlider from '../verticalSlider/verticalSlider';
import { Container } from '@/app/styles/commonStyle';
import ResponsiveHorizontalSlider from '../responsiveHorizontalSlider/responsiveHorizontalSlider';
import { LOGIN_ANIMATION_IMAGES, LOGIN_ANIMATION_IMAGES2, LOGIN_ANIMATION_IMAGES3 } from '@/global/constants';

interface props {
  title: string;
  description: string;
  buttonText: string;
  tag: string;
}
export default function HeroSection(props: props) {
  return (
    <>
      <Content>
        <Background />
        <Container>
          <HeroSectionContent>
            <Heroleft
              title={props.title}
              description={props?.description}
              tag={props?.tag}
              buttonText={props?.buttonText}
            />
            <VerticalSlider
              slider1Data={LOGIN_ANIMATION_IMAGES || []}
              slider2Data={LOGIN_ANIMATION_IMAGES2 || []}
              slider3Data={LOGIN_ANIMATION_IMAGES3 || []}
            />
          </HeroSectionContent>
        </Container>
        <ResponsiveHorizontalSlider
          slider1Data={LOGIN_ANIMATION_IMAGES || []}
          slider2Data={LOGIN_ANIMATION_IMAGES2 || []}
          slider3Data={LOGIN_ANIMATION_IMAGES3 || []}
        />
      </Content>
    </>
  );
}
