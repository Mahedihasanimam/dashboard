import React, { useState } from 'react';
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import Link from 'next/link';

// Sample data with fields matching the table columns
const originData = [];
for (let i = 0; i < 100; i++) {
  originData.push({
    key: i.toString(),
    sid: i + 1,
    user: `User ${i}`,
    package: `Package ${i}`,
    StartDate: `2024-08-${i + 1}`,
    EndDate: `2024-09-${i + 1}`,
    Payment: 1000 + i,
  });
}

// Editable cell component
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

// Main component
const PurchasePackage = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      sid: '',
      user: '',
      package: '',
      StartDate: '',
      EndDate: '',
      Payment: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const columns = [
    {
      title: 'S.ID',
      dataIndex: 'sid',
      width: '10%',
      editable: true,
    },
    {
      title: 'User',
      dataIndex: 'user',
      width: '20%',
      editable: true,
    },
    {
      title: 'Package',
      dataIndex: 'package',
      width: '20%',
      editable: true,
    },
    {
      title: 'Start Date',
      dataIndex: 'StartDate',
      width: '20%',
      editable: true,
    },
    {
      title: 'End Date',
      dataIndex: 'EndDate',
      width: '20%',
      editable: true,
    },
    {
      title: 'Payment',
      dataIndex: 'Payment',
      width: '10%',
      editable: true,
      inputType: 'number',
    },
    {
      title: 'Operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
            Edit
          </Typography.Link>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.inputType || 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div className='-mt-2 p-6 bg-black'>
      <div className='flex items-center justify-between bg-[#404141] text-white p-4 rounded-t-md'>
        <h3 className='text-2xl font-bold'>Purchased Package List</h3>
        <Link className='text-xl border-b-2' href={'#'}>View All</Link>
      </div>
      <Form form={form} component={false}>
        <Table
        
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row bg-[#555656] text-lg hover:text-red-500 text-white"
          pagination={{
            onChange: cancel,
          }}
          className='customheader styles.customTable '
        />
      </Form>
    </div>
  );
};

export default PurchasePackage;
