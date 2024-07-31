import styled from "styled-components";

const DashboardMain = styled.div`
    margin-top: 88px;
`

const ChartMain = styled.div`
    width: auto;
    display: flex;
    justify-content: center;
    padding:40px;
`

const ChartSub = styled.div`
    width: auto;
    height: 400px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    padding:20px;
    border: 1px solid #f0f0f0;
    border-radius: 10px;
    box-shadow: 0px 0px 15px #f0f0f0;
`

export { DashboardMain, ChartMain, ChartSub }