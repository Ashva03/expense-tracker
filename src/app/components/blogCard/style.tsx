import { colors, typo } from '@/app/assets/style';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const CardDiv = styled(Link)`
  display: flex;
  flex-direction: column;
  max-width: 416px;
  border-radius: 12px;
  border: 1px solid ${colors.lightGray};
  background-color: ${colors.white};
  padding: 16px;
  &:hover {
    box-shadow: 2px 2px 26px 0px rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    &:hover {
      box-shadow: none;
      cursor: none;
    }
  }
  @media (max-width: 640px) {
    max-width: -webkit-fill-available;
  }
`;
const BlogImage = styled.div`
  display: flex;
  background-color: ${colors.imagebackground};
  border-radius: 8px;

  .blogimg {
    max-width: 384px;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  @media (max-width: 640px) {
    .blogimg {
      max-width: -webkit-fill-available;
    }
  }
`;
const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 4px;
  gap: 22px;
  align-items: flex-start;
  @media (max-width: 768px) {
    /* padding: 20px 4px 8px 4px; */
    gap: 20px;
  }
`;
const BlogText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Time = styled.div`
  ${typo.body2}
  color: ${colors.darkGray};
  @media (max-width: 768px) {
    ${typo.mobilebody2}
  }
`;
const Title = styled.div`
  ${typo.heading5}
  color: ${colors.primary};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  @media (max-width: 768px) {
    ${typo.tabletH5}
  }
`;

const RightArrow = styled.div`
  display: flex;
  transition: transform 0.3s ease;
`;

const BlogLink = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  span {
    color: ${colors.primary};
    ${typo.btntext}
  }
  &:hover {
    span {
      margin-right: 2px;
      color: ${colors.darkBlack};
    }

    ${RightArrow} {
      transform: translateX(2px);
    }
  }
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export { CardDiv, BlogImage, BlogContent, BlogText, Time, Title, BlogLink, RightArrow };
