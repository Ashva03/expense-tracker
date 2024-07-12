'use client';
import React from 'react';
import { Card, Details, Leftdiv, Rightdiv, Title } from './styles';

interface Props {
  isFlex?: boolean;
  title: string;
  detail: string;
  imgSrc: string;
}
export default function AdCreationServiceCard(props: Props) {
  const { isFlex, title, detail, imgSrc } = props;
  return (
    <>
      <Card isFlex={isFlex}>
        <Leftdiv isFlex={isFlex}>
          <Title>{title}</Title>
          <Details>{detail}</Details>
        </Leftdiv>
        <Rightdiv isFlex={isFlex}>
          <img src={imgSrc} alt='service-img' className='service-img' />
        </Rightdiv>
      </Card>
    </>
  );
}
