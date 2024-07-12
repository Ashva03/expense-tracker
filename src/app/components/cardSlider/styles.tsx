import styled, { css } from 'styled-components';
interface Props {
  isLibrary?: boolean;
}
const Column = styled.ul`
  grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));
  grid-template-rows: auto;
  display: grid;
  gap: 24px;
  list-style: none;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(272px, 1fr));
  }
  @media (max-width: 449px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;
const Div = styled.div`
  position: relative;
  @media (max-width: 449px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;
const Emptystatediv = styled.div`
  padding: 148px 0;
  @media (max-width: 768px) {
    padding: 115px 0;
  }
  @media (max-width: 449px) {
    padding: 80px 0;
  }
`;

const Gradient = styled.div<Props>`
  pointer-events: none;
  .bottom-Gratdient {
    position: absolute;
    background: linear-gradient(180deg, rgba(249, 249, 249, 0) 0%, #f9f9f9 76.74%);
    width: 100%;
    height: 400px;
    bottom: 0;
  }
  ${(props: Props) =>
    props.isLibrary &&
    css`
      display: none;
    `}
`;
export { Column, Div, Emptystatediv, Gradient };
