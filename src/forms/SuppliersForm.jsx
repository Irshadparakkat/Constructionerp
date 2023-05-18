import React from 'react';
import { Form, Input, Select, Checkbox } from 'antd';

export default function SuppliersForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        name="accountCode"
        label="accountCode"
        rules={[
          {
            required: true,
            message: 'Please input the Account code!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="materials"
        label="Materials"
        rules={[
          {
            required: true,
            message: 'Please select at least one material',
          },
        ]}
      >
        <Checkbox value="one">Example 1</Checkbox>
        <Checkbox value="two">Example 2</Checkbox>
        <Checkbox value="three">Example 3</Checkbox>
      </Form.Item>
    </>
  );
}
