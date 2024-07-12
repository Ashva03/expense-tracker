'use client';

import React from 'react';
import Discoversection from '../discoverSection/discoversection';
import { BrandDataInterface, IndustryDataInterface } from '@/app/Interface/brandInterface';
interface Props {
  data: BrandDataInterface[];
  industry: IndustryDataInterface[];
}
const LibrarySection = (props: Props) => {
  const { data, industry } = props;
  return (
    <>
      <Discoversection data={data} industryField={industry} title='My Library' isLibrary={true} />
    </>
  );
};

export default LibrarySection;
