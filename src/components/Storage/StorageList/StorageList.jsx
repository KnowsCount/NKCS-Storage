import React, {Component, PropTypes} from 'react';
import {Table, Pagination, Popconfirm, Button} from 'antd';
import dateFormat from '../../../utils/dateFormat';
import {PAGE_SIZE} from '../../../constants/constants';
import Spliter from '../../Spliter/Spliter';
import {storageList} from './index.css';

const StorageList = ({
    total,
    current,
    loading,
    dataSource,
    onPageChange,
    onModify,
    onReadOnly,
    onDel
}) => {
    const columns = [
        {
            title: '序号',
            dataIndex: 'serialNumber',
            key: 'serialNumber',
            render: (text, record, index)=><span>{index + 1}</span>
        },
        {
            title: '下单日期',
            dataIndex: 'createInstance',
            key: 'createInstance',
            render: (text)=><span>{dateFormat(text)}</span>
        },
        {
            title: '单据编号',
            dataIndex: 'storageNumber',
            key: 'storageNumber'
        },
        {
            title: '客户名称',
            dataIndex: 'customerName',
            key: 'customerName'
        },
        {
            title: '应付金额',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
        },
        {
            title: '已付金额',
            dataIndex: 'paymentAmount',
            key: 'paymentAmount',
        },
        {
            title: '订单信息',
            dataIndex: 'storageInfo',
            key: 'storageInfo',
        },
        {
            title: '操作',
            key: 'operation',
            render: (text, record)=>(
                <p>
                    <a onClick={()=> onModify(record['_id'])}>编辑</a>
                    <Spliter spliterText="|"/>
                    <Popconfirm title="确定删除该条记录？" onConfirm={()=> onDel(record['_id'])}>
                        <a type='ghost'>删除</a>
                    </Popconfirm>
                    <Spliter spliterText="|"/>
                    <a onClick={()=> onReadOnly(record['_id'])}>详情</a>
                </p>
            )
        }
    ];

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
            console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
        getCheckboxProps: record => ({
            disabled: record.name === 'Disabled User',    // Column configuration not to be checked
        }),
    };

    return (
        <div className={storageList}>
            <Table
                columns={columns}
                dataSource={dataSource}
                loading={loading}
                rowKey={record=>record._id}
                pagination={false}
                rowSelection={rowSelection}
            />
            <Pagination
                className="ant-table-pagination"
                total={total}
                current={parseInt(current)}
                pageSize={PAGE_SIZE}
                onChange={onPageChange}
            />
        </div>
    );
};

StorageList.propTypes = {
    onPageChange: PropTypes.func,
    onModify: PropTypes.func,
    onDel: PropTypes.func,
    dataSource: PropTypes.array,
    loading: PropTypes.any,
    total: PropTypes.any,
    current: PropTypes.any
};

export default StorageList;