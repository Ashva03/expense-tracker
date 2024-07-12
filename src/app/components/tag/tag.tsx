'use client';
import React from 'react';
import { Maindiv, Title } from './style';
import SVGIcon from '@/app/assets/SVGIcon';

interface Props {
  title?: string;
  iconName?: string;
  
}

const Tag: React.FC<Props> = (Props) => {
  const { title , iconName} = Props;

  return (
    <Maindiv>
        <SVGIcon name={iconName} width='12' height='12' viewBox='0 0 12 12'/>
      
      <Title>{title}</Title>
    </Maindiv>
  );
};

export default Tag;