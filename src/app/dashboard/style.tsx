import styled from 'styled-components';

const DashboardMain = styled.div`
  margin-top: 88px;
  padding: 24px 124px;

  @media (max-width: 576px) {
    margin-top: 48px;
    padding: 24px 24px;
  }
`;

const ChartMain = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  padding: 40px;
`;

const ChartSub = styled.div`
  width: auto;
  height: 400px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 20px;
  border: 1px solid #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 0px 15px #f0f0f0;
`;

const AntdCard = styled.div`
  box-shadow: 0px 20px 27px #0000000d;
  border-radius: 12px;
`;

const BarCard = styled.div`
  height: 400px;
`;

const GraphCard = styled.div`
  height: 300px;
`;
export { DashboardMain, ChartMain, ChartSub, AntdCard, GraphCard, BarCard };
