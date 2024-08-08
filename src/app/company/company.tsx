'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { CompanyHeader, Content, HeaderName, MainDiv, NewButtonMain } from './style';
import Button from '../components/button/button';
import ModalCustom from '../components/modelCustom/modelCustom';
import AddNewCompanyModal from './addNewCompanyModal';
import { Space, Table, TableProps, Tag } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducerInterface } from '../Interface/RootReducerInterface';
import { isEmpty } from '@/helper/common';
import { getUserCompanyList } from '@/services/companyServices';
import { randomColorsArray } from '../assets/style';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}


const getRandomColour = (name: string) => {
  const asciiValue: any = name.charAt(0).toUpperCase().charCodeAt(0);
  const colorIndex = (Number(asciiValue) - 64) % (randomColorsArray.length - 1);
  return randomColorsArray[colorIndex];
};

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Users',
    key: 'users',
    dataIndex: 'users',
    render: (users) => (
      <>
        {users.map((user: any) => {
          return (
            <Tag color={getRandomColour(user.name)} key={user.email}>
              {user.email}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Invited Users',
    key: 'invitedUsers',
    dataIndex: 'invitedUsers',
    render: (invitedUsers) => (
      <>
        {invitedUsers.map((user: any) => {
          return (
            <Tag color={'#bdbdbd'} key={user.email}>
              {user.email}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <Space size='middle'>
        <EllipsisOutlined style={{ fontSize: '24px', cursor: 'pointer' }} />
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

function Company() {
  const [isNewCompanyModal, setIsNewCompanyModal] = useState(false);
  const dispatch = useDispatch();
  const userSelector = useSelector((state: RootReducerInterface) => state.user);
  const { userDetails } = userSelector || {};
  const companySelector = useSelector((state: RootReducerInterface) => state.company);
  const { companyList } = companySelector || {};

  const loadData = useCallback(async () => {
    if (!isEmpty(userDetails?.id)) await dispatch(getUserCompanyList(userDetails?.id));
  }, [dispatch, userDetails?.id])

  useEffect(() => {
    loadData();
  }, [loadData])

  const onClickNew = useCallback(() => {
    setIsNewCompanyModal(true);
  }, []);

  const onCloseNewModal = useCallback(() => {
    setIsNewCompanyModal(false);
  }, []);

  return (
    <>
      <MainDiv>
        <Content>
          <CompanyHeader>
            <HeaderName>Company</HeaderName>
            <NewButtonMain>
              <Button onClick={onClickNew} title='New' />
            </NewButtonMain>
          </CompanyHeader>
          <Table columns={columns} dataSource={companyList} />
        </Content>
      </MainDiv>
      <ModalCustom open={isNewCompanyModal} onClose={onCloseNewModal}>
        <AddNewCompanyModal onClose={onCloseNewModal} />
      </ModalCustom>
    </>
  );
}

export default Company;
