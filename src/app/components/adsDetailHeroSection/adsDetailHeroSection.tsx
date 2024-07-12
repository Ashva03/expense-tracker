'use client';
import React from 'react';
import { Background, Cards, Content, Detail, First, Maindiv, Right, Seconddiv } from './styles';
import { Container } from '@/app/styles/commonStyle';
import Link from 'next/link';
import SVGIcon from '@/app/assets/SVGIcon';
import Card from './card';
import { useParams } from 'next/navigation';
import { BrandDataInterface } from '@/app/Interface/brandInterface';

export default function AdsDetailHeroSection({ data }: { data: BrandDataInterface[] }) {
  const { slug } = useParams() || { slug: undefined };

  const currentBrandData = data?.find((item) => item?.slug === slug);
  return (
    <>
      <Maindiv>
        <Background />
        <Container>
          <Content>
            <First>
              <Link href={'/'}>
                <SVGIcon name='left-arrow-icon' width='16' height='16' viewBox='0 0 16 16' />
                Back
              </Link>
            </First>
            <Seconddiv>
              <img src={currentBrandData?.logo?.url} alt='logo' width={70} height={70} className='logo' />
              <Right>
                <h4>{currentBrandData?.title}</h4>
                <p>{currentBrandData?.tag}</p>
              </Right>
            </Seconddiv>
            <Detail>{currentBrandData?.description}</Detail>
            <Cards>
              {currentBrandData?.industry?.title && (
                <Card iconName='building-icon' heading='Industry' title={currentBrandData?.industry?.title} />
              )}
              {currentBrandData?.hq && <Card iconName='location-icon' heading='HQ' title={currentBrandData?.hq} />}
              {currentBrandData?.funding && (
                <Card iconName='currency-icon' heading='Funding' title={currentBrandData?.funding} />
              )}
            </Cards>
          </Content>
        </Container>
      </Maindiv>
    </>
  );
}
