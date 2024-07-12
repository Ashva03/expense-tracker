// Discovercard.tsx

import React, { useCallback, useState } from 'react';
import {
  Bottom,
  Btndiv,
  Card,
  Cardheader,
  CarouselWrapper,
  Leftdiv,
  Newtag,
  Rightdiv,
  Slide,
  Updatedtag,
} from './styles';
import { images } from '@/app/assets/images';
import { AdsItemInterface, BrandAdsData } from '@/app/Interface/brandInterface';
import ModalCustom from '../modelCustom/modelCustom';
import PopUpSider from '../popUpSlider/popUpSlider';
import { getUTCDate } from '@/helper/common';
import moment from 'moment';

interface DiscovercardProps {
  data: BrandAdsData;
  adsData: AdsItemInterface;
  enableHoverEffect?: boolean;
  onloadData?: () => void;
}

const BrandDetailDiscovercard = ({ data, adsData, onloadData }: DiscovercardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const islinkedIn = adsData?.platform?.includes('LinkedIn');
  const isMeta = adsData?.platform?.includes('Meta');

  const handleCardClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const createdAt = adsData?.sys?.firstPublishedAt;
  const updatedAt = adsData?.sys?.publishedAt;
  const minimumDays = 15;

  const currentDate = moment(getUTCDate(new Date()).toISOString());
  const dueDate = moment(getUTCDate(updatedAt).toISOString());
  const diffInDays = dueDate.diff(currentDate, 'days');
  const absoluteDiffInDays = Math.abs(diffInDays);

  return (
    <>
      <Card onClick={() => handleCardClick()}>
        <Cardheader>
          <Leftdiv>
            <img src={data?.logo?.url} alt='logo' width={36} height={36} />
            <p>{data.title}</p>
          </Leftdiv>
          <Rightdiv>
            {islinkedIn ? <img src={images.linkedinLogo.src} alt='linkedin-logo' width={36} height={36} /> : null}
            {isMeta ? <img src={images.metaLogo.src} alt='meta-logo' width={36} height={36} /> : null}
          </Rightdiv>
        </Cardheader>
        <Bottom>
          {/* <img src={images.stripImg.src} alt='img' width={380} height={518} /> */}
          {/* <img src={images.stripImg.src} alt='img' /> */}
          <CarouselWrapper>
            {/* <CarouselInner> */}
            <Slide>
              {/* <img src={images.stripImg.src} alt='img' width={384} height={520} className='slider-img' /> */}
              <img src={adsData?.adImage?.url} alt='img' width={384} className='detail-card' onLoad={onloadData} />
            </Slide>
            {/* </CarouselInner> */}
          </CarouselWrapper>
          <Btndiv>
            {absoluteDiffInDays <= minimumDays ? (
              createdAt === updatedAt ? (
                <Newtag>New</Newtag>
              ) : (
                <Updatedtag>Updated</Updatedtag>
              )
            ) : (
              ''
            )}
          </Btndiv>
        </Bottom>
      </Card>
      <ModalCustom open={isModalOpen} onClose={handleCloseModal}>
        <PopUpSider sliderData={data} onClose={handleCloseModal} />
      </ModalCustom>
    </>
  );
};
export default BrandDetailDiscovercard;
