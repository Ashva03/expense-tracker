'use client';
import React from 'react';
import { Box, Box2, Description, Detail, Div, Leftdiv, Line, Maindiv, Rightdiv, Text, Title, Top } from './styles';
import { Container } from '@/app/styles/commonStyle';
import Button from '../button/button';

export default function SuccessService() {
  return (
    <>
      <Maindiv>
        <Container>
          <Div>
            <Leftdiv>
              <Top>
                <Title>Services Tailored to Your Success</Title>
                <Detail>
                  Experience the difference of tailored services designed to propel you toward success, with solutions
                  as unique as your ambitions.
                </Detail>
              </Top>
              <Button
                title='Book Your Meeting'
                rightIcon
                secondary
                iconName='right-icon'
                iconSize='16'
                iconViewBox='0 0 16 16'
              />
            </Leftdiv>
            <Rightdiv>
              <Box>
                <Text>Weekly Updates</Text>
                <Description>
                  To ensure our users always have access to the latest trends and innovations in digital advertising, we
                  update our campaign gallery weekly.
                </Description>
              </Box>
              <Line />
              <Box2>
                <Text>Newsletter</Text>
                <Description>
                  Our newsletter page, inspired by "Today in Design," features a collection of our weekly email
                  campaigns.
                </Description>
              </Box2>
            </Rightdiv>
          </Div>
        </Container>
      </Maindiv>
    </>
  );
}
