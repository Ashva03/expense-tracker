import { colors } from '@/app/assets/style';
import styled, { css } from 'styled-components';

interface Props {
  isSuccessfullPage?: boolean;
}

const MainWrapper = styled.div`
  display: flex;
  background-color: ${colors.offWhite};
  @media only screen and (max-width: 768px) {
    background-color: ${colors.white};
  }
`;

const Main = styled.div`
  display: flex;
  gap: 80px;
  @media only screen and (max-width: 1024px) {
    gap: 20px;
  }
  @media only screen and (max-width: 768px) {
    gap: 0;
  }
`;

const DIV = styled.div<Props>`
  width: 100%;
  padding: 64px 0;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  @media only screen and (max-width: 768px) {
    align-items: unset;
    padding: 104px 0 0;
  }
  @media only screen and (max-width: 449px) {
    padding: 104px 0 0;
  }
  ${(props) =>
    props.isSuccessfullPage &&
    css`
      @media only screen and (max-width: 768px) {
        align-items: center;
        padding: 0;
      }
    `}
`;

const Slider = styled.div`
  max-width: 604px;
  width: 100%;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 1200px) {
    max-width: 394px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Gradient = styled.div`
  .top-Gratdient {
    position: absolute;
    background: linear-gradient(180deg, #f9f9f9 10%, rgba(249, 249, 249, 0) 100%);
    width: 100%;
    height: 180px;
    top: 0;
  }
  .bottom-Gratdient {
    position: absolute;
    background: linear-gradient(180deg, rgba(249, 249, 249, 0) 0%, #f9f9f9 90%);
    width: 100%;
    height: 180px;
    bottom: 0;
  }
`;

export { MainWrapper, Slider, Gradient, Main, DIV };
