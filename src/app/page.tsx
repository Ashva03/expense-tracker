import { getHomePageData, getIndustryFields } from '@/lib/contentful_homePage';
import Discoversection from './components/discoverSection/discoversection';
import HeroSection from './components/heroSection/heroSection';
import LoginCard from './components/loginCard/loginCard';
import { HomePageContentfulId } from '@/global/constants';
import { removeEmptyElement } from '@/helper/common';
import { getBrandData } from '@/lib/contentful_brand';

export default async function Home() {
  // Fetch data in parallel
  const [data, brandData, industryField] = await Promise.all([
    getHomePageData(HomePageContentfulId),
    getBrandData(),
    getIndustryFields()
  ]);

  const imageList1 = removeEmptyElement(data?.sliderList1Collection?.items);
  const imageList2 = removeEmptyElement(data?.sliderList2Collection?.items);
  const imageList3 = removeEmptyElement(data?.sliderList3Collection?.items);

  return (
    <>
      <HeroSection
        title={data?.title}
        description={data?.description}
        tag={data?.tag}
        buttonText={data?.primaryButton}
        sliderlist1={imageList1}
        sliderlist2={imageList2}
        sliderlist3={imageList3}
      />
      <Discoversection data={brandData} industryField={industryField} title='Weekly Ads' />
      <LoginCard />
    </>
  );
}
