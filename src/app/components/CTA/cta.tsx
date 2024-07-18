'use client';

import { Container } from '@/app/styles/commonStyle';
import { Background, BottomContent, CtaBox, Heading, Label, TopContent } from './style';
import InputComponent from '../input/input';
import Button from '../button/button';

interface Props { }
const CTA: React.FC<Props> = (Props) => {
  return (
    <>
      <Container>
        <CtaBox>
          <Background />
          <TopContent>
            <Heading>Subscribe to receive financial tips and updates straight to your inbox.</Heading>
            <Label>Stay Updated with Our Financial Tips & Updates</Label>
          </TopContent>
          <BottomContent>
            <InputComponent placeholder={'Email Address'} labelCta={true} className='input' />
            <Button
              title='Subscribe'
              secondary
              iconName='right-icon'
              rightIcon
              iconSize='16'
              iconViewBox='16'
              className='btn'
              secondaryButtonLoadingColor={true}
            />
          </BottomContent>
        </CtaBox>
      </Container>
    </>
  );
};
export default CTA;
