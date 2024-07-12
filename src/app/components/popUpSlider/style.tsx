import { colors, typo } from '@/app/assets/style';
import styled from 'styled-components';
const PopModalDiv = styled.div`
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 40px;
  border-radius: 24px;
  background-color: ${colors.offWhite};
  position: relative;
  :focus-visible {
    outline: none;
  }
  @media (max-width: 768px) {
    max-width: calc(95vw - 1px);
    padding: 32px 0;
    gap: 32px;
  }
  @media (max-width: 449px) {
    max-width: calc(90vw);
    padding: 20px 12px;
  }
`;
const Top = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0 0 0 32px;
  }
  @media (max-width: 449px) {
    padding: 0 8px;
  }
`;
const Profile = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  @media (max-width: 768px) {
    gap: 8px;
  }
`;
const CloseIcon = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 8px;
  &:hover {
    border: 1px solid ${colors.lightGray};
    @media (max-width: 449px) {
      border: none;
    }
  }
  @media (max-width: 449px) {
    top: 8px;
    right: 8px;
  }
`;
const Arrow = styled.div`
  color: ${colors.darkGray};
  border-radius: 10px;
  width: 40px;
  height: 40px;
`;
const Logo = styled.div`
  width: 60px;
  height: 60px;
  .img {
    border: 1px solid ${colors.lightGray};
    border-radius: 12px;
    width: 60px;
    height: 60px;
  }
  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    .img {
      border-radius: 8px;
      width: 48px;
      height: 48px;
    }
  }
`;
const Frame = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (max-width: 768px) {
    gap: 2px;
  }
`;
const Title = styled.div`
  ${typo.heading5}
  color: ${colors.primary};
  @media (max-width: 768px) {
    ${typo.tabletH5}
  }
`;
const Description = styled.div`
  ${typo.body3}
  color: ${colors.darkGray};
  @media (max-width: 768px) {
    ${typo.mobilebody3};
  }
`;
const PopSlide = styled.div`
  max-width: 1216px;
  position: relative;
  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    cursor: pointer;
    background-color: ${colors.darkGray};
    justify-content: center;
    align-items: center;
    display: flex !important;
    &:hover {
      background-color: ${colors.primary};
    }
  }
  .icon {
    transform: rotate(180deg);
  }
  .slick-prev {
    z-index: 1;
    left: 0;
  }
  .slick-next {
    right: 0px;
    z-index: 1;
  }
  .slick-prev:before,
  .slick-next:before {
    color: ${colors.darkGray};
    border-radius: 12px;
    content: '';
  }
  .slick-list {
    margin: 0 -12px;
    padding-right: 100px; /* Add padding to the right side to create cut-off effect */
    @media (max-width: 768px) {
      overflow: hidden;
      margin: 0;
      padding-right: 0; /* Adjust padding for smaller screens */
    }
  }
  .slick-slide > div {
    margin: 0 12px;

    @media (max-width: 768px) {
      padding: 0 12px;
      margin-right: -32px;
      margin-left: 32px;
    }
    @media (max-width: 449px) {
      margin: 0 8px;
      padding: 0;
    }
  }
  .slick-slide:first-child > div {
    @media (max-width: 768px) {
      padding: 0 12px 0 0;
    }
    @media (max-width: 449px) {
      padding: 0;
    }
  }
  .slick-slide:last-child > div {
    @media (max-width: 768px) {
      margin-right: 0px;
      margin-left: 20px;
    }
    @media (max-width: 449px) {
      margin-right: 1px;
      margin-left: 0px;
    }
  }

  .slick-prev:hover,
  .slick-next:hover {
  }
  .lazy {
    border: 1px solid ${colors.lightGray};
    border-radius: 12px;
  }
  .slick-initialized .slick-slide {
  }
  .leftGradient,
  .rightGradient {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 180px;
    z-index: 1;
    pointer-events: none;
    transition: opacity 0.1s ease-in-out;
    opacity: 0; /* Initially hidden */
  }

  .leftGradient {
    left: -38px;
    background: linear-gradient(90deg, #f9f9f9 23.26%, rgba(249, 249, 249, 0) 100%);
  }

  .rightGradient {
    right: -38px;
    background: linear-gradient(90deg, rgba(249, 249, 249, 0) 0%, #f9f9f9 76.74%);
  }

  .visible {
    opacity: 1; /* When visible */
  }
  .slick-prev.hidden,
  .slick-next.hidden {
    display: none !important;
  }
  .leftGradient.hidden,
  .rightGradient.hidden {
    display: none !important;
  }
  @media (max-width: 768px) {
    /* width: unset; */
    .leftGradient {
      display: none;
    }
    .rightGradient {
      display: none;
    }
  }

  .slick-dots {
    display: flex !important;
    gap: 8px;
    bottom: 0;
    align-items: center;
    justify-content: center;
    filter: drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.12));
    position: relative;
    margin-top: 20px;
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: ${colors.secondary};
    font-size: 10px;
    line-height: 10px;
    width: 10px;
    height: 10px;
  }
  .slick-dots li {
    width: 9px;
    height: 9px;
    margin: 0;
  }
  .slick-dots li button {
    width: 10px;
    height: 10px;
    padding: 0px;
  }
  .slick-dots li button:before {
    opacity: 1;
    color: ${colors.white};
    font-size: 10px;
    line-height: 10px;
    width: 10px;
    height: 10px;
  }
`;

const SlideItem = styled.div`
  padding: 0;
  box-sizing: border-box;
  img {
    width: 100%;
    border-radius: 12px;
  }
`;
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;
export {
  PopSlide,
  PopModalDiv,
  Top,
  Profile,
  CloseIcon,
  Logo,
  Frame,
  Title,
  Description,
  Arrow,
  SlideItem,
  ModalWrapper,
};
