import React from 'react';
import { Form, Input, Select } from 'antd';
const { Option } = Select;
export default function MaterialForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        name="materialName"
        label="materialName"
        rules={[
          {
            required: true,
            message: 'Please enter your Material Name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="unit"
        label="Unit"
        rules={[
          {
            required: true,
            message: 'Please select a unit',
          },
        ]}
      >
        <Select>
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="unitprice"
        label="price per unit"
        rules={[
          {
            required: true,
            message: 'Please enter the Unit price!',
          },
        ]}
      >
        <Input type="number" />
      </Form.Item>
    </>
  );
}
