import { colors, typo } from '@/app/assets/style';
import styled from 'styled-components';

const Maindiv = styled.div`
  max-width: 717px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 120px 0;
  @media (max-width: 768px) {
    padding: 60px 0;
    align-items: center;
    max-width: 728px;
  }
  @media (max-width: 449px) {
    padding: 60px 0 40px;
  }
`;
const Topcontent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 768px) {
    align-items: center;
    gap: 16px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (max-width: 449px) {
    align-items: center;
    gap: 16px;
  }
`;

const Heading = styled.h1`
  ${typo.heading1};
  color: ${colors.primary};
  @media (max-width: 768px) {
    ${typo.tabletH1};
    text-align: center;
  }
  @media (max-width: 449px) {
    ${typo.heading3};
  }
`;
const Details = styled.p`
  margin: 0;
  ${typo.body1};
  color: ${colors.darkGray};
  @media (max-width: 768px) {
    ${typo.body2};
    text-align: center;
  }
`;
export { Maindiv, Topcontent, Content, Heading, Details };
