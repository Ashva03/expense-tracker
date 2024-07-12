'use client';

import { Container } from '@/app/styles/commonStyle';
import { Background, BottomContent, CtaBox, Heading, Label, TopContent } from './style';
import InputComponent from '../input/input';
import Button from '../button/button';

interface Props {}
const CTA: React.FC<Props> = (Props) => {
  const { ...props } = Props;
  return (
    <>
      <Container>
        <CtaBox>
          <Background />
          <TopContent>
            <Heading>Subscribe to our newsletter to stay in touch with the latest.</Heading>
            <Label>Subscribe to our newsletter to stay in touch with the latest.</Label>
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
