import { colors, typo } from '@/app/assets/style';
import styled, { css } from 'styled-components';
interface Props {
  isSettingPage?: boolean;
  isLoginPage?: boolean;
}
const SuccesfullResetDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  .successfullreset {
    width: 100%;
  }
  @media (max-width: 449px) {
    gap: 24px;
  }
`;
const Icon = styled.div`
  display: flex;
  .reseticon {
    width: 80px;
    height: 80px;
  }
  @media (max-width: 769px) {
    .reseticon {
      width: 68px;
      height: 68px;
    }
  }
  @media (max-width: 449px) {
    .reseticon {
      width: 60px;
      height: 60px;
    }
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  @media (max-width: 449px) {
    gap: 8px;
  }
`;
const Title = styled.div`
  ${typo.heading4};
  color: ${colors.primary};
  align-items: center;
  @media (max-width: 769px) {
    ${typo.tabletH4};
  }
  @media (max-width: 449px) {
    ${typo.mobileH4};
  }
`;

const Description = styled.div`
  text-align: center;
  ${typo.body2};
  color: ${colors.darkGray};
  @media (max-width: 769px) {
    ${typo.mobilebody2};
  }
  @media (max-width: 449px) {
    ${typo.mobilebody2};
  }
`;
const ContentDiv = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  ${(props) =>
    props.isSettingPage &&
    css`
      gap: 32px;
      max-width: 336px;
      width: 100%;
    `}
  @media only screen and (max-width: 768px) {
    gap: 24px;
  }
  .button {
    width: 100%;
  }
`;

const Box = styled.div<Props>`
  max-width: 612px;
  border-radius: 24px;
  padding: 72px;
  background-color: ${colors.white};
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.02);
  margin: 0 auto;
  width: 100%;
  ${(props) =>
    props.isSettingPage &&
    css`
      max-width: 480px;
      width: 100%;
    `}
  @media (max-width: 769px) {
    max-width: 380px;
    width: 100%;
    padding: 24px;
  }
  @media (max-width: 449px) {
    max-width: 350px;
    border-radius: 12px;
  }
  ${(props) =>
    props.isLoginPage &&
    css`
      @media (max-width: 768px) {
        background: transparent;
        box-shadow: none;
        padding: 0;
        max-width: 380px;
        width: 100%;
      }
    `}
`;
export { SuccesfullResetDiv, Icon, Content, Title, Description, ContentDiv, Box };
