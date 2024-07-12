import React from 'react';
import { getHomePageData } from '@/lib/contentful_homePage';
import { removeEmptyElement } from '@/helper/common';
import { HomePageContentfulId } from '@/global/constants';
import ResetPassword from '../components/resetPassword/resetPassword';

export default async function ResetPasswordPage({ searchParams: { oobCode } }: { searchParams: { oobCode: string } }) {
  const data = await getHomePageData(HomePageContentfulId);
  const imageList1 = removeEmptyElement(data?.sliderList1Collection?.items);
  const imageList2 = removeEmptyElement(data?.sliderList2Collection?.items);
  const imageList3 = removeEmptyElement(data?.sliderList3Collection?.items);
  return (
    <div>
      <ResetPassword sliderlist1={imageList1} sliderlist2={imageList2} sliderlist3={imageList3} oobCode={oobCode} />
    </div>
  );
}
