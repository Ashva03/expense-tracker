import React from 'react';
import { ServiceHeroSection } from '../components/serviceHeroSection/serviceHeroSection';
import { ServiceSection } from '../components/serviceSection/serviceSection';
import AdCreationServiceSection from '../components/adCreationServiceSection/adCreationServiceSection';
import SuccessService from '../components/successService/successService';

export default function Service() {
  return (
    <>
      <ServiceHeroSection />
      <SuccessService />
      <AdCreationServiceSection />
      <ServiceSection />
    </>
  );
}
