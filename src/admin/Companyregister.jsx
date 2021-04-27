import React, { useState } from "react";
import { Form, Input, Select, Row, Button } from "antd";
import { Card } from "antd";
import { Checkbox } from "antd";
const { Option } = Select;

const Companyregister = () => {
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <div>
        <div
          className
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            height: "100%",
            width: "100%",
            padding: 0,
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <div className="flex items-center justify-center">
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{
                position: "relative",
                width: "80%",
                borderRadius: 20,
                overflow: "hidden",
              }}
            >
              <div className="loginimg"></div>

              <Card
                className
                style={{
                  marginTop: "4%",
                  width: 480,
                  backgroundColor: "#ff5722",
                  position: "absolute",
                  right: 0,
                  top: 0,
                  height: "682px",
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              >
                <div className="oleoScript">
                  <h1 className="text-4xl ml-40" style={{ color: "#fff" }}>
                    Sign Up
                  </h1>
                </div>
                <Form
                  layout="vertical"
                  form={form}
                  name="register"
                  onFinish={onFinish}
                  initialValues={{
                    prefix: "86",
                  }}
                  scrollToFirstError
                >
                  <div className="font-bold" style={{ color: "#fff" }}>
                    <Form.Item
                      name=" Your Name"
                      label="Your Name"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Name!",
                          whitespace: true,
                        },
                      ]}
                    >
                      <Input placeholder=" Your Name" size="large" />
                    </Form.Item>

                    <Form.Item
                      name="  Your Email"
                      label="  Your Email"
                      rules={[
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!",
                        },
                      ]}
                    >
                      <Input placeholder=" Your Email" size="large" />
                    </Form.Item>

                    <Form.Item
                      name="password"
                      label="Password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                      hasFeedback
                    >
                      <Input.Password placeholder="Password" size="large" />
                    </Form.Item>

                    <Form.Item
                      name="confirm"
                      label="Repeat Your Password"
                      dependencies={["password"]}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                              return Promise.resolve();
                            }

                            return Promise.reject(
                              new Error(
                                "The two passwords that you entered do not match!"
                              )
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password
                        placeholder="Repeat Your Password"
                        size="large"
                      />
                    </Form.Item>

                    <div className="mb-4">
                      <Checkbox
                        onChange={onChange}
                        style={{ color: "#1b1a1a" }}
                      >
                        I agree all statements in Terms of service
                      </Checkbox>
                    </div>
                  </div>

                  <Form.Item>
                    <Button
                      className="font-bold text-3xl"
                      style={{ backgroundColor: "#1b1a1a" }}
                      type="primary"
                      htmlType="submit"
                      shape="round"
                      size="large"
                      className="login-form-button text-7xl"
                      block
                    >
                      SIGNUP
                    </Button>
                  </Form.Item>
                  <h1>
                    Have already an account?
                    <Button
                      type="link"
                      className="font-bold"
                      style={{ color: "#1b1a1a" }}
                    >
                      Login here
                    </Button>
                  </h1>
                </Form>
              </Card>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};
export default Companyregister;
