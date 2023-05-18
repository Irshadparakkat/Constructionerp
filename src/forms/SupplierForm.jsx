import React from 'react';
import { Form, Input, Checkbox } from 'antd';

const { CheckboxGroup } = Checkbox;

export default function SupplierForm({ isUpdateForm = false }) {
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
        <CheckboxGroup>
          <Checkbox value="one">Example 1</Checkbox>
          <Checkbox value="two">Example 2</Checkbox>
          <Checkbox value="three">Example 3</Checkbox>
        </CheckboxGroup>
      </Form.Item>
    </>
  );
}
