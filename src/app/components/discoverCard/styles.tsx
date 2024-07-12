import { colors, typo } from '@/app/assets/style';
import styled, { css, DefaultTheme } from 'styled-components';

interface CardProps {
  enableHoverEffect?: boolean; // Define the prop
  isSelected?: boolean;
  isHomepageCard?: boolean;
}

const Card = styled.div`
  max-width: 416px;
  width: 100%;
  display: flex;
  padding: 16px;
  flex-direction: column;
  gap: 16px;
  border: 1px solid ${colors.lightGray};
  background-color: ${colors.white};
  border-radius: 12px;
  cursor: pointer;
  &:hover {
    box-shadow: 2px 2px 26px 0px rgba(0, 0, 0, 0.05);
    .hover-btn {
      display: flex;
    }
    .dots {
      display: flex;
    }
  }
  @media (max-width: 768px) {
    max-width: 350px;
    width: 100%;
    gap: 12px;
    padding: 12px;
  }
  @media (max-width: 449px) {
    max-width: -webkit-fill-available;
    width: max-content;
    gap: 12px;
  }
`;
const Cardheader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: space-between;
`;
const Leftdiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    border-radius: 4px;
    border: 1px solid ${colors.lightGray};
  }
  p {
    margin: 0;
    ${typo.heading5};
    color: ${colors.primary};
  }
  @media (max-width: 768px) {
    img {
      width: 32px;
      height: 32px;
    }
    p {
      ${typo.mobileH3}
    }
  }
  @media (max-width: 449px) {
    p {
      /* ${typo.mobileH5}; */
    }
  }
`;
const Rightdiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  img {
    box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.07);
    cursor: pointer;
    border-radius: 4px;
  }
  @media (max-width: 768px) {
    img {
      width: 32px;
      height: 32px;
    }
  }
`;
const Bottom = styled.div`
  position: relative;
`;
const Btndiv = styled.div`
  gap: 10px;
  align-items: center;
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
`;
const Saveicon = styled.div`
  cursor: pointer;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background-color: ${colors.primary};
  padding: 8px;
  display: none;
  &:hover {
    background-color: ${colors.darkBlack};
  }
  @media (max-width: 768px) {
    width: 26px;
    height: 26px;
    padding: 6px;
    border-radius: 4px;
    .svgicon {
      width: 14px;
      height: 14px;
    }
  }
  @media (max-width: 449px) {
    width: 26px;
    height: 26px;
    padding: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    .svgicon {
      width: 14px;
      height: 14px;
    }
  }
`;
const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid ${colors.lightGray};
`;
const CarouselInner = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;
const Slide = styled.div<CardProps>`
  min-width: 100%;
  box-sizing: border-box;

  img {
    display: flex;
  }
  .slider-img {
    width: 100%;
    border-radius: 8px;
    height: auto;
  }
  .detail-card {
    width: 100%;
  }
  ${(props) =>
    props.isHomepageCard &&
    css`
      height: 498px;
      @media (max-width: 1024px) {
        height: 362px;
      }
      @media (max-width: 768px) {
        height: 422px;
      }
      @media (max-width: 449px) {
        height: auto;
      }
    `}
`;

const NavigationDots = styled.div`
  text-align: center;
  position: absolute;
  bottom: 36px;
  width: 100%;
  display: none;
  justify-content: center;
  gap: 8px;
  @media (max-width: 449px) {
    display: flex;
  }
`;
const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;
const NavDot = styled.label<CardProps>`
  ${(props: CardProps & { theme: DefaultTheme }) =>
    props.enableHoverEffect &&
    css`
      display: inline-block;
      width: 10px;
      height: 10px;
      margin: 0;
      cursor: pointer;
      border-radius: 50%;
      background-color: ${props.isSelected ? `${colors.secondary}` : `${colors.white}`};
    `}
`;

const Arrow = styled.label<{ hidden: boolean }>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 2rem;
  user-select: none;
  z-index: 1;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease, visibility 0.3s ease;

  @media (max-width: 449px) {
    visibility: visible;
    opacity: 1;
  }
`;

const LeftArrow = styled(Arrow)<CardProps>`
  left: 12px;
  height: 32px;
  width: 32px;

  ${(props) =>
    props.enableHoverEffect &&
    css`
      ${Card}:hover & {
        visibility: visible;
        opacity: 1;
      }
    `}
`;

const RightArrow = styled(Arrow)<CardProps>`
  right: 12px;
  height: 32px;
  width: 32px;
  ${(props) =>
    props.enableHoverEffect &&
    css`
      ${Card}:hover & {
        visibility: visible;
        opacity: 1;
      }
    `}
`;
const Updatedtag = styled.div`
  border-radius: 8px;
  background-color: ${colors.primary};
  padding: 8px 12px;
  color: ${colors.white};
  ${typo.body4};
  /* font-weight: 600; */
  letter-spacing: 0.01em;
  @media (max-width: 768px) {
    padding: 5px 8px;
    ${typo.mobilebody4};
    /* font-weight: 600; */
    border-radius: 4px;
  }
`;
const Newtag = styled.div`
  border-radius: 8px;
  background-color: ${colors.secondary};
  padding: 8px 12px;
  color: ${colors.primary};
  ${typo.body4};
  letter-spacing: 0.01em;
  @media (max-width: 768px) {
    padding: 5px 8px;
    ${typo.mobilebody4};
    border-radius: 4px;
  }
`;

export {
  Card,
  Cardheader,
  Leftdiv,
  Rightdiv,
  Bottom,
  Btndiv,
  Saveicon,
  CarouselWrapper,
  CarouselInner,
  Slide,
  NavigationDots,
  StyledImage,
  NavDot,
  Arrow,
  LeftArrow,
  RightArrow,
  Updatedtag,
  Newtag,
};
