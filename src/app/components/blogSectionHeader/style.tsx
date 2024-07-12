import { colors, typo } from '@/app/assets/style';
import styled, { css } from 'styled-components';
interface Props {
  isactive?: boolean;
}
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 768px) {
    gap: 22px;
  }
`;
const BlogHeader = styled.div`
  display: flex;
  gap: 24px;
  &.newsletter-detail {
    align-items: center;
    justify-content: center;
  }
`;
const Heading = styled.div`
  ${typo.heading2}
  color: ${colors.primary};
  @media (max-width: 768px) {
    ${typo.tabletH2}
  }
  @media (max-width: 449px) {
    ${typo.mobileH2}
  }
`;
const TabDiv = styled.div`
  display: flex;
  gap: 22px;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 749px) {

    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
  @media (max-width: 449px) {
    flex-direction: column;
    gap: 16px;
    align-items: flex-start;
  }
`;
const Tab = styled.div`
  display: flex;
  gap: 8px;
  @media (max-width: 375px) {
    flex-wrap: wrap;
  }
`;
const Options = styled.div``;
const LinkOption = styled.div<Props>`
  border-radius: 8px;
  padding: 10px 16px;
  ${typo.btntext};
  color: ${colors.primary};

  ${(props) =>
    props.isactive &&
    css`
      background-color: ${colors.primary};
      color: ${colors.white};
    `};
  @media (max-width: 449px) {
    padding: 10px 12px;
  }
`;
export { Top, BlogHeader, Heading, TabDiv, Tab, Options, LinkOption };
