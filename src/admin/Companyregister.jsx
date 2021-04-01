import React, { useState } from "react";
import { Form, Input, Select, Row, Button } from "antd";
import { Card } from "antd";
const { Option } = Select;

const Companyregister = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+91</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  const [autoCompleteResult, setAutoCompleteResult] = useState([]);

  const onWebsiteChange = (value) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(
        [".com", ".org", ".net"].map((domain) => `${value}${domain}`)
      );
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));
  return (
    <>
      <div
        style={{
          textAlign: "center",
          background:
            "url(https://images.pexels.com/photos/175656/pexels-photo-175656.jpeg?cs=srgb&dl=pexels-tim-gouw-175656.jpg&fm=jpg), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))",
          backgroundBlendMode: "overlay",
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundSize: "100%",
          repeat: "no-repeat",
          backgroundPosition: "center -300px",
        }}
      >
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ minHeight: "100vh" }}
        >
          <Card style={{ width: 480, margin: "0 16px" }}>
            <h1> Create a company account </h1>
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
              <Form.Item
                name="email"
                label="E-mail"
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
                <Input placeholder="E-mail" size="large" />
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
                label="Confirm Password"
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
                <Input.Password placeholder="Confirm Password" size="large" />
              </Form.Item>

              <Form.Item
                name="Name"
                label="Name"
                tooltip="What do you want others to call you?"
                rules={[
                  {
                    required: true,
                    message: "Please input your Name!",
                    whitespace: true,
                  },
                ]}
              >
                <Input placeholder="Name" size="large" />
              </Form.Item>

              <Form.Item
                name="phone"
                label="Phone Number"
                rules={[
                  {
                    required: false,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  placeholder="Phone"
                  size="large"
                  addonBefore={prefixSelector}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="website"
                label="Website"
                rules={[
                  {
                    required: false,
                    message: "Please input website!",
                  },
                ]}
              >
                <Input placeholder="Website" size="large" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  block
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Row>
      </div>
    </>
  );
};
export default Companyregister;
