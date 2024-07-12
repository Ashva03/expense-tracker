'use client';

import React, { useEffect, useState } from 'react';
import BlogSectionHeader from '../blogSectionHeader/BlogSectionHeader';
import { BlogCardSection, Content, Main } from './style';
import { Container } from '@/app/styles/commonStyle';
import BlogCard from '../blogCard/blogCard';
import { images } from '@/app/assets/images';

interface BlogPost {
  image: string;
  title: string;
  time: string;
}

const blogPosts: BlogPost[] = [
  {
    image: `${images.blogimage.src}`,
    title: 'Aenean nunc egestas sed turpis erat diam. Nulla faucibus molestie magnis.',
    time: '15 hours ago',
  },
  {
    image: `${images.blogimage2.src}`,
    title: 'Sociis orci quam sem ultricies gravida euismod. Adipiscing integer dictum.',
    time: 'May 15, 2024',
  },
  {
    image: `${images.blogimage.src}`,
    title:
      'Habitasse nisl aliquet morbi at blandit aliquet consequat proin. Eu in faucibus eget at vel vulputate. Venenatis adipiscing id morbi massa vestibulum ipsum. Justo neque facilisis tincidunt morbi etiam. Parturient orci vestibulum ut amet faucibus pellentesque fames.',
    time: 'May 14, 2024',
  },
  {
    image: `${images.blogimage2.src}`,
    title: 'Tortor ornare gravida risus pharetra a hac in eget rhoncus. Sollicitudin tellus.',
    time: 'May 10, 2024',
  },
  {
    image: `${images.blogimage.src}`,
    title: 'Aenean nunc egestas sed turpis erat diam. Nulla faucibus molestie magnis.',
    time: '14 Jan, 2024',
  },
];

interface Props {
  isDetail?: boolean;
}

const BlogDetailSection: React.FC<Props> = ({ isDetail }) => {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    // Update the state based on the initial media query status
    setIsTablet(mediaQuery.matches);

    // Event listener to update the state on media query change
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setIsTablet(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Clean up event listener on component unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  // Determine the number of blog posts to display
  const postsToDisplay = !isDetail ? (isTablet ? blogPosts.slice(0, 2) : blogPosts.slice(0, 3)) : blogPosts;
  return (
    <Main className='newsletter-detail'>
      <Container>
        <Content>
          <BlogSectionHeader title='Keep Reading' isdetail={true} />
          <BlogCardSection>
            {postsToDisplay.map((item, index) => (
              <BlogCard key={index} image={item.image} title={item.title} time={item.time} />
            ))}
          </BlogCardSection>
        </Content>
      </Container>
    </Main>
  );
};

export default BlogDetailSection;
