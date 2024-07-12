import { colors } from '@/app/assets/style';
import styled from 'styled-components';

const Main = styled.div`
  padding-top: 72px;
  background-color: ${colors.bgColor};
  @media (max-width: 768px) {
    padding-top: 32px;
  }
  @media (max-width: 449px) {
    padding-top: 24px;
  }
`;

export { Main };
