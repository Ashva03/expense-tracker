import AdsDetailCardSection from '@/app/components/adsDetailCardSection/adsDetailCardSection';
import AdsDetailHeroSection from '@/app/components/adsDetailHeroSection/adsDetailHeroSection';
import LoginCard from '@/app/components/loginCard/loginCard';
import React from 'react';

export default async function page({ params }: { params: { slug: string } }) {
  const { slug } = params || {}
  console.log('slug', slug)

  return (
    <div>
      <AdsDetailHeroSection data={[]} />
      <AdsDetailCardSection adsData={[]} />
      <LoginCard />
    </div>
  );
}
