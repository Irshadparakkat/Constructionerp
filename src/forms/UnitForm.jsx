import React from 'react';
import { Form, Input, Select } from 'antd';

const { Option } = Select;
export default function UnitForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        name="unitName"
        label="unitName"
        rules={[
          {
            required: true,
            message: 'Please input the unitName!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="symbolName"
        label="symbol"
        rules={[
          {
            required: true,
            message: 'Please input your symbolName!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="type"
        label="Type"
        rules={[
          {
            required: true,
            message: 'Please select a type',
          },
        ]}
      >
        <Select>
          <Option value="volume">Volume</Option>
          <Option value="area">Area</Option>
          <Option value="length">Length</Option>
        </Select>
      </Form.Item>
    </>
  );
}
