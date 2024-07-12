import React from 'react';
import LibrarySection from '../components/myLibrary/myLibrary';
import { getBrandData } from '@/lib/contentful_brand';
import { getIndustryFields } from '@/lib/contentful_homePage';
export default async function MyLibrary() {
  const brandData = await getBrandData();
  const industryField = await getIndustryFields();
  return (
    <div>
      <LibrarySection data={brandData} industry={industryField} />
    </div>
  );
}
