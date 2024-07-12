'use client';
import React, { useCallback } from 'react';
import {
  Buttondiv,
  DiscoverDiv,
  Div,
  Dropdowndiv,
  Filterdiv,
  LeftFrame,
  Line,
  ResponsiveButtondiv,
  RightFrame,
  Tab,
  Title,
  Top,
} from './style';
import Dropdowns from '../dropdown/dropdown';
import SearchBar from '../searchBar/searchBar';
import Button from '../button/button';
import Filter from '../filter/filter';
import { IndustryDataInterface } from '@/app/Interface/brandInterface';
import { setFilteredList } from '@/actions/brandActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerInterface } from '@/app/Interface/RootReducerInterface';

export default function DiscoverHeader({
  industryField,
  isSaveButtonActive,
  setIsSaveButtonActive,
  title,
  isLibrary,
}: {
  title?: string;
  isLibrary?: boolean;
  industryField: IndustryDataInterface[];
  isSaveButtonActive: boolean;
  setIsSaveButtonActive: (value: boolean) => void;
}) {
  const brandSelector = useSelector((state: RootReducerInterface) => state.brand);
  const { savedBrandList, brandList } = brandSelector;
  const dispatch = useDispatch();

  const handleSaveButtonClick = useCallback(() => {
    setIsSaveButtonActive(!isSaveButtonActive);
    if (isSaveButtonActive || isLibrary) {
      const saveBrand = savedBrandList.filter((item) => item?.isSaved === true);
      dispatch(setFilteredList(saveBrand));
    } else {
      dispatch(setFilteredList(brandList));
    }
  }, [brandList, dispatch, isLibrary, isSaveButtonActive, savedBrandList, setIsSaveButtonActive]);

  return (
    <DiscoverDiv>
      <Top>
        <Title id='WeeklyAds'>{title}</Title>
        <ResponsiveButtondiv isLibrary={isLibrary} className={isSaveButtonActive ? 'saved-fill-icon' : ''}>
          <Button
            title='Saved'
            secondary
            iconName='saved-icon'
            leftIcon
            iconSize='16'
            iconViewBox='0 0 16 16'
            className='button'
            onClick={handleSaveButtonClick}
          />
        </ResponsiveButtondiv>
      </Top>
      <Tab isLibrary={isLibrary}>
        <LeftFrame>
          <Dropdowndiv>
            <Dropdowns menuItems={industryField || []} tableWidth={true} />
          </Dropdowndiv>
          <Filterdiv>
            <Filter tabletWidth={true} />
          </Filterdiv>
        </LeftFrame>
        <RightFrame>
          <Div>
            <SearchBar tabletWidth={true} />
          </Div>
          <Line isLibrary={isLibrary} />
          <Buttondiv isLibrary={isLibrary} className={isSaveButtonActive ? 'saved-fill-icon' : ''}>
            <Button
              title='Saved'
              secondary
              iconName='saved-icon'
              leftIcon
              iconSize='16'
              iconViewBox='0 0 16 16'
              className='btn'
              onClick={handleSaveButtonClick}
            />
          </Buttondiv>
        </RightFrame>
      </Tab>
    </DiscoverDiv>
  );
}
