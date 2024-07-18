import Discoversection from './components/discoverSection/discoversection';
import HeroSection from './components/heroSection/heroSection';
import LoginCard from './components/loginCard/loginCard';

export default async function Home() {

  return (
    <>
      <HeroSection
        title={'Expense Manager - Your Personal Financial Tracke'}
        description={'Welcome to Expense Manager, your go-to solution for managing income and expenses effortlessly. Keep track of your finances, generate detailed reports, and gain insights to make informed financial decisions. Start now and take control of your money!'}
        tag={'Effortless Expense & Income Tracking'}
        buttonText={'Explore more'}
      />
      <Discoversection data={[]} industryField={[]} title='Weekly Ads' />
      <LoginCard />
    </>
  );
}
