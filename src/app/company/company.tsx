"use client";
import React from 'react'
import { CompanyHeader, Content, HeaderName, ItemName, ListItem, ListMain, MainDiv, NameTitle, NewButtonMain, TableHeader } from './style'
import Button from '../components/button/button';

function Company() {
    return (
        <MainDiv>
            <Content>
                <CompanyHeader>
                    <HeaderName>
                        Company
                    </HeaderName>
                    <NewButtonMain>
                        <Button title='New' />
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
    )
}

export default Company
