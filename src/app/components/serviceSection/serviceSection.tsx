'use client';
import React, { useMemo } from 'react';
import {
  CenterConsole,
  Content,
  Description,
  Details,
  Heading,
  MainWrapper,
  Services,
  Svg,
  Title,
  TopContent,
} from './style';
import { Container } from '@/app/styles/commonStyle';
import Button from '../button/button';
import SVGIcon from '@/app/assets/SVGIcon';
import { ServiceLlist } from './dataset';

export const ServiceSection = () => {
  const renderData = useMemo(() => {
    return ServiceLlist.map((item, index) => {
      return (
        <Services key={index}>
          <Svg>
            <SVGIcon name={item.iconName} width='38' height='38' viewBox='0 0 38 38' />
          </Svg>
          <Content>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
          </Content>
        </Services>
      );
    });
  }, []);
  return (
    <>
      <Container>
        <MainWrapper>
          <TopContent>
            <Heading>Professional Cleaning Solutions for Every Space</Heading>
            <Details>
              Experience top-tier residential and commercial cleaning solutions tailored to your needs, ensuring a
              spotless and inviting environment every time.
            </Details>
          </TopContent>
          <CenterConsole>{renderData}</CenterConsole>
          <Button
            secondary
            title='Book Your Meeting'
            iconName='right-icon'
            rightIcon
            iconSize='16'
            iconViewBox='16'
            secondaryButtonLoadingColor={true}
          />
        </MainWrapper>
      </Container>
    </>
  );
};
