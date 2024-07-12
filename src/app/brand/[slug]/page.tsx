import AdsDetailCardSection from '@/app/components/adsDetailCardSection/adsDetailCardSection';
import AdsDetailHeroSection from '@/app/components/adsDetailHeroSection/adsDetailHeroSection';
import LoginCard from '@/app/components/loginCard/loginCard';
import { getBrandAds, getBrandData } from '@/lib/contentful_brand';
import React from 'react';

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params || {}
  const [BrandData, BrandAdsData] = await Promise.all([
    getBrandData(),
    getBrandAds(slug)
  ]);
  return (
    <div>
      <AdsDetailHeroSection data={BrandData} />
      <AdsDetailCardSection adsData={BrandAdsData} />
      <LoginCard />
    </div>
  );
}
