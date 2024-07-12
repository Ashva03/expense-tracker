import { images } from '@/app/assets/images';
import { colors, typo } from '@/app/assets/style';
import styled from 'styled-components';

const CtaBox = styled.div`
  display: flex;
  flex-direction: column;
  border: transparent;
  border-radius: 12px;
  background-color: ${colors.primary};
  gap: 40px;
  padding: 72px 24px;
  position: relative;
  z-index: 1;
  @media (max-width: 768px) {
    padding: 32px;
    gap: 40px;
  }
  @media (max-width: 449px) {
    gap: 32px;
  }
`;
const TopContent = styled.div`
  margin: 0 auto;
  max-width: 860px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  @media (max-width: 449px) {
    gap: 12px;
  }
`;
const Heading = styled.div`
  ${typo.heading2}
  text-align: center;
  color: white;
  @media (max-width: 768px) {
    ${typo.tabletH2};
  }
  @media (max-width: 449px) {
    ${typo.mobileH2};
  }
`;
const Label = styled.p`
  ${typo.body1}
  color: white;
  @media (max-width: 768px) {
    ${typo.body2};
    text-align: center;
  }
`;
const BottomContent = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  z-index: 1;
  .btn {
    padding: 11px 32px;
  }
  .input {
    width: 316px;
  }
  @media (max-width: 669px) {
    flex-direction: column;
    gap: 12px;
    .input {
      width: 100%;
    }
    .btn {
      padding: 9px 31px;
      width: 100%;
    }
  }
  @media (max-width: 449px) {
    flex-direction: column;
    gap: 12px;
    .input {
      width: 100%;
    }
    .btn {
      padding: 9px 31px;
      width: 100%;
    }
  }
`;
const Background = styled.div`
  background-image: url(${images.ctaBackground.src});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  @media (max-width: 768px) {
    background-size: cover;
    right: 0;
  }
`;
export { CtaBox, TopContent, Heading, Label, BottomContent, Background };
