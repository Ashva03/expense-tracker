'use client';
import React, { useCallback, useEffect } from 'react';
import { images } from '@/app/assets/images';
import Discovercard from '../discoverCard/discovercard';
import { Column, Div, Emptystatediv, Gradient } from './styles';
import { BrandDataInterface } from '@/app/Interface/brandInterface';
import Emptystate from '../emptyState/emptystate';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerInterface } from '@/app/Interface/RootReducerInterface';
import { setBrandList, setFilteredList } from '@/actions/brandActions';
import { isEmpty } from '@/helper/common';

export default function Cardslider({
  cardData,
  loadData,
  isLibrary,
  isHome,
  isSaveButtonActive,
}: {
  cardData: BrandDataInterface[];
  loadData: () => void;
  isLibrary?: boolean;
  isHome?: boolean;
  isSaveButtonActive?: boolean;
}) {
  const brandSelector = useSelector((state: RootReducerInterface) => state.brand);
  const { sortType, filteredList } = brandSelector;
  const userSelector = useSelector((state: any) => state.user);
  const { userDetails } = userSelector || {};
  const disptach = useDispatch();

  const sortData = (data: BrandDataInterface[], sortType: string) => {
    if (sortType === 'Newest') {
      return data.sort(
        (a, b) => new Date(b.sys.firstPublishedAt).getTime() - new Date(a.sys.firstPublishedAt).getTime(),
      );
    } else if (sortType === 'Oldest') {
      return data.sort(
        (a, b) => new Date(a.sys.firstPublishedAt).getTime() - new Date(b.sys.firstPublishedAt).getTime(),
      );
    } else if (sortType === 'Recently Updated') {
      return data.sort((a, b) => new Date(b.sys.publishedAt).getTime() - new Date(a.sys.publishedAt).getTime());
    } else {
      return data;
    }
  };

  const loadSortedData = useCallback(() => {
    const sortedData = sortData([...cardData], sortType);
    disptach(setBrandList(sortedData));
    disptach(setFilteredList(sortedData));
  }, [cardData, disptach, sortType]);

  useEffect(() => {
    loadSortedData();
  }, [loadSortedData]);

  return (
    <Div>
      {filteredList.length > 0 ? (
        <>
          <Column>
            {filteredList.map((card: BrandDataInterface, index: number) => (
              <li key={index} className='card-item'>
                <Discovercard data={card} loadData={loadData} />
              </li>
            ))}
          </Column>
          {isEmpty(userDetails) && (
            <Gradient isLibrary={isLibrary}>
              <div className='bottom-Gratdient'></div>
            </Gradient>
          )}
        </>
      ) : isHome && !isSaveButtonActive ? (
        <Emptystatediv>
          <Emptystate imgSrc={images.emptyStateImg.src} title='No result Found' />
        </Emptystatediv>
      ) : (
        <Emptystatediv>
          <Emptystate imgSrc={images.libraryemptystate.src} title='No ads saved yet' />
        </Emptystatediv>
      )}
    </Div>
  );
}
