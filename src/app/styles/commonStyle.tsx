import styled, { css } from 'styled-components';
interface Props {
  isPadding?: boolean;
}
const Container = styled.div<Props>`
  width: 100%;
  max-width: 1336px;
  padding: 0 20px;
  margin: 0 auto;
  ${(props: Props) =>
    props.isPadding &&
    css`
      padding: 0;
    `}
`;
export { Container };
