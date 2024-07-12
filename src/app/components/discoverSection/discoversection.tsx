'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { Content, Main } from './styles';
import { Container } from '@/app/styles/commonStyle';
import DiscoverHeader from '../discoverHeader/discoverHeader';
import Cardslider from '../cardSlider/cardslider';
import { BrandDataInterface, IndustryDataInterface } from '@/app/Interface/brandInterface';
import { RootReducerInterface } from '@/app/Interface/RootReducerInterface';
import { useDispatch, useSelector } from 'react-redux';
import { setSavedBrandList } from '@/actions/brandActions';
import { getSavedBrands } from '@/serverActions/brandActions';
export default function Discoversection({
  data,
  industryField,
  title,
  isLibrary,
}: {
  data: BrandDataInterface[];
  industryField: IndustryDataInterface[];
  title: string;
  isLibrary?: boolean;
}) {
  const [cardListData, setCardListData] = useState<BrandDataInterface[]>([]);
  const brandSelector = useSelector((state: RootReducerInterface) => state.brand);
  const { industry, savedBrandList } = brandSelector;
  const userSelector = useSelector((state: any) => state.user);
  const { userDetails } = userSelector || {};
  const [isSaveButtonActive, setIsSaveButtonActive] = useState(false);

  const dispatch = useDispatch();

  const loadSavedData = useCallback(async () => {
    if (userDetails?.uid) {
      let savedBrandData: BrandDataInterface[] = [];
      const alreadySavedBrandId = await getSavedBrands(userDetails?.uid);

      savedBrandData = data?.map((item) => {
        if (alreadySavedBrandId.includes(item?.sys?.id)) {
          return { ...item, isSaved: true };
        } else {
          return item;
        }
      });
      await dispatch(setSavedBrandList(savedBrandData));
    }
  }, [data, dispatch, userDetails?.uid]);

  useEffect(() => {
    loadSavedData();
  }, [loadSavedData]);

  const loadData = useCallback(
    (cardData: BrandDataInterface[]) => {
      if (industry && industry !== 'All') {
        const filteredData = cardData.filter((card: BrandDataInterface) => card.industry?.title === industry);
        setCardListData(filteredData);
      } else if (industry && industry === 'All') {
        setCardListData(cardData);
      } else {
        setCardListData(cardData);
      }
    },
    [industry],
  );

  useEffect(() => {
    if (!isLibrary && !isSaveButtonActive) {
      loadData(data);
    } else {
      const saveBrand = savedBrandList.filter((item) => item?.isSaved === true);
      loadData(saveBrand);
    }
  }, [data, isLibrary, isSaveButtonActive, loadData, savedBrandList]);

  return (
    <>
      <Main isEmptyState={cardListData?.length === 0} isLibrary={isLibrary}>
        <Container>
          <Content>
            <DiscoverHeader
              industryField={industryField}
              title={title}
              isLibrary={isLibrary}
              isSaveButtonActive={isSaveButtonActive}
              setIsSaveButtonActive={setIsSaveButtonActive}
            />
            <Cardslider cardData={cardListData} isLibrary={isLibrary} loadData={loadSavedData} isHome={!isLibrary} isSaveButtonActive={isSaveButtonActive} />
          </Content>
        </Container>
      </Main>
    </>
  );
}
