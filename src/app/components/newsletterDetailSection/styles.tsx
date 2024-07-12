import { colors, typo } from '@/app/assets/style';
import styled from 'styled-components';

const Main = styled.div`
  max-width: 920px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 120px;
  @media (max-width: 768px) {
    padding-bottom: 80px;
  }
  @media (max-width: 449px) {
    padding-bottom: 60px;
  }
`;
const Block = styled.div`
  padding: 60px 0;
  border-bottom: 1px solid ${colors.lightGray};
  display: flex;
  gap: 32px;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 40px 0;
    gap: 24px;
  }
  @media (max-width: 449px) {
    padding: 32px 0;
    gap: 24px;
  }
`;

const Topdiv = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  @media (max-width: 768px) {
    gap: 22px;
  }
  @media (max-width: 449px) {
    gap: 20px;
  }
`;

const Bottomdiv = styled.div`
  display: flex;
  gap: 32px;
  @media (max-width: 768px) {
    gap: 24px;
  }
  @media (max-width: 449px) {
    flex-direction: column;
    gap: 22px;
  }
`;
const Title = styled.div`
  ${typo.heading3};
  color: ${colors.primary};
  @media (max-width: 768px) {
    ${typo.tabletH3}
  }
  @media (max-width: 449px) {
    ${typo.mobileH3}
  }
`;
const Articleblock = styled.div`
  padding: 60px 0;
  border-bottom: 1px solid ${colors.lightGray};
  display: flex;
  gap: 24px;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 40px 0;
    gap: 22px;
  }
  @media (max-width: 449px) {
    padding: 32px 0;
    gap: 20px;
  }
`;
const Articles = styled.div`
  display: flex;
  gap: 22px;
  flex-direction: column;
  @media (max-width: 768px) {
    gap: 20px;
  }
`;
const Podcastblock = styled.div`
  padding: 60px 0 0;
  display: flex;
  gap: 24px;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 40px 0 0;
    gap: 22px;
  }
  @media (max-width: 449px) {
    padding: 32px 0 0;
    gap: 20px;
  }
`;
const Blocks = styled.div`
  display: flex;
  gap: 32px;
  @media (max-width: 768px) {
    gap: 24px;
  }
  @media (max-width: 449px) {
    flex-direction: column;
    gap: 24px;
  }
`;
const Div = styled.div`
  background-color: ${colors.offWhite};
`;
export { Main, Block, Topdiv, Bottomdiv, Title, Articleblock, Articles, Podcastblock, Blocks, Div };
