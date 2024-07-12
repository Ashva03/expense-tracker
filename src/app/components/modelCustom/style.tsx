import { colors } from '@/app/assets/style';
import styled, { css } from 'styled-components';
interface Props {
  isOpen?: boolean;
  isWidth?: number;
}

const Maindiv = styled.div`
  /* margin: 20px; */
`;

const ModalOverlay = styled.div<Props>`
  display: ${(isOpen: Props) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div<Props>`
  background-color: ${colors.white};
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 2px 12px;
  position: fixed;
  top: 50%;
  left: 50%;
  /* transform: translate(-50%, -50%); */
  transition: all 0.3s;
  z-index: 999;

  ${(props: Props) =>
    props.isWidth &&
    css`
      max-width: 480px;
      width: 100%;
      @media only screen and (max-width: 768px) {
        max-width: 380px;
        width: 100%;
      }
      @media only screen and (max-width: 449px) {
        max-width: 350px;
        width: 100%;
      }
      @media only screen and (max-width: 375px) {
        max-width: 335px;
        width: 100%;
      }
      @media only screen and (max-width: 320px) {
        max-width: 280px;
        width: 100%;
      }
    `}
`;

export { ModalOverlay, ModalContent, Maindiv };
