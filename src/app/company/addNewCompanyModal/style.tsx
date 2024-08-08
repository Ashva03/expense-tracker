import { colors, typo } from "@/app/assets/style";
import styled from "styled-components";

const NewModalDiv = styled.div`
  max-width: 90vw;
  min-width: 50vw;
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
    min-width: 80vw;
    padding: 32px 10;
    gap: 32px;
  }
  @media (max-width: 449px) {
    max-width: calc(90vw);
    min-width: 85vw;
    padding: 20px 12px;
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

const Thirdblock = styled.form`
  display: flex;
  flex-direction: column;
  /* gap: 22px; */
  width: 100%;
  .input-container {
    width: 100%;
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

  .input-container-multiple {
    width: 100%;
    overflow: hidden;
    transition: height 0.2s ease-in-out;
    height: 0;
    margin-top: 22px;
  }

  .input-container-multiple.active {
    height: auto; /* Adjust this value based on your input field height */
    margin-top: 22px;
    margin-bottom: 22px;
  }

  @media (max-width: 449px) {
    .button {
      padding: 9px 23px;
    }
  }
`;

const Edit = styled.div`
  display: none;
  width: 100px;
  height: 100px;
  background-color: red;
  position: absolute;
  border-radius: 20px;
  top: 0;
  background: #27272785;
  @media only screen and (max-width: 768px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }
  @media only screen and (max-width: 449px) {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    svg {
      width: 32px;
      height: 32px;
    }
  }
  svg {
    path {
      fill: none;
    }
  }
`;

const AddMain = styled.div`
width: 100%;
height: auto;
display:flex;
margin-top: 10px;
.input{
    /* margin-left:-50px; */
    width: 100%;
    height: auto;
}
svg{
    align-self: center;
    /* margin-bottom: px; */
    /* margin-left: 10px; */
}
`

const SvgMain = styled.div`
    align-content:center;
    margin-left:10px;
`

export { NewModalDiv, CloseIcon, Top, Profile, Frame, Title, Thirdblock, Edit, AddMain, SvgMain }