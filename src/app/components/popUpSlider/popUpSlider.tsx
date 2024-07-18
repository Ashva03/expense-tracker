'use client';
import React, { useEffect, useState } from 'react';
import Slider, { Settings, CustomArrowProps } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Arrow,
  CloseIcon,
  Description,
  Frame,
  Logo,
  PopModalDiv,
  PopSlide,
  Profile,
  SlideItem,
  Title,
  Top,
} from './style';
import SVGIcon from '@/app/assets/SVGIcon';
import { BrandAdsData } from '@/app/Interface/brandInterface';
import { useSelector } from 'react-redux';
import { RootReducerInterface } from '@/app/Interface/RootReducerInterface';
interface Props {
  onClose?: () => void;
  sliderData: BrandAdsData;
}

interface CustomArrowPropsExtended extends CustomArrowProps {
  currentSlide: number;
  slideCount: number;
  slidesToShow: number;
}

const CustomPrevArrow: React.FC<CustomArrowPropsExtended> = ({
  className,
  style,
  onClick,
  currentSlide,
  slidesToShow,
}) => (
  <Arrow className={`${className} ${currentSlide === 0 ? 'hidden' : ''}`} style={{ ...style }} onClick={onClick}>
    <SVGIcon name='right-large-icon' width='25' height='25' viewBox='0 0 25 25' className='icon' />
  </Arrow>
);

const CustomNextArrow: React.FC<CustomArrowPropsExtended> = ({
  className,
  style,
  onClick,
  currentSlide,
  slideCount,
  slidesToShow,
}) => (
  <Arrow
    className={`${className} ${currentSlide >= slideCount - slidesToShow ? 'hidden' : ''}`} // Adjusted condition here
    style={{ ...style }}
    onClick={onClick}>
    <SVGIcon name='right-large-icon' width='25' height='25' viewBox='0 0 25 25' />
  </Arrow>
);

const PopUpSider: React.FC<Props> = ({ onClose, sliderData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const brandSelector = useSelector((state: RootReducerInterface) => state.brand);
  const { filteredBrandCard } = brandSelector;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 449) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 769) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setCurrentSlide(newIndex);
  };

  const settings: Settings = {
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    infinite: false,
    beforeChange: handleBeforeChange,
    afterChange: (current) => setCurrentSlide(current),
    nextArrow: (
      <CustomNextArrow
        className='slick-next'
        currentSlide={currentSlide}
        slideCount={sliderData.adsCollection.items.length}
        slidesToShow={slidesToShow}
      />
    ),
    prevArrow: (
      <CustomPrevArrow
        className='slick-prev'
        currentSlide={currentSlide}
        slideCount={sliderData.adsCollection.items.length}
        slidesToShow={slidesToShow}
      />
    ),
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 449,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const isPrevArrowHidden = currentSlide === 0;
  const isNextArrowHidden = currentSlide >= sliderData.adsCollection.items.length - slidesToShow;

  return (
    <>
      <PopModalDiv>
        <CloseIcon
          onClick={() => {
            if (onClose) onClose();
          }}>
          <SVGIcon name='close-icon' width='24' height='24' viewBox='0 0 24 24' className='close' />
        </CloseIcon>
        <Top>
          <Profile>
            <Logo>
              <img src={sliderData?.logo?.url} alt='logo' className='img' />
            </Logo>
            <Frame>
              <Title>{sliderData?.title}</Title>
              <Description>{sliderData?.tag}</Description>
            </Frame>
          </Profile>
        </Top>
        <PopSlide>
          <div className={`leftGradient ${!isPrevArrowHidden ? 'visible' : ''}`}></div>
          <div className={`rightGradient ${!isNextArrowHidden ? 'visible' : ''}`}></div>
          <Slider {...settings}>
            {filteredBrandCard?.map((item, index) => (
              <SlideItem key={index}>
                <img className='lazy' src={item?.adImage?.url} alt={`Slide ${index}`} width={400} />
              </SlideItem>
            ))}
          </Slider>
        </PopSlide>
      </PopModalDiv>
    </>
  );
};

export default PopUpSider;
