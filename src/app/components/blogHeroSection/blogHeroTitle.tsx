'use client';
import React from 'react';
import { Blogtitle, Bottomdiv, Heading, Profile, Title, Topdiv } from './styles';
import { images } from '@/app/assets/images';

const profileImages = [
  { id: 1, src: images.profile.src },
  { id: 2, src: images.profile.src },
  { id: 3, src: images.profile.src },
  { id: 4, src: images.profile.src },
  { id: 5, src: images.profile.src },
  { id: 6, src: images.profile.src },
];
export default function BlogHeroTitle() {
  return (
    <>
      <Blogtitle>
        <Topdiv>
          <Profile>
            <ul>
              {profileImages.map((image) => (
                <li key={image.id}>
                  <img src={image.src} alt='profile' width={36} height={36} className='profile-img' />
                </li>
              ))}
            </ul>
          </Profile>
          <Heading>Join the 500+ marketing experts in the loop</Heading>
        </Topdiv>
        <Title>Subscribe To My Newsletter and Be the First To Know</Title>
        <Bottomdiv>The best b2b ad examples from growing companies, every Wednesday.</Bottomdiv>
      </Blogtitle>
    </>
  );
}
