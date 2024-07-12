import { images } from '@/app/assets/images';
import { colors } from '@/app/assets/style';
import styled from 'styled-components';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const Main = styled.div`
  background-color: ${colors.offWhite};
  padding: 120px 0 120px;
  &.newsletter-detail {
    padding: 0 0 120px;
  }
  @media (max-width: 768px) {
    padding: 80px 0 80px;
    &.newsletter-detail {
      padding: 0 0 80px;
    }
  }
  @media (max-width: 449px) {
    padding: 60px 0 60px;
    &.newsletter-detail {
      padding: 0 0 60px;
    }
  }
`;

const BlogCardSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));
  grid-template-rows: auto;
  gap: 24px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  @media (max-width: 991px) {
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(275px, 1fr));
  }
  @media (max-width: 640px) {
    max-width: -webkit-fill-available;
    grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
  }

  @media only screen and (max-width: 320px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export { Content, Main, BlogCardSection };
