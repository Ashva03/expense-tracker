import styled from "styled-components";

const MainDiv = styled.div`
    display: flex;
    height: 100vh - 88px !important;
    margin-top: 88px;
`

const Content = styled.div`
    width: 100%;
    overflow: auto;
    padding: 0 24px;
`

const CompanyHeader = styled.div`
    width: 100%;
    overflow: auto;
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    @media (max-width: 449px) {
    margin: 0;
    width: auto;
    }
`

const NewButtonMain = styled.div`
    display: flex;
    justify-content: flex-end;
`

const HeaderName = styled.div`
    font-size: 20px;
    font-weight: 600;
    align-content: center;
    margin-left: 30px;
    @media (max-width: 449px) {
    margin: 0;
    width: auto;
    }
`

const ListMain = styled.div`
    background-color: #ededd2;
    margin: 15px;
    :first-child{
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }
    border: 1px solid gray;
    border-radius: 10px;
    :last-child{
        border: 0px;
    }
`

const ListItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    gap:30px;
    border-bottom: 1px solid gray;
`

const ItemName = styled.div`
    margin-left: 5px;
`

const TableHeader = styled.div`
    background-color: gray;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 8px;
`

const NameTitle = styled.div`
    padding-left: 8px;
    font-weight: 400;
    color: white;
`

export { MainDiv, Content, CompanyHeader, NewButtonMain, HeaderName, ListMain, ListItem, ItemName, TableHeader, NameTitle }