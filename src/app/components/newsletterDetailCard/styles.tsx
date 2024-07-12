import { colors, typo } from '@/app/assets/style';
import styled, { css } from 'styled-components';

interface Props {
  hasSubCard?: boolean;
  hasArticleCard?: boolean;
  hasPodcast?: boolean;
  isfermentum?: boolean;
}
const Card = styled.div<Props>`
  max-width: 920px;
  width: 100%;
  border: 1px solid ${colors.lightGray};
  background-color: ${colors.white};
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  &:hover {
    box-shadow: 2px 2px 26px 0px rgba(0, 0, 0, 0.05);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    gap: 20px;
  }
  @media (max-width: 449px) {
    gap: 16px;
    padding: 12px;
  }
  ${(props) =>
    props.hasSubCard &&
    css`
      max-width: 444px;
      gap: 16px;

      @media (max-width: 768px) {
        gap: 12px;
      }
      @media (max-width: 449px) {
        padding: 12px;
        gap: 10px;
      }
    `}
  ${(props) =>
    props.hasArticleCard &&
    css`
      max-width: 920px;
      gap: 32px;
      flex-direction: row;
      align-items: center;
      @media (max-width: 768px) {
        gap: 24px;
      }
      @media (max-width: 449px) {
        padding: 12px;
        gap: 20px;
        flex-direction: column;
      }
    `}
`;
const Topdiv = styled.div<Props>`
  display: flex;
  .card-img {
    max-width: 888px;
    max-height: 590px;
    border-radius: 12px;
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
      border-radius: 8px;
    }
  }
  ${(props) =>
    props.hasSubCard &&
    css`
      background-color: ${colors.imagebackground};
      border-radius: 8px;
      .card-img {
        max-width: 412px;
        max-height: 272px;
        width: 100%;
        height: 100%;
      }
    `}
  ${(props) =>
    props.hasArticleCard &&
    css`
      background-color: ${colors.imagebackground};
      border-radius: 8px;
      .card-img {
        width: 187px;
        height: 125px;
        border-radius: 8px;
      }
      @media (max-width: 768px) {
        .card-img {
          width: 145px;
          height: 96px;
        }
      }
      @media (max-width: 449px) {
        .card-img {
          width: 100%;
          max-width: 393px;
          height: 100%;
        }
      }
    `}
      ${(props) =>
    props.hasPodcast &&
    css`
      background-color: ${colors.imagebackground};
      border-radius: 8px;
      .card-img {
        max-width: 412px;
        max-height: 400px;
        /* border-radius: 8px; */
        width: 100%;
        height: 100%;
      }
      @media (max-width: 768px) {
        .card-img {
          max-width: 337px;
          max-height: 315px;
        }
      }
      @media (max-width: 768px) {
        .card-img {
          max-width: -webkit-fill-available;
        }
      }
    `}
`;

const Bottomdiv = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 768px) {
    gap: 10px;
  }
  ${(props) =>
    props.hasSubCard &&
    css`
      gap: 8px;
      @media (max-width: 768px) {
        gap: 8px;
      }
    `}
  ${(props) =>
    props.hasArticleCard &&
    css`
      gap: 8px;
      @media (max-width: 768px) {
        gap: 8px;
      }
    `}
`;
const Title = styled.div<Props>`
  ${typo.heading4};
  color: ${colors.primary};
  @media (max-width: 768px) {
    ${typo.tabletH4}
  }
  @media (max-width: 449px) {
    ${typo.mobileH4}
  }
  ${(props) =>
    props.hasSubCard &&
    css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      ${typo.heading5};
      @media (max-width: 768px) {
        ${typo.tabletH5};
      }
      @media (max-width: 449px) {
        ${typo.mobileH5};
      }
    `}
  ${(props) =>
    props.hasArticleCard &&
    css`
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      ${typo.heading5};
      @media (max-width: 768px) {
        ${typo.tabletH5};
      }
      @media (max-width: 449px) {
        ${typo.mobileH5};
      }
    `}
       ${(props) =>
    props.hasPodcast &&
    css`
      display: block;
    `}
`;

const Details = styled.div<Props>`
  ${typo.body1};
  color: ${colors.darkGray};
  @media (max-width: 768px) {
    ${typo.mobilebody1}
  }
  ${(props) =>
    props.hasSubCard &&
    css`
      ${typo.body2};
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      @media (max-width: 768px) {
        ${typo.body3}
      }
      @media (max-width: 449px) {
        ${typo.mobilebody2}
      }
    `}
  ${(props) =>
    props.hasArticleCard &&
    css`
      ${typo.body1};
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      @media (max-width: 449px) {
        ${typo.mobilebody1}
        display: block;
      }
    `}
  ${(props) =>
    props.hasPodcast &&
    css`
      display: block;
      @media (max-width: 449px) {
        ${typo.body2}
        display: block;
      }
    `}
`;
const Div = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 8px;
  @media (max-width: 449px) {
    gap: 20px;
  }
  ${(props) =>
    props.hasArticleCard &&
    css`
      padding-bottom: 0;
    `}
  ${(props) =>
    props.isfermentum &&
    css`
      padding-bottom: 0;
    `}
`;
export { Card, Topdiv, Bottomdiv, Title, Details, Div };
