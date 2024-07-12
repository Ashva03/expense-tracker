'use client';
import React from 'react';
import { Background, Content, HeroSectionContent } from './styles';
import Heroleft from '../heroLeft/heroleft';
import VerticalSlider from '../verticalSlider/verticalSlider';
import { Container } from '@/app/styles/commonStyle';
import { ImageDataInterface } from '@/app/Interface/homePageInterface';
import ResponsiveHorizontalSlider from '../responsiveHorizontalSlider/responsiveHorizontalSlider';

interface props {
  title: string;
  description: string;
  buttonText: string;
  tag: string;
  sliderlist1: ImageDataInterface[];
  sliderlist2: ImageDataInterface[];
  sliderlist3: ImageDataInterface[];
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
              slider1Data={props?.sliderlist1 || []}
              slider2Data={props?.sliderlist2 || []}
              slider3Data={props?.sliderlist3 || []}
            />
          </HeroSectionContent>
        </Container>
        <ResponsiveHorizontalSlider
          slider1Data={props?.sliderlist1 || []}
          slider2Data={props?.sliderlist2 || []}
          slider3Data={props?.sliderlist3 || []}
        />
      </Content>
    </>
  );
}
