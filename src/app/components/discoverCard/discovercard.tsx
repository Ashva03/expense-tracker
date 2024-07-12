// Discovercard.tsx

import React, { useCallback, useEffect, useState } from 'react';
import {
  Bottom,
  Btndiv,
  Card,
  Cardheader,
  CarouselInner,
  CarouselWrapper,
  LeftArrow,
  Leftdiv,
  NavDot,
  NavigationDots,
  Newtag,
  RightArrow,
  Rightdiv,
  Saveicon,
  Slide,
  Updatedtag,
} from './styles';
import { images } from '@/app/assets/images';
import SVGIcon from '@/app/assets/SVGIcon';
import { useRouter } from 'next/navigation';
import { AdsItemInterface, BrandDataInterface } from '@/app/Interface/brandInterface';
import { getUTCDate, getUniquePlatformList, isEmpty } from '@/helper/common';
import moment from 'moment';
import { setSortingType, updateSavedBrandList } from '@/actions/brandActions';
import { useDispatch, useSelector } from 'react-redux';
import { removeSaveBrand, saveBrand } from '@/serverActions/brandActions';
import { RootReducerInterface } from '@/app/Interface/RootReducerInterface';
import Link from 'next/link';

interface DiscovercardProps {
  data: BrandDataInterface;
  enableHoverEffect?: boolean;
  loadData: () => void; // Prop to control hover effect
}

const Discovercard = ({ data, enableHoverEffect = true, loadData }: DiscovercardProps) => {
  const [isSaved, setIsSaved] = useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isLinkedIn, setIsLinkedIn] = useState(false);
  const [isMeta, setIsMeta] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const userSelector = useSelector((state: any) => state.user);
  const { userDetails } = userSelector || {};
  const brandSelector = useSelector((state: RootReducerInterface) => state.brand);
  const { savedBrandList } = brandSelector;

  const checkIfSaved = useCallback(() => {
    const foundBrand = savedBrandList.find((item) => item?.sys?.id === data?.sys?.id);
    if (foundBrand?.isSaved) {
      setIsSaved(true);
    } else {
      setIsSaved(false);
    }
  }, [data?.sys?.id, savedBrandList]);

  useEffect(() => {
    checkIfSaved();
  }, [checkIfSaved]);

  const stopRendering = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleSaveIconClick = useCallback(
    async (e: React.SyntheticEvent) => {
      stopRendering(e);
      if (!isEmpty(userDetails)) {
        if (isSaved) {
          dispatch(updateSavedBrandList({ id: data?.sys?.id, propsName: 'isSaved', value: false }));
          await removeSaveBrand(userDetails?.uid, data?.sys?.id);
        } else {
          dispatch(updateSavedBrandList({ id: data?.sys?.id, propsName: 'isSaved', value: true }));
          await saveBrand(userDetails?.uid, data?.sys?.id);
        }
        setIsSaved(!isSaved);
      } else {
        router.push('/login');
      }
    },
    [data?.sys?.id, dispatch, isSaved, router, stopRendering, userDetails],
  );

  const goToSlide = (index: number, e: React.SyntheticEvent) => {
    stopRendering(e);
    setCurrentSlide(index);
  };

  const nextSlide = (e: React.SyntheticEvent) => {
    stopRendering(e);
    if (currentSlide < data?.adsCollection?.items?.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = (e: React.SyntheticEvent) => {
    stopRendering(e);
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleCardClick = useCallback(() => {
    dispatch(setSortingType(''));
  }, [dispatch]);

  const loadPlatformData = useCallback(async () => {
    const socialIconList = await getUniquePlatformList(data?.adsCollection?.items);
    const LinkedIn = socialIconList?.includes('LinkedIn');
    const Meta = socialIconList?.includes('Meta');

    setIsLinkedIn(LinkedIn);
    setIsMeta(Meta);
  }, [data?.adsCollection]);

  useEffect(() => {
    loadPlatformData();
  }, [loadPlatformData]);

  const createdAt = data?.sys?.firstPublishedAt;
  const updatedAt = data?.sys?.publishedAt;
  const minimumDays = 15;

  const currentDate = moment(getUTCDate(new Date()).toISOString());
  const dueDate = moment(getUTCDate(updatedAt).toISOString());
  const diffInDays = dueDate.diff(currentDate, 'days');
  const absoluteDiffInDays = Math.abs(diffInDays);

  return (
    <>
      <Link href={`/brand/${data?.slug}`} onClick={() => handleCardClick()}>
        <Card>
          <Cardheader>
            <Leftdiv>
              <img src={data?.logo?.url} alt='logo' width={36} height={36} />
              <p>{data.title}</p>
            </Leftdiv>
            <Rightdiv>
              {isLinkedIn ? <img src={images.linkedinLogo.src} alt='linkedin-logo' width={36} height={36} /> : null}
              {isMeta ? <img src={images.metaLogo.src} alt='meta-logo' width={36} height={36} /> : null}
            </Rightdiv>
          </Cardheader>
          <Bottom>
            {/* <img src={imgSrc} alt='img' width={380} height={518} /> */}
            {/* <img src={images.stripImg.src} alt='img' /> */}
            <CarouselWrapper>
              <CarouselInner style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {data?.adsCollection?.items?.map((item: AdsItemInterface, index: number) => (
                  <Slide key={index} isHomepageCard>
                    <img src={item?.adImage.url} alt='img' width={384} height={498} className='slider-img' />
                  </Slide>
                ))}
              </CarouselInner>
              {data?.adsCollection?.items?.length > 1 && (
                <NavigationDots className='dots'>
                  {data?.adsCollection?.items.map((_: AdsItemInterface, index: number) => (
                    <NavDot
                      key={index}
                      isSelected={currentSlide === index}
                      onClick={(e) => goToSlide(index, e)}
                      enableHoverEffect={enableHoverEffect}
                    />
                  ))}
                </NavigationDots>
              )}
              <LeftArrow enableHoverEffect={enableHoverEffect} onClick={prevSlide} hidden={currentSlide === 0}>
                <img src={images.leftArrow.src} alt='leftarrow' width={32} height={32} />
              </LeftArrow>
              <RightArrow
                enableHoverEffect={enableHoverEffect}
                onClick={nextSlide}
                hidden={currentSlide === data?.adsCollection?.items?.length - 1}>
                <img src={images.rightArrow.src} alt='rightarrow' width={32} height={32} />
              </RightArrow>
            </CarouselWrapper>
            <Btndiv>
              {absoluteDiffInDays <= minimumDays ? (
                updatedAt === createdAt ? (
                  <Newtag>New</Newtag>
                ) : (
                  <Updatedtag>Updated</Updatedtag>
                )
              ) : (
                ''
              )}
              {enableHoverEffect && (
                <Saveicon onClick={handleSaveIconClick} className='hover-btn'>
                  <SVGIcon
                    name='saved-large-icon'
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill={isSaved ? '#fff' : 'none'}
                    className='svgicon'
                  />
                </Saveicon>
              )}
            </Btndiv>
          </Bottom>
        </Card>
      </Link>
    </>
  );
};
export default Discovercard;
