import { colors, typo } from '@/app/assets/style';
import styled from 'styled-components';

const Maindiv = styled.div`
  padding: 120px 0 0;
  background-color: ${colors.offWhite};
  @media (max-width: 768px) {
    padding: 80px 0 0;
  }
  @media (max-width: 449px) {
    padding: 60px 0 0;
  }
`;

const Div = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 22px;
  }
`;
const Leftdiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 42px 72px 42px 0;
  border-right: 1px solid ${colors.lightGray};
  @media (max-width: 768px) {
    gap: 32px;
    border-right: none;
    width: 100%;
    padding: 0;
  }
  @media (max-width: 449px) {
    gap: 24px;
  }
`;

const Rightdiv = styled.div`
  width: 50%;
  padding: 32px 0 32px 72px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    padding: 0;
    gap: 0;
  }
  @media (max-width: 449px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 768px) {
    gap: 16px;
  }
  @media (max-width: 449px) {
    gap: 12px;
  }
`;

const Title = styled.div`
  ${typo.heading2};
  color: ${colors.primary};
  @media (max-width: 768px) {
    ${typo.tabletH2};
  }
  @media (max-width: 449px) {
    ${typo.mobileH2}
  }
`;

const Detail = styled.div`
  ${typo.body1};
  color: ${colors.darkGray};
  @media (max-width: 768px) {
    ${typo.mobilebody1}
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 768px) {
    padding: 24px 11px 24px 0;
    gap: 12px;
    border-right: 1px solid ${colors.lightGray};
    width: 50%;
  }
  @media (max-width: 449px) {
    border-bottom: 1px solid ${colors.lightGray};
    border-right: none;
    width: 100%;
    padding: 20px 0;
  }
`;

const Line = styled.div`
  border-bottom: 1px solid ${colors.lightGray};
  @media (max-width: 768px) {
    border-bottom: none;
    display: none;
  }
`;

const Text = styled.div`
  ${typo.heading4};
  color: ${colors.primary};
  @media (max-width: 768px) {
    ${typo.tabletH4};
  }
  @media (max-width: 449px) {
    ${typo.mobileH4};
  }
`;

const Description = styled.div`
  ${typo.body1};
  color: ${colors.darkGray};
  @media (max-width: 768px) {
    ${typo.mobilebody1}
  }
`;
const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (max-width: 768px) {
    padding: 24px 0 24px 21px;
    gap: 12px;
    width: 50%;
  }
  @media (max-width: 449px) {
    width: 100%;
    padding: 20px 0;
  }
`;
export { Maindiv, Div, Leftdiv, Rightdiv, Top, Title, Detail, Box, Line, Text, Description, Box2 };
