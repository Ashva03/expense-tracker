'use client';
import React, { useCallback } from 'react';
import { Content, Details, Heading, Maindiv, Topcontent } from './styles';
import Tag from '../tag/tag';
import Button from '../button/button';
import { Buttondiv } from '../header/styles';
import { isEmpty } from '@/helper/common';

interface props {
  title: string;
  description: string;
  buttonText: string;
  tag: string;
}
export default function Heroleft(props: props) {
  const handleScroll = useCallback(() => {
    const targetElement = document.getElementById('WeeklyAds');
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 90;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <>
      <Maindiv>
        <Topcontent>
          {!isEmpty(props?.tag) && <Tag title={props?.tag} iconName='tag-threestar-icon' />}
          <Content>
            <Heading>{props.title}</Heading>
            {!isEmpty(props?.description) && <Details>{props?.description}</Details>}
          </Content>
        </Topcontent>
        <Buttondiv>
          {!isEmpty(props?.buttonText) && (
            <Button
              title={props?.buttonText}
              iconName='down-arrow-icon'
              strokeColor='#FFf'
              iconSize='16'
              iconViewBox='0 0 16 16'
              rightIcon={true}
              className='btn'
              onClick={handleScroll}
            />
          )}
        </Buttondiv>
      </Maindiv>
    </>
  );
}
