'use client';

import { Animation, Imagediv, Wrapper } from './styles';
import { useEffect, useMemo, useState } from 'react';

interface imageData {
  slider1Data: string[];
  slider2Data: string[];
  slider3Data: string[];
  isLogin?: boolean;
}

export default function VerticalSlider({ slider1Data, slider2Data, slider3Data, isLogin }: imageData) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const verticalSlider1Images = useMemo(() => {
    return slider1Data?.map((item: string, index: number) => (
      <div key={index} className='image-item'>
        <img src={item} alt='' />
      </div>
    ));
  }, [slider1Data]);

  const verticalSlider2Images = useMemo(() => {
    return slider2Data?.map((item: string, index: number) => (
      <div key={index} className='image-item'>
        <img src={item} alt='' />
      </div>
    ));
  }, [slider2Data]);

  const verticalSlider3Images = useMemo(() => {
    return slider3Data?.map((item: string, index: number) => (
      <div key={index} className='image-item'>
        <img src={item} alt='' />
      </div>
    ));
  }, [slider3Data]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth <= 1200);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <Animation isLogin={isLogin}>
      <Wrapper>
        <Imagediv>{verticalSlider1Images.concat(verticalSlider1Images)}</Imagediv>
      </Wrapper>
      <Wrapper>
        <Imagediv reverse>{verticalSlider2Images.concat(verticalSlider2Images)}</Imagediv>
      </Wrapper>
      {(!isLogin || !isSmallScreen) && (
        <Wrapper>
          <Imagediv>{verticalSlider3Images.concat(verticalSlider3Images)}</Imagediv>
        </Wrapper>
      )}
    </Animation>
  );
}
