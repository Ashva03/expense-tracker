'use client';
import React from 'react';
import { Box, Leftbox, Rightbox } from './styles';
import SVGIcon from '@/app/assets/SVGIcon';

interface Props {
  iconName: string;
  heading: string;
  title: string;
}
export default function Card(props: Props) {
  const { iconName, heading, title } = props;
  return (
    <>
      <Box>
        <Leftbox>
          <SVGIcon name={iconName} width='24' height='24' viewBox='0 0 24 24' />
        </Leftbox>
        <Rightbox>
          <h4>{heading}</h4>
          <p>{title}</p>
        </Rightbox>
      </Box>
    </>
  );
}
