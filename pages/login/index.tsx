import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import { ILogin } from "../../services/interface/auth";
import { useRouter } from "next/router";
import useAuth from "../../components/hooks/auth/useAuth";

const Login = () => {
  const { push } = useRouter();
  const { LOGIN } = useAuth();
  const onFinish = async (values: ILogin) => {
    try {
      const res = await LOGIN(values);
      if (res.code === 200) {
        sessionStorage.setItem("token", res.result.access_token);
        push("/");
      }
    } catch (error) {}
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
