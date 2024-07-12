'use client';
import React from 'react';
import { Bottomdiv, Block, Main, Title, Topdiv, Articleblock, Articles, Podcastblock, Blocks, Div } from './styles';
import NewsletterDetailCard from '../newsletterDetailCard/newsletterDetailCard';
import { images } from '@/app/assets/images';
import { Container } from '@/app/styles/commonStyle';

export default function NewsletterDetailSection() {
  return (
    <>
      <Div>
        <Container>
          <Main>
            <Block>
              <Topdiv>
                <Title>News</Title>
                <NewsletterDetailCard
                  imgSrc={images.newsletterDetailCardImg.src}
                  title='Maecenas diam elit morbi elit tempor risus sed.'
                  details='Lectus laoreet cursus morbi hendrerit volutpat pretium adipiscing. Ut a turpis nisl ornare. Dictum duis mi
              eu eros dolor. Sed mattis in tortor morbi et ipsum amet dui. Orci sed at tellus risus id magnis enim sit.
              Luctus convallis tellus nec nibh. Dignissim risus quam mattis magna semper placerat aliquam risus
              pulvinar.'
                />
              </Topdiv>
              <Bottomdiv>
                <NewsletterDetailCard
                  imgSrc={images.newsletterDetailCardImg.src}
                  hasSubCard={true}
                  title='Sociis orci quam sem ultricies gravida euismod. Adipiscing integer dictum.'
                  details='Facilisi purus eu eget mi aenean sociis sit phasellus. Commodo a aliquet auctor arcu. Amet et tellus enim quisque.'
                />
                <NewsletterDetailCard
                  imgSrc={images.newsletterDetailCardImg.src}
                  hasSubCard={true}
                  title='Sociis orci quam sem ultricies gravida euismod. Adipiscing integer dictum.'
                  details='Facilisi purus eu eget mi aenean sociis sit phasellus. Commodo a aliquet auctor arcu. Amet et tellus enim quisque.'
                />
              </Bottomdiv>
            </Block>
            <Block>
              <Topdiv>
                <Title>Fermentum vitae</Title>
                <NewsletterDetailCard
                  imgSrc={images.newsletterDetailImg.src}
                  title='Egestas vel vitae tortor sagittis. Nullam vitae etiam etiam dignissim aliquam sed aliquet viverra quam. '
                  details='Pretium risus elit vitae adipiscing. Vitae in nulla integer lorem aliquet etiam. Dapibus nunc aliquet quam ultricies purus accumsan. Diam neque odio ornare vel iaculis tempor suspendisse sed integer. Maecenas eu condimentum tincidunt accumsan viverra porta eleifend et dictum. '
                  isButton={true}
                  isfermentum
                />
              </Topdiv>
            </Block>
            <Articleblock>
              <Title>Articles</Title>
              <Articles>
                <NewsletterDetailCard
                  imgSrc={images.newsletterDetailCardImg.src}
                  hasArticleCard={true}
                  title='Vivamus viverra fermentum diam vehicula varius id dui vitae sed. '
                  details='Ac hendrerit consectetur cras nulla volutpat diam. Viverra lorem posuere odio etiam aliquam arcu. Cursus tempus porta et lectus. Interdum '
                />
                <NewsletterDetailCard
                  imgSrc={images.newsletterDetailCardImg.src}
                  hasArticleCard={true}
                  title='Vivamus viverra fermentum diam vehicula varius id dui vitae sed. '
                  details='Ac hendrerit consectetur cras nulla volutpat diam. Viverra lorem posuere odio etiam aliquam arcu. Cursus tempus porta et lectus. Interdum '
                />
                <NewsletterDetailCard
                  imgSrc={images.newsletterDetailCardImg.src}
                  hasArticleCard={true}
                  title='Vivamus viverra fermentum diam vehicula varius id dui vitae sed. '
                  details='Ac hendrerit consectetur cras nulla volutpat diam. Viverra lorem posuere odio etiam aliquam arcu. Cursus tempus porta et lectus. Interdum '
                />
              </Articles>
            </Articleblock>
            <Podcastblock>
              <Title>Podcasts</Title>
              <Blocks>
                <NewsletterDetailCard
                  imgSrc={images.podcastImg.src}
                  hasSubCard={true}
                  hasPodcast={true}
                  title='Aenean ipsum purus quis phasellus. Mattis tincidunt arcu nam velit. '
                  details='Scelerisque dui tellus ac ac habitasse. Hac sagittis sit vulputate odio mattis orci etiam ut. Tellus adipiscing.'
                />
                <NewsletterDetailCard
                  imgSrc={images.podcastImg.src}
                  hasSubCard={true}
                  hasPodcast={true}
                  title='Consectetur eleifend enim eu morbi. Morbi fames quis laoreet nec quis. '
                  details='Faucibus nunc congue tincidunt dictum habitant. Sit vel tincidunt arcu eu morbi ornare. Ut quis molestie.'
                />
              </Blocks>
            </Podcastblock>
          </Main>
        </Container>
      </Div>
    </>
  );
}
