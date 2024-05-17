import "./LoginMain.css";
import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { toast } from "react-hot-toast";
import { AuthContext, useAuth } from "../../../security/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function LoginMain() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const authContext = useAuth();
  const navigate = useNavigate();

  // async function onSubmit() {
  //   try {
  //     await authContext.login(formData.username, formData.password);
      
  //   } catch (error) {
  //     // Handle error
  //     console.error(error);
  //   }
  //   if (authContext.isAuthenticated) {
  //     navigate("/dashboard");
  //     console.log("Login successful");
  //   } else {
  //     // Show error message
  //     console.error("Login failed");
  //   }
  // }

  async function onSubmit() {
    try {
      const loginResult = await authContext.login(formData.username, formData.password);
  
      if (loginResult.success) {
        navigate("/dashboard");
        console.log("Login successful, redirecting to dashboard");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      // Handle error
      console.error("An error occurred during login:", error);
    }
  }

  return (
    <div className="h-svh">
  <section
      id="about"
      className="container py-24 sm:py-36"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="flex flex-col md:flex-row justify-evenly">
          
          <div className="bg-green-0 flex flex-col w-[50%]">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Concord.
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                We are a team of professionals who are passionate about bringing all the organisational needs under one umbrella and making it easier for you to manage your business/organisation/institution. Whatever it is, concord is always the answer.
              </p>
              
          </div>
          <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
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
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            username: e.target.value,
                          });
                        }}
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
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            password: e.target.value,
                          });
                        }}
                      />
                    </Form.Item>
                    <Form.Item className="not-regis">
                      <Form.Item
                        name="remember"
                        valuePropName="checked"
                        noStyle
                      >
                        <Checkbox style={{ color: "white" }}>
                          {" "}
                          Remember me
                        </Checkbox>
                      </Form.Item>

                      <a className="login-form-forgot" href="">
                        Forgot password? 
                      </a>
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button"
                        // onClick={() => onLogin(formData)}
                        onClick={() => onSubmit()}
                      >
                        Log in
                        
                      </Button>
                    </Form.Item>
                    <p className="not-regis">
                    Not registered?  {" "}
                    <Link to="/signup">
                      Sign Up
                    </Link>
                  </p>
                        
        </Form>
        
        </div>

        
      </div>
    </section>
      {/* <div className="shadow"></div> */}

    </div>
  );
}
