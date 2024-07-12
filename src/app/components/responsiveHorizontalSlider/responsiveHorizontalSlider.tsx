'use client';
import React, { useEffect, useMemo } from 'react';
import { AppsAnimated } from './styles';
import { ImageDataInterface } from '@/app/Interface/homePageInterface';
interface imageData {
  slider1Data: ImageDataInterface[];
  slider2Data: ImageDataInterface[];
  slider3Data: ImageDataInterface[];
}
const ResponsiveHorizontalSlider = ({ slider1Data, slider2Data, slider3Data }: imageData) => {
  const featurecontent1View = useMemo(() => {
    return slider1Data.map((item, index) => {
      return (
        <div key={index} className='imgdiv'>
          <img src={item?.url} alt='' width={180} height={180} className='img' />
        </div>
      );
    });
  }, [slider1Data]);
  const featurecontent2View = useMemo(() => {
    return slider2Data.map((item, index) => {
      return (
        <div key={index} className='imgdiv'>
          <img src={item?.url} alt='' width={180} height={180} className='img' />
        </div>
      );
    });
  }, [slider2Data]);
  const featurecontent3View = useMemo(() => {
    return slider3Data.map((item, index) => {
      return (
        <div key={index} className='imgdiv'>
          <img src={item?.url} alt='' width={180} height={180} className='img' />
        </div>
      );
    });
  }, [slider3Data]);

  useEffect(() => {
    const containerElem = document.getElementById('containerElem1');
    if (!containerElem) return;
    const leftSideOfContainer = containerElem.getBoundingClientRect().left;
    const listElem = document.getElementById('list1');
    if (!listElem) return;
    let currentLeftValue = 0;

    const animationLoop = () => {
      const firstListItem = listElem.querySelector('.list__item1:first-child') as HTMLElement;
      if (!firstListItem) return;

      let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;

      if (rightSideOfFirstItem === leftSideOfContainer) {
        currentLeftValue = -1;
        listElem.appendChild(firstListItem);
      }

      listElem.style.marginLeft = `${currentLeftValue}px`;
      currentLeftValue--;
    };

    const intervalId = setInterval(animationLoop, 25);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const containerElem2 = document.getElementById('containerElem2');
    if (!containerElem2) return;
    let rightSideOfContainer2 = containerElem2.getBoundingClientRect().right;
    const listElem2 = document.getElementById('list2');
    if (!listElem2) return;
    let currentLeftValue = -containerElem2.offsetWidth;

    const animationLoop2 = () => {
      const firstListItem = listElem2.querySelector('.list__item1:first-child') as HTMLElement;
      if (!firstListItem) return;

      const leftSideOfFirstItem = firstListItem.getBoundingClientRect().left;

      if (leftSideOfFirstItem >= rightSideOfContainer2) {
        const lastListItem = listElem2.querySelector('.list__item1:last-child') as HTMLElement;
        if (!lastListItem) return;

        const rightSideOfLastItem = lastListItem.getBoundingClientRect().right;

        if (rightSideOfLastItem <= rightSideOfContainer2) {
          currentLeftValue -= lastListItem.offsetWidth;
          listElem2.prepend(lastListItem);
        }
      }

      listElem2.style.marginLeft = `${currentLeftValue}px`;
      if (currentLeftValue >= 0) {
        currentLeftValue = -containerElem2.scrollWidth / 2;
      } else {
        currentLeftValue++;
      }
    };

    const handleResize = () => {
      rightSideOfContainer2 = containerElem2.getBoundingClientRect().right;
    };

    window.addEventListener('resize', handleResize);

    const intervalId2 = setInterval(animationLoop2, 25);

    return () => {
      clearInterval(intervalId2);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const containerElem3 = document.getElementById('containerElem3');
    if (!containerElem3) return;
    const leftSideOfContainer3 = containerElem3.getBoundingClientRect().left;
    const listElem3 = document.getElementById('list3');
    if (!listElem3) return;
    let currentLeftValue = 0;

    const animationLoop = () => {
      const firstListItem = listElem3.querySelector('.list__item1:first-child') as HTMLElement;
      if (!firstListItem) return;

      let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;

      if (rightSideOfFirstItem === leftSideOfContainer3) {
        currentLeftValue = -1;
        listElem3.appendChild(firstListItem);
      }

      listElem3.style.marginLeft = `${currentLeftValue}px`;
      currentLeftValue--;
    };

    const intervalId = setInterval(animationLoop, 25);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <AppsAnimated>
        <div className='wrap wrap--logobar' id='containerElem1'>
          <ul className='list1' id='list1'>
            <li className='list__item1'>
              <div className='card-gap'>{featurecontent1View}</div>
            </li>
            <li className='list__item1'>
              <div className='card-gap'>{featurecontent1View}</div>
            </li>
          </ul>
        </div>
      </AppsAnimated>
      <AppsAnimated>
        <div className='wrap wrap--logobar' id='containerElem2'>
          <ul className='list1' id='list2'>
            <li className='list__item1'>
              <div className='card-gap'>{featurecontent2View}</div>
            </li>
            <li className='list__item1'>
              <div className='card-gap'>{featurecontent2View}</div>
            </li>
          </ul>
        </div>
      </AppsAnimated>
      <AppsAnimated>
        <div className='wrap wrap--logobar' id='containerElem3'>
          <ul className='list1' id='list3'>
            <li className='list__item1'>
              <div className='card-gap'>{featurecontent3View}</div>
            </li>
            <li className='list__item1'>
              <div className='card-gap'>{featurecontent3View}</div>
            </li>
          </ul>
        </div>
      </AppsAnimated>
    </>
  );
};

export default ResponsiveHorizontalSlider;
