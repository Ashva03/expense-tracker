'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Column, Content, Div, Div1, Gradient } from './styles';
import DetailsDiscoverHeader from '../detailsDiscoverHeader/detailsDiscoverHeader';
import { Container } from '@/app/styles/commonStyle';
import BrandDetailDiscovercard from '../discoverCard/brandDetailDiscovercard';
import { AdsItemInterface, BrandAdsData } from '@/app/Interface/brandInterface';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerInterface } from '@/app/Interface/RootReducerInterface';
import { setFilteredBrandCard } from '@/actions/brandActions';
import { isEmpty } from '@/helper/common';

export default function AdsDetailCardSection({ adsData }: { adsData: BrandAdsData[] }) {
  const [cardHeights, setCardHeights] = useState<number[]>([]);
  const [cardCount, setCardCount] = useState<number>(0);
  const [cardPerRow, setCardPerRow] = useState<number>(3);
  const brandSelector = useSelector((state: RootReducerInterface) => state.brand);
  const { sortType } = brandSelector;
  const userSelector = useSelector((state: any) => state.user);
  const { userDetails } = userSelector || {};
  const [sortedCardData, setSortedCardData] = useState<AdsItemInterface[]>([]);
  const dispatch = useDispatch();

  // Calculate the height of each card and set the top positions
  const handleResize = useCallback(() => {
    if (window) {
      const newWindowWidth = window.innerWidth;
      if (newWindowWidth <= 449) {
        setCardPerRow(1);
      } else if (newWindowWidth <= 768) {
        setCardPerRow(2);
      } else {
        setCardPerRow(3);
      }
    }
  }, []);

  useEffect(() => {
    handleResize();
    if (window) window.addEventListener('resize', handleResize);

    return () => {
      if (window) window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  // calculate height of all card
  const calculateHeight = useCallback((heights: number[], cardsPerRow: number) => {
    //convert array into 2D array
    const divideArray = (cardHeights: number[], cardsPerRow: number) => {
      const totalCards = cardHeights.length;
      const results: number[][] = [];
      for (let i = 0; i < totalCards; i += cardsPerRow) {
        let localNums = [];
        for (let j = 0; j < cardsPerRow; j++) {
          if (i + j < totalCards) {
            localNums.push(cardHeights[i + j] + 24);
          } else {
            localNums.push(0);
          }
        }
        results.push(localNums);
      }
      return results;
    };

    // Add heigth of all
    const addArray = (_array: number[][]) => {
      const cardsPerRow = _array[0].length;
      const totalRows = _array.length;
      const array = JSON.parse(JSON.stringify(_array)) as number[][];

      // here we are adding all card in same column from n, n-1, .... 0
      for (let j = 0; j < cardsPerRow; j++) {
        for (let i = totalRows - 1; i >= 0; i--) {
          let k = i - 1;
          while (k >= 0) {
            array[i][j] += array[k][j];
            k--;
          }
        }
      }
      // adding 1 row with all value 0
      array.unshift(new Array(cardsPerRow).fill(0));
      return array.flat();
    };

    const divideArrayHeight = divideArray(heights, cardsPerRow);
    return addArray(divideArrayHeight);
  }, []);

  //storing heigth of all card in single array
  const updateCardHeights = useCallback(() => {
    const cardElements = document.querySelectorAll('.card-item');
    const heights = Array.from(cardElements).map((card: Element) => card.getBoundingClientRect().height);
    const result = calculateHeight(heights, cardPerRow);
    setCardCount(cardElements.length);
    setCardHeights(result);
  }, [calculateHeight, cardPerRow]);

  const getTopPosition = useCallback(
    (index: number) => {
      if (index < cardCount) {
        return cardHeights[index];
      }
      return 0;
    },
    [cardCount, cardHeights],
  );

  const getMaxHeight = useCallback(() => {
    return Math.max(...cardHeights);
  }, [cardHeights]);

  const calculateLeftPosition = useCallback(
    (index: number) => {
      const cardWidth = (100 - (cardPerRow - 1) * ((24 / window.innerWidth!) * 100)) / cardPerRow;
      return (index % cardPerRow) * (cardWidth + (24 / window.innerWidth!) * 100);
    },
    [cardPerRow],
  );

  const sortData = (data: AdsItemInterface[], sortType: string) => {
    if (sortType === 'Newest') {
      return data.sort(
        (a, b) => new Date(b?.sys?.firstPublishedAt).getTime() - new Date(a?.sys?.firstPublishedAt).getTime(),
      );
    } else if (sortType === 'Oldest') {
      return data.sort(
        (a, b) => new Date(a?.sys?.firstPublishedAt).getTime() - new Date(b?.sys?.firstPublishedAt).getTime(),
      );
    } else if (sortType === 'Recently Updated') {
      return data.sort((a, b) => new Date(b?.sys?.publishedAt).getTime() - new Date(a?.sys?.publishedAt).getTime());
    } else {
      return data;
    }
  };

  useEffect(() => {
    const sortedData = sortData([...adsData[0]?.adsCollection?.items], sortType);
    setSortedCardData(sortedData);
    dispatch(setFilteredBrandCard(sortedData));
  }, [adsData, dispatch, sortType]);

  return (
    <Div>
      <Container>
        <Content>
          <DetailsDiscoverHeader data={adsData} />
          <Div1>
            <Column style={{ height: `${getMaxHeight()}px` }}>
              {sortedCardData.map((card, index) => {
                const leftPosition = calculateLeftPosition(index);
                return (
                  <li
                    key={index}
                    className='card-item'
                    style={{
                      top: `${getTopPosition(index)}px`,
                      position: 'absolute',
                      left: `${leftPosition}%`,
                      width: `${(100 - (cardPerRow - 1) * ((24 / window.innerWidth) * 100)) / cardPerRow}%`,
                    }}>
                    <BrandDetailDiscovercard
                      data={adsData[0]}
                      adsData={card}
                      enableHoverEffect={false}
                      onloadData={updateCardHeights}
                    />
                  </li>
                );
              })}
            </Column>
            {isEmpty(userDetails) && (
              <Gradient>
                <div className='bottom-Gratdient'></div>
              </Gradient>
            )}
          </Div1>
        </Content>
      </Container>
    </Div>
  );
}
