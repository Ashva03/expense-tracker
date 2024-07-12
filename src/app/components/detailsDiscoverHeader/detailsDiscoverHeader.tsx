'use client';

import React from 'react';
import { Content, DiscoverDiv, Filterdiv, SubTitle, Title } from './style';
import Filter from '../filter/filter';
import { BrandAdsData } from '@/app/Interface/brandInterface';

export default function DetailsDiscoverHeader({ data }: { data: BrandAdsData[] }) {
  return (
    <DiscoverDiv>
      <Content>
        <Title id='WeeklyAds'>All {data[0]?.title} Ads</Title>
        <SubTitle id='WeeklyAds'>{data[0]?.adsCollection?.items?.length} Ads Post</SubTitle>
      </Content>
      <Filterdiv>
        <Filter width={true} />
      </Filterdiv>
    </DiscoverDiv>
  );
}
