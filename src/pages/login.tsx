import React from "react";
import {Form, Input, Button, Checkbox} from "antd";

interface Props {}

export const LoginPage = (props: Props) => {
  return <div>
    <Form>
      <Form.Item
        label="Username"
        name="username"
        rules={[{required: true, message: "Please input a username"}]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{required: true, message: "Please input a password"}]}
      >
        <Input.Password />
      </Form.Item>
    </Form>
  </div>;
};
