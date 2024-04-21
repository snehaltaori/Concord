import "./LoginMain.css";
import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";

export default function LoginMain() {
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div>
      <section className="about" id="about">
        <div className="section__container about__container">
          <div className="about__grid">
            <div className="about__content">
              <h2 className="section__header">
                Your Gateway to Streamlined Management
              </h2>
              <p className="para">
                At Concord, we believe in making organizational management as
                straightforward as possible. Whether you're a seasoned
                professional or just starting your managerial journey, our
                platform is designed to empower you. Log in or register now to
                unlock a world of possibilities for your business.
              </p>
              <br />
            </div>
            <div className="about__list">
              <div className="login-wrap">
                <div className="login-wrap-box">
                  <div className="login-title">
                    <h3>Enter User Details</h3>
                  </div>
                  <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                  >
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Username!",
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <UserOutlined className="site-form-item-icon" />
                        }
                        placeholder="Username"
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your Password!",
                        },
                      ]}
                    >
                      <Input
                        prefix={
                          <LockOutlined className="site-form-item-icon" />
                        }
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Item>
                    <Form.Item className="not-regis">
                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        noStyle
                      >
                        <Checkbox style={{color: "white"}}> Remember me</Checkbox>
                      </Form.Item>

                      <a className="login-form-forgot" href="">
                        Forgot password
                      </a>
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                      >
                        Log in
                      </Button>
                    </Form.Item>
                  </Form>
                  <p className="not-regis">
                    Not registered? <a href="signup.html">Create account</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
