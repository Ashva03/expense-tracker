'use client';
import React from 'react';
import { Bottomdiv, Card, Details, Div, Title, Topdiv } from './styles';
import { images } from '@/app/assets/images';
import Button from '../button/button';

interface Props {
  isButton?: boolean;
  hasSubCard?: boolean;
  title?: string;
  details?: string;
  imgSrc?: string;
  hasArticleCard?: boolean;
  hasPodcast?: boolean;
  isfermentum?: boolean;
}
export default function NewsletterDetailCard(props: Props) {
  const {
    isButton = false,
    hasSubCard = false,
    title,
    details,
    imgSrc,
    hasArticleCard = false,
    hasPodcast = false,
    isfermentum,
  } = props;
  return (
    <>
      <Card hasSubCard={hasSubCard} hasArticleCard={hasArticleCard}>
        <Topdiv hasSubCard={hasSubCard} hasArticleCard={hasArticleCard} hasPodcast={hasPodcast}>
          <img src={imgSrc} alt='img' width={888} height={590} className='card-img' />
        </Topdiv>
        <Div hasArticleCard={hasArticleCard} isfermentum={isfermentum}>
          <Bottomdiv hasSubCard={hasSubCard} hasArticleCard={hasArticleCard}>
            <Title hasSubCard={hasSubCard} hasArticleCard={hasArticleCard} hasPodcast={hasPodcast}>
              {title}
            </Title>
            <Details hasSubCard={hasSubCard} hasArticleCard={hasArticleCard} hasPodcast={hasPodcast}>
              {details}
            </Details>
          </Bottomdiv>
          {isButton && (
            <Button title='Try Free' rightIcon iconName='right-icon' iconSize='16' iconViewBox='0 0 16 16' secondary />
          )}
        </Div>
      </Card>
    </>
  );
}
