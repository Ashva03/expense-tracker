'use client';

import React, { useCallback, useState } from 'react';
import { Control, PageDiv, PaginationDiv } from './style';
const Pagination: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const btns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

  const updateActiveClass = (index: number) => {
    setCurrentIndex(index);
  };

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + btns.length) % btns.length);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % btns.length);
  }, []);

  const renderPageNumbers = () => {
    const totalButtons = btns.length;
    const currentIndexPlusOne = currentIndex + 1;

    if (totalButtons <= 5) {
      return btns.map((btn, index) => (
        <li key={index} className={currentIndex === index ? 'active' : ''} onClick={() => updateActiveClass(index)}>
          {btn}
        </li>
      ));
    }

    if (currentIndexPlusOne <= 3) {
      return (
        <>
          {btns.slice(0, 3).map((btn, index) => (
            <li key={index} className={currentIndex === index ? 'active' : ''} onClick={() => updateActiveClass(index)}>
              {btn}
            </li>
          ))}
          <li className='three-dot'>...</li>
          <li
            className={currentIndex === totalButtons - 1 ? 'active' : ''}
            onClick={() => updateActiveClass(totalButtons - 1)}>
            {btns[totalButtons - 1]}
          </li>
        </>
      );
    }

    if (currentIndexPlusOne > 3 && currentIndexPlusOne < totalButtons - 2) {
      return (
        <>
          {currentIndex < 3 && (
            <li className={currentIndex === 0 ? 'active' : ''} onClick={() => updateActiveClass(0)}>
              {btns[0]}
            </li>
          )}
          {btns.slice(currentIndex - 1, currentIndex + 2).map((btn, index) => (
            <li
              key={index + currentIndex - 1}
              className={currentIndex === index + currentIndex - 1 ? 'active' : ''}
              onClick={() => updateActiveClass(index + currentIndex - 1)}>
              {btn}
            </li>
          ))}
          <li className='three-dot'>...</li>
          <li
            className={currentIndex === totalButtons - 1 ? 'active' : ''}
            onClick={() => updateActiveClass(totalButtons - 1)}>
            {btns[totalButtons - 1]}
          </li>
        </>
      );
    }

    return (
      <>
        <li className={currentIndex === 0 ? 'active' : ''} onClick={() => updateActiveClass(0)}>
          {btns[0]}
        </li>
        <li className='three-dot'>...</li>
        {btns.slice(totalButtons - 3).map((btn, index) => (
          <li
            key={index + totalButtons - 3}
            className={currentIndex === index + totalButtons - 3 ? 'active' : ''}
            onClick={() => updateActiveClass(index + totalButtons - 3)}>
            {btn}
          </li>
        ))}
      </>
    );
  };

  return (
    <PaginationDiv>
      <Control
        onClick={handlePrevious}
        disabled={currentIndex === 0}
        className={currentIndex === 0 ? 'text-color' : ''}>
        Prev
      </Control>
      <PageDiv>{renderPageNumbers()}</PageDiv>
      <Control
        onClick={handleNext}
        disabled={currentIndex === btns.length - 1}
        className={currentIndex === btns.length - 1 ? 'text-color' : ''}>
        Next
      </Control>
    </PaginationDiv>
  );
};

export default Pagination;
