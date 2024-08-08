import styled from 'styled-components';

const MainDiv = styled.div`
  display: flex;
  height: calc(100vh - 88px);
  margin-top: 88px;
`;

const Content = styled.div`
  width: 100%;
  overflow: auto;
  padding: 0 124px;

  @media (max-width: 768px) {
    padding: 0 40px;
  }

  @media (max-width: 576px) {
    padding: 0 20px;
  }
`;

const CompanyHeader = styled.div`
  width: 100%;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const NewButtonMain = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;

  @media (max-width: 576px) {
    width: 100%;
    justify-content: flex-start;
    margin-top: 10px;
  }
`;

const HeaderName = styled.div`
  font-size: 20px;
  font-weight: 600;
  align-content: center;

  @media (max-width: 576px) {
    margin: 0;
    width: auto;
    font-size: 18px;
  }
`;

export { MainDiv, Content, CompanyHeader, NewButtonMain, HeaderName };
