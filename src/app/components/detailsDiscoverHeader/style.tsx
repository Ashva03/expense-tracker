import { colors, typo } from '@/app/assets/style';
import styled from 'styled-components';

const DiscoverDiv = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
`;
const Content = styled.div`
width: 100%;
`;
const Title = styled.div`
  ${typo.heading4}
  color: ${colors.primary};
  @media (max-width: 768px) {
    ${typo.tabletH2}
  }
  @media (max-width: 449px) {
    ${typo.mobileH2}
  }
`;

const SubTitle = styled.div`
  ${typo.body2}
  color: ${colors.darkGray};
  margin-top: 8px;
  @media (max-width: 768px) {
    ${typo.mobilebody2}
  }
  @media (max-width: 449px) {
    ${typo.mobilebody2}
  }
`;

const Filterdiv = styled.div`
  @media (max-width: 449px) {
    width: 100%;
  }
`;

export { DiscoverDiv, Title, Filterdiv, SubTitle, Content };
