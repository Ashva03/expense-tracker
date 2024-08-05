"use client";
import React, { useCallback, useState } from 'react'
import { CompanyHeader, Content, HeaderName, ItemName, ListItem, ListMain, MainDiv, NameTitle, NewButtonMain, TableHeader } from './style'
import Button from '../components/button/button';
import ModalCustom from '../components/modelCustom/modelCustom';
import AddNewCompanyModal from './addNewCompanyModal';

function Company() {
    const [isNewCompanyModal, setIsNewCompanyModal] = useState(false);

    const onClickNew = useCallback(() => {
        setIsNewCompanyModal(true)
    }, [])

    const onCloseNewModal = useCallback(() => {
        setIsNewCompanyModal(false)
    }, [])

    return (
        <>
            <MainDiv>
                <Content>
                    <CompanyHeader>
                        <HeaderName>
                            Company
                        </HeaderName>
                        <NewButtonMain>
                            <Button onClick={onClickNew} title='New' />
                        </NewButtonMain>
                    </CompanyHeader>
                    <ListMain>
                        <TableHeader>
                            {/* <NameHeader></NameHeader> */}
                            <NameTitle>Name</NameTitle>
                        </TableHeader>
                        <ListItem>
                            <ItemName>Ambani</ItemName>
                            <div>three dots</div>
                        </ListItem>
                        <ListItem>
                            <ItemName>Adani</ItemName>
                            <div>three dots</div>
                        </ListItem>
                        <ListItem>
                            <ItemName>Jio</ItemName>
                            <div>three dots</div>
                        </ListItem>
                        <ListItem>
                            <ItemName>Ola</ItemName>
                            <div>three dots</div>
                        </ListItem>
                        <ListItem>
                            <ItemName>Home</ItemName>
                            <div>three dots</div>
                        </ListItem>
                        <ListItem>
                            <ItemName>Personal</ItemName>
                            <div>three dots</div>
                        </ListItem>
                    </ListMain>
                </Content>
            </MainDiv>
            <ModalCustom open={isNewCompanyModal} onClose={onCloseNewModal}><AddNewCompanyModal onClose={onCloseNewModal} /></ModalCustom>
        </>
    )
}

export default Company
