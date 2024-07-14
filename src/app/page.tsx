import Discoversection from './components/discoverSection/discoversection';
import LoginCard from './components/loginCard/loginCard';

export default async function Home() {
  // Fetch data in parallel

  // const imageList1 = removeEmptyElement(data?.sliderList1Collection?.items);
  // const imageList2 = removeEmptyElement(data?.sliderList2Collection?.items);
  // const imageList3 = removeEmptyElement(data?.sliderList3Collection?.items);

  return (
    <>
      {/* <HeroSection
        title={data?.title}
        description={data?.description}
        tag={data?.tag}
        buttonText={data?.primaryButton}
        sliderlist1={imageList1}
        sliderlist2={imageList2}
        sliderlist3={imageList3}
      /> */}
      <Discoversection data={[]} industryField={[]} title='Weekly Ads' />
      <LoginCard />
    </>
  );
}
