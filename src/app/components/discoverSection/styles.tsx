import { colors } from '@/app/assets/style';
import styled, { css } from 'styled-components';

interface Props {
  isEmptyState?: boolean;
  isLibrary?: boolean;
}

const Main = styled.div<Props>`
  background-color: ${colors.offWhite};
  padding: 120px 0 80px;
  @media (max-width: 768px) {
    padding: 80px 0;
  }
  @media (max-width: 449px) {
    padding: 60px 0 60px;
  }
  ${(props: Props) =>
    props.isEmptyState &&
    css`
      padding-bottom: 0;
    `}
    ${(props: Props) =>
    props.isLibrary &&
    css`
   padding: 164px 0 120px;
   @media (max-width: 768px) {
    padding:128px 0px 80px ;
  }
  @media (max-width: 449px) {
    padding: 104px 0 60px;
  }
    `}
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 449px) {
    gap: 24px;
  }
`;
export { Main, Content };
