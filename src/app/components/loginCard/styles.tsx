import { colors, typo } from '@/app/assets/style';
import styled, { css } from 'styled-components';

interface Props {
  login?: boolean;
}

const Maindiv = styled.div<Props>`
  background-color: ${colors.offWhite};
  padding: 32px 0 120px;
  width: 799px;
  ${(props) =>
    props.login &&
    css`
      padding: 0;
      @media (max-width: 768px) {
        background-color: ${colors.white};
      }
    `}
  @media (max-width: 768px) {
    padding: 0 0 80px;
  }
  @media (max-width: 449px) {
    padding: 16px 0 60px;
  }
`;
const Card = styled.form<Props>`
  max-width: 620px;
  width: 100%;
  border-radius: 24px;
  background-color: ${colors.white};
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.02);
  margin: 0 auto;
  ${(props) =>
    props.login &&
    css`
      padding: 0;
      @media (max-width: 1024px) {
        max-width: 540px;
      }
      @media (max-width: 768px) {
        box-shadow: none;
        max-width: 520px !important;
      }
    `}
  @media (max-width: 768px) {
    max-width: 540px;
  }
  @media (max-width: 449px) {
    border-radius: 12px;
  }
`;
const Content = styled.div<Props>`
  padding: 72px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  @media (max-width: 768px) {
    padding: 60px;
    gap: 24px;
  }
  @media (max-width: 449px) {
    ${(props) =>
      props.login &&
      css`
        padding: 0;
        @media (max-width: 768px) {
          padding: 0;
        }
      `}
    padding: 32px 24px;
  }
`;

const Logo = styled.div`
  width: 193px;
  height: 35px;
  .logo {
    width: 193px;
    height: 35px;
    @media (max-width: 449px) {
      width: 144px;
      height: 26px;
    }
  }
  @media (max-width: 768px) {
    margin: 0 0 8px;
    width: 193px;
    height: 35px;
  }
  @media (max-width: 449px) {
    margin: 0;
    width: 144px;
    height: 26px;
  }
`;
const Firstblock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    gap: 32px;
  }
`;
const Heading = styled.h3`
  ${typo.heading3};
  color: ${colors.primary};
  text-align: center;
  @media (max-width: 768px) {
    ${typo.tabletH3}
  }
  @media (max-width: 449px) {
    ${typo.mobileH3}
  }
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 449px) {
    .button {
      padding: 9px 23px;
    }
  }
`;
const Secondblock = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
`;
const Line = styled.div`
  border-top: 1px solid ${colors.lightGray};
  width: 100%;
`;

const Text = styled.div`
  ${typo.heading5};
  color: ${colors.darkGray};
  @media (max-width: 768px) {
    ${typo.tabletH5};
  }
  @media (max-width: 449px) {
    ${typo.mobileH5}
  }
`;
const Thirdblock = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 22px; */
  width: 100%;
  .input-container {
    overflow: hidden;
    transition: height 0.2s ease-in-out;
    height: 0;
    margin-top: 22px;
  }

  .input-container.active {
    height: 72px; /* Adjust this value based on your input field height */
    margin-top: 22px;
    margin-bottom: 22px;
  }

  @media (max-width: 449px) {
    .button {
      padding: 9px 23px;
    }
  }
`;
const Lastblock = styled.div`
  text-align: center;
  ${typo.body3};
  color: ${colors.darkGray};
  display: flex;
  flex-direction: column;
  a {
    text-decoration: underline;
    padding: 0 4px;
    color: ${colors.darkGray};
    cursor: pointer;
    &:hover {
      color: ${colors.primary};
    }
  }

  @media (max-width: 768px) {
    ${typo.body4};
  }
`;
export { Maindiv, Card, Content, Logo, Firstblock, Heading, Buttons, Secondblock, Line, Text, Thirdblock, Lastblock };
