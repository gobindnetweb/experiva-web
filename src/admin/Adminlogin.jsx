import React from "react";
import { Form, Input, Button, Row } from "antd";
import { Card } from "antd";

const layout = {
  labelCol: {
    span: 12,
  },
  wrapperCol: {
    span: 30,
  },
};
const Adminlogin = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div
      style={{
        textAlign: "center",
        background:
          "url(https://images.pexels.com/photos/3647693/pexels-photo-3647693.jpeg?cs=srgb&dl=pexels-bob-ward-3647693.jpg&fm=jpg), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
        backgroundBlendMode: "overlay",
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundSize: "100%",
        repeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ minHeight: "100vh" }}
      >
        <Card style={{ width: 480, margin: "0 16px" }}>
          <h1> Log in to your admin account </h1>
          <Form
            layout="vertical"
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username or Email"
              name=" username or email"
              rules={[
                {
                  required: true,
                  message: "Please input your username or email!",
                },
              ]}
            >
              <Input placeholder="Username or Email" size="large" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" size="large" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                block
              >
                Log in
              </Button>
            </Form.Item>

            <Form.Item>
              <a className="login-form-forgot" href="">
                Forgot username or password
              </a>
            </Form.Item>
          </Form>
        </Card>
      </Row>
    </div>
  );
};

export default Adminlogin;
