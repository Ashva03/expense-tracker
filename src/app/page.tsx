'use client';
import { useSelector } from 'react-redux';
import Discoversection from './components/discoverSection/discoversection';
import HeroSection from './components/heroSection/heroSection';
import LoginCard from './components/loginCard/loginCard';
import { RootReducerInterface } from './Interface/RootReducerInterface';
import { isEmpty } from '@/helper/common';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const userSelector = useSelector((state: RootReducerInterface) => state.user);
  const { userDetails } = userSelector || {};

  useEffect(() => {
    if (!isEmpty(userDetails?.id)) {
      router.push('/dashboard');
    }
  }, [router, userDetails?.id]);

  return (
    <>
      <HeroSection
        title={'Expense Tracker - Your Personal Financial Tracke'}
        description={'Welcome to Expense Tracker, your go-to solution for managing income and expenses effortlessly. Keep track of your finances, generate detailed reports, and gain insights to make informed financial decisions. Start now and take control of your money!'}
        tag={'Effortless Expense & Income Tracking'}
        buttonText={'Explore more'}
      />
      <Discoversection data={[]} industryField={[]} title='Weekly Ads' />
      <LoginCard />
    </>
  );
}
