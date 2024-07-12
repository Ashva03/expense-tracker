import { colors, typo } from "@/app/assets/style";
import styled from "styled-components";

const Maindiv = styled.div`
  display: flex;
  border-radius: 8px;
  border: 1px solid ${colors.lightGray};
  box-shadow: 0px 2px 17px 0px rgba(0, 0, 0, 0.1);
  padding: 8px 16px;
  width: max-content;
  gap: 8px;
  align-items: center;
  background-color: ${colors.white};
`;

const Title = styled.div`
${typo.body4}
color: ${colors.primary};
`;

export { Maindiv, Title };