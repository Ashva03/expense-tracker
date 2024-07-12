import { colors, typo } from '@/app/assets/style';
import styled from 'styled-components';

const Div = styled.div`
  background-color: ${colors.offWhite};
  padding: 120px 0;
  @media (max-width: 768px) {
    padding: 80px 0;
  }
  @media (max-width: 449px) {
    padding: 60px 0;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 72px;
  margin: 0 auto;
  @media (max-width: 768px) {
    gap: 40px;
  }
  @media (max-width: 449px) {
    gap: 32px;
  }
`;
const Topdiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 836px;
  width: 100%;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    gap: 16px;
  }
  @media (max-width: 449px) {
    gap: 12px;
  }
`;
const Bottomdiv = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
  @media (max-width: 449px) {
    gap: 24px;
  }
`;
const Title = styled.div`
  ${typo.heading2};
  color: ${colors.primary};
  text-align: center;
  @media (max-width: 768px) {
    ${typo.tabletH2};
  }
  @media (max-width: 449px) {
    ${typo.mobileH2}
  }
`;
const Description = styled.div`
  ${typo.body1};
  color: ${colors.darkGray};
  text-align: center;
  @media (max-width: 768px) {
    ${typo.mobilebody1};
  }
  @media (max-width: 449px) {
    ${typo.mobilebody1}
  }
`;
const Cards = styled.div`
  display: flex;
  gap: 32px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export { Div, Main, Topdiv, Bottomdiv, Title, Description, Cards };
