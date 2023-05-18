import React from 'react';
import { Form, Input, Select } from 'antd';

export default function WorkCategoryFrom({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        name="workName"
        label="workName"
        rules={[
          {
            required: true,
            type: 'text',
            message: 'Please enter Work Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="description"
        rules={[
          {
            required: true,
            message: 'Please enter the description!',
            min: 10,
            message: 'Description must be at least 10 characters long',
          },
        ]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>
    </>
  );
}
