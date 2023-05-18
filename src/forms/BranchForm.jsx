import React from 'react';
import { Form, Input, Select } from 'antd';

export default function BranchForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        name="branchName"
        label="branchName"
        rules={[
          {
            required: true,
            message: 'Please enter your Branch Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="codeName"
        label="codeName"
        rules={[
          {
            required: true,
            message: 'Please enter the code!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="city"
        label="city"
        rules={[
          {
            required: true,
            message: 'Please enter the city name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Address"
        label="Address"
        rules={[
          {
            required: true,
            message: 'Please enter correct Address',
            min: 10,
            message: 'Address must be at least 10 characters long',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="Phone number"
        label="PhoneNumber"
        rules={[
          {
            required: true,
            message: 'Please enter a valid mobile number',
            pattern: /^(?:\+?\d{1,3})?[ -]?\(?(?:\d{1,4})?\)?[ -]?\d{1,4}[ -]?\d{1,9}$/i,
          },
          { min: 10, Message: 'phone number must be 10 digit' },
          { max: 10, Message: 'phone number not exceed 10 digit' },
        ]}
      >
        <Input type="number" pattern="[0-9]*" />
      </Form.Item>
    </>
  );
}
