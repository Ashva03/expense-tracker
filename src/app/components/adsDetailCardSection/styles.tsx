import { colors } from '@/app/assets/style';
import styled from 'styled-components';

const Div = styled.div`
  background-color: ${colors.offWhite};
  padding: 120px 0 0 0;
  @media (max-width: 768px) {
    padding: 80px 0;
  }
  @media (max-width: 449px) {
    padding: 60px 0 60px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: 449px) {
    gap: 24px;
  }
`;
const Column = styled.ul`
  // grid-template-columns: repeat(auto-fill, minmax(312px, 1fr));
  // grid-template-rows: auto;
  // display: grid;
  // gap: 24px;
  list-style: none;
  position: relative;
  height: 4000px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(298px, 1fr));
  }
  @media (max-width: 449px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;
const Gradient = styled.div`
  pointer-events: none;
  .bottom-Gratdient {
    position: absolute;
    background: linear-gradient(180deg, rgba(249, 249, 249, 0) 0%, #f9f9f9 76.74%);
    width: 100%;
    height: 400px;
    bottom: 0;
  }
`;
const Div1 = styled.div`
  position: relative;
  .overlay {
    position: absolute;
    bottom: -31px;
    width: 100%;
  }
  @media (max-width: 768px) {
    .overlay {
      bottom: -10px;
    }
  }

  @media (max-width: 449px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    .overlay {
      bottom: -60px;
      height: 400px;
    }
  }
`;
export { Div, Content, Column, Div1, Gradient };
