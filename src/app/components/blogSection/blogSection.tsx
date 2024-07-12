'use client';

import React from 'react';
import BlogSectionHeader from '../blogSectionHeader/BlogSectionHeader';
import { BlogCardSection, Content, Main } from './style';
import { Container } from '@/app/styles/commonStyle';
import BlogCard from '../blogCard/blogCard';
import { images } from '@/app/assets/images';
import Pagination from '../pagination/pagination';

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

interface Props {}

const BlogSection: React.FC<Props> = () => {
  return (
    <Main>
      <Container>
        <Content>
          <BlogSectionHeader title='Explore Our Weekly News' />
          <BlogCardSection>
            {blogPosts.map((item, index) => (
              <BlogCard key={index} image={item.image} title={item.title} time={item.time} />
            ))}
          </BlogCardSection>
          <Pagination />
        </Content>
      </Container>
    </Main>
  );
};

export default BlogSection;
