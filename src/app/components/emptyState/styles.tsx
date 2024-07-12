import { colors, typo } from '@/app/assets/style';
import styled from 'styled-components';

const Box = styled.div`
  max-width: 220px;
  width: 100%;
  display: flex;
  gap: 18px;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 768px) {
    gap: 12px;
  }
  @media (max-width: 449px) {
    gap: 8px;
  }
`;
const Top = styled.div`
  width: 220px;
  height: 220px;
  display: flex;
  .img {
    width: 220px;
    height: 220px;
  }
  @media (max-width: 768px) {
    width: 180px;
    height: 220px;
    .img {
      width: 180px;
      height: 220px;
    }
  }
  @media (max-width: 449px) {
    width: 160px;
    height: 160px;
    .img {
      width: 160px;
      height: 160px;
    }
  }
`;

const Bottom = styled.div`
  color: ${colors.primary};
  ${typo.heading5}
  @media (max-width: 449px) {
    ${typo.mobileH5}
  }
`;
export { Box, Top, Bottom };
