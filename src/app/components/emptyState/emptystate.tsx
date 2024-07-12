'use client';
import React from 'react';
import { Bottom, Box, Top } from './styles';

interface Props {
  imgSrc?: string;
  title?: string;
}
export default function Emptystate(props: Props) {
  const { imgSrc, title } = props;
  return (
    <>
      <Box>
        <Top>
          <img src={imgSrc} alt='empty-img' width={220} height={220} className='img' />
        </Top>
        <Bottom>{title}</Bottom>
      </Box>
    </>
  );
}
