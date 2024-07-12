'use client';
import React from 'react';
import { Bottomdiv, Cards, Description, Div, Main, Title, Topdiv } from './styles';
import { Container } from '@/app/styles/commonStyle';
import AdCreationServiceCard from '../adCreationServiceCard/adCreationServiceCard';
import { images } from '@/app/assets/images';

export default function AdCreationServiceSection() {
  return (
    <>
      <Div>
        <Container>
          <Main>
            <Topdiv>
              <Title>Why Choose Our Ad Creation Service</Title>
              <Description>
                we specialize in crafting high-impact advertisements that resonate with your audience and elevate your
                brand. Our expert team combines creativity, strategy, and cutting-edge technology to deliver ads that
                not only look stunning but also drive meaningful results.
              </Description>
            </Topdiv>
            <Bottomdiv>
              <AdCreationServiceCard
                title={'Custom Solutions'}
                detail={
                  "We recognize that every business is unique. That's why we don't believe in a one-size-fits-all approach.Instead, we take the time to understand your brand's vision, objectives, and target audience. We thendevelop customized solutions that align perfectly with your goals, ensuring that your message resonates withyour audience and achieves maximum impact."
                }
                imgSrc={images.serviceImg1.src}
              />
              <Cards>
                <AdCreationServiceCard
                  isFlex={true}
                  title={'Strategic Approach'}
                  detail={
                    "We understand that an ad is only as effective as the strategy behind it. That's why we develop ads that are not only aesthetically pleasing but also strategically aligned with your business goals. Our process involves in-depth market research and competitor analysis to create ads."
                  }
                  imgSrc={images.serviceImg2.src}
                />
                <AdCreationServiceCard
                  isFlex={true}
                  title={'Data-Driven Results'}
                  detail={
                    "In today's digital landscape, data is king. Our campaigns are designed to deliver measurable outcomes, ensuring you get the most out of your investment. We leverage the latest analytics tools to track performance, gather insights, and make data-driven decisions."
                  }
                  imgSrc={images.serviceImg3.src}
                />
              </Cards>
            </Bottomdiv>
          </Main>
        </Container>
      </Div>
    </>
  );
}
