import { colors, typo } from '@/app/assets/style';
import styled, { css } from 'styled-components';

interface Props {
  isFlex?: boolean;
}
const Card = styled.div<Props>`
  max-width: 1296px;
  width: 100%;
  border: 1px solid ${colors.lightGray};
  background-color: ${colors.white};
  border-radius: 24px;
  padding: 59px 60px;
  display: flex;
  gap: 60px;
  justify-content: space-between;
  align-items: center;
  ${(props: Props) =>
    props.isFlex &&
    css`
      flex-direction: column;
      @media (max-width: 768px) {
        flex-direction: row;
        &:nth-child(odd) {
          flex-direction: row-reverse;
        }
      }
      @media (max-width: 449px) {
        flex-direction: column;
        &:nth-child(odd) {
          flex-direction: column-reverse;
        }
      }
    `}
  @media (max-width: 768px) {
    padding: 23px 24px;
    gap: 32px;
  }
  @media (max-width: 449px) {
    padding: 20px;
    gap: 20px;
    flex-direction: column-reverse;
  }
`;
const Leftdiv = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 540px;
  width: 100%;
  ${(props: Props) =>
    props.isFlex &&
    css`
      gap: 24px;
      max-width: 512px;
      @media (max-width: 768px) {
        gap: 16px;
        max-width: 348px;
      }
    `}
  @media (max-width: 768px) {
    max-width: 348px;
  }
  @media (max-width: 449px) {
    gap: 12px;
  }
`;

const Rightdiv = styled.div<Props>`
  display: flex;
  .service-img {
    max-width: 576px;
    width: 100%;
    max-height: 248px;
    height: 100%;
    @media (max-width: 768px) {
      max-width: 300px;
      max-height: 129px;
    }
  }
  ${(props: Props) =>
    props.isFlex &&
    css`
      .service-img {
        max-width: 512px;
        width: 100%;
        max-height: 272px;
        height: 100%;
      }
    `}
`;

const Title = styled.div`
  ${typo.heading3};
  color: ${colors.primary};
  @media (max-width: 768px) {
    ${typo.tabletH4}
  }
  @media (max-width: 449px) {
    ${typo.mobileH3}
  }
`;

const Details = styled.div`
  ${typo.body1};
  color: ${colors.darkGray};
  @media (max-width: 768px) {
    ${typo.mobilebody1}
  }
`;

export { Card, Leftdiv, Rightdiv, Title, Details };
