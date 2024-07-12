import { colors, typo } from '@/app/assets/style';
import styled, { css } from 'styled-components';

interface Props {
  isSetPasswordModal?: boolean;
}
const MainWrapper = styled.div<Props>`
  max-width: 612px;
  width: 100%;
  padding: 72px 72px 60px;
  border-radius: 24px;
  background-color: ${colors.white};
  box-shadow: 0px 0px 25px 0px #00000005;
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media only screen and (max-width: 768px) {
    max-width: 520px;
    width: 100%;
    padding: 0;
    gap: 24px;
    margin: 0 auto;
  }
  ${(props: Props) =>
    props.isSetPasswordModal &&
    css`
      max-width: 620px;
      @media only screen and (max-width: 768px) {
        max-width: 520px;
        width: 100%;
        padding: 40px 40px 28px;
        gap: 24px;
      }
      @media only screen and (max-width: 449px) {
        padding: 24px 24px 16px;
        border-radius: 12px;
      }
    `}
`;

const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const Title = styled.h3`
  ${typo.heading3}
  color: ${colors.primary};
  @media only screen and (max-width: 768px) {
    ${typo.tabletH3}
  }
  @media only screen and (max-width: 449px) {
    ${typo.mobileH3}
  }
`;

const Description = styled.p`
  text-align: center;
  ${typo.body2}
  color: ${colors.darkGray};
  @media only screen and (max-width: 768px) {
    ${typo.mobilebody2}
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const ButtonSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  .button {
    width: 100%;
  }
`;
export { MainWrapper, FormContent, Title, Description, Form, ButtonSection };
