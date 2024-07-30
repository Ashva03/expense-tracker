'use client';
import React from 'react';
import CTA from '../CTA/cta';
import Footer from '../footer/footer';
import { Main } from './styles';
import { usePathname } from 'next/navigation';
import { FOOTER_HIDE_PATHS } from '@/global/constants';

export default function Footersection() {
  const pathName = usePathname();

  if (FOOTER_HIDE_PATHS.includes(pathName || '')) {
    return <></>;
  } else
    return (
      <Main>
        <CTA />
        <Footer />
      </Main>
    );
}
