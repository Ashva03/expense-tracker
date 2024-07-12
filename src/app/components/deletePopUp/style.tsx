import { colors, typo } from '@/app/assets/style';
import styled from 'styled-components';

const MainDiv = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  padding: 40px;
  gap: 32px;
  border-radius: 24px;
  background-color: ${colors.white};
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.02);
  
  align-items: center;
  @media (max-width: 768px) {
    max-width: 380px;
    gap: 24px;
    padding: 24px;
  }
  @media (max-width: 449px) {
    max-width: 350px;
    border-radius: 12px;
  }
`;
const Icon = styled.div`
  width: 80px;
  height: 80px;
  .delete-icon {
    width: 80px;
    height: 80px;
  }
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    .delete-icon {
      width: 60px;
      height: 60px;
    }
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  @media (max-width: 768px) {
    gap: 16px;
  }
  @media (max-width: 449px) {
    gap: 8px;
  }
`;
const Title = styled.div`
  ${typo.heading4}
  color: ${colors.primary};
  @media (max-width: 768px) {
    ${typo.tabletH4}
  }
  @media (max-width: 449px) {
    ${typo.mobileH4}
  }
`;
const Description = styled.div`
  ${typo.body2}
  color: ${colors.darkGray};
  text-align: center;
`;
const ButtonSection = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  @media (max-width: 768px) {
    gap: 16px;
  }
  @media (max-width: 449px) {
    gap: 12px;
  }
  @media (max-width: 320px) {
    flex-wrap: wrap;
  }
  .delete {
    background-color: ${colors.danger};
    color: ${colors.white};
  }
`;
const Div = styled.div`
  width: 100%;
`;
export { MainDiv, Icon, Content, Title, Description, ButtonSection, Div };
