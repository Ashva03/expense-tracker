'use client';
import React, { useCallback, useState } from 'react';
import { CompanyHeader, Content, HeaderName, MainDiv, NewButtonMain } from './style';
import Button from '../components/button/button';
import ModalCustom from '../components/modelCustom/modelCustom';
import AddNewCompanyModal from './addNewCompanyModal';
import { Space, Table, TableProps, Tag } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
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
          <Table columns={columns} dataSource={data} />
        </Content>
      </MainDiv>
      <ModalCustom open={isNewCompanyModal} onClose={onCloseNewModal}>
        <AddNewCompanyModal onClose={onCloseNewModal} />
      </ModalCustom>
    </>
  );
}

export default Company;
