import BlogDetailSection from '@/app/components/blogSection/blogDetailSection';
import NewsletterDetailSection from '@/app/components/newsletterDetailSection/newsletterDetailSection';
import NewsletterDetailHeroSection from '@/app/components/newsletterDetailsHeroSection/newsletterDetailsHeroSection';
import React from 'react';

export default function page() {
  return (
    <>
      <NewsletterDetailHeroSection />
      <NewsletterDetailSection />
      <BlogDetailSection />
    </>
  );
}
