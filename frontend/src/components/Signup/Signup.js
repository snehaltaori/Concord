
import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { toast } from "react-hot-toast";
import { MailOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { CodeOutlined } from '@ant-design/icons';


export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    confirmPassword: "",
    OCode: ""
  });



  function onSubmit() {
    // fetch the data from the form
    const orgCode = formData.OCode;
    const username = formData.username;
    const email = formData.email;
    const password = formData.password;
    const confirmPassword = formData.confirmPassword;
    if(password !== confirmPassword){
      toast.error("Passwords do not match")
      return
    }
    console.log(orgCode);

    // step 1: fetch details from orgCode
    // step 2: add that data with the username/pass to users database
    // step 3: when we log in, that data is loaded from there
   
  }


  return (
    <div className='bg-background text-foreground'>
  <section
      id="about"
      className="container py-24 sm:py-36 h-svh"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="flex flex-col md:flex-row justify-evenly">
          
          <div className="bg-green-0 flex flex-col w-[50%]">
              <h2 className="text-3xl md:text-4xl font-bold">
                
                Get Started With {" "}
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Concord{" "}
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                We are a team of professionals who are passionate about bringing all the organisational needs under one umbrella and making it easier for you to manage your business/organisation/institution. Whatever it is, concord is always the answer.
              </p>
              
          </div>    
          <Form
            name="normal_signup"
            className="signup-form"
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
                className="w-96" 
                prefix={<UserOutlined className="site-form-item-icon" />}
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
                name="email"
                rules={[
                {
                    required: true,
                    message: "Please input your Email!",
                    type: 'email',
                },
                ]}
            >
                <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
                onChange={(e) => {
                    setFormData({
                    ...formData,
                    email: e.target.value,
                    });
                }}
                />
            </Form.Item>
            <Form.Item
                name="OCode"
                rules={[
                {
                    required: true,
                    message: "Please input your Organisation Identification Code!",
                },
                ]}
            >
                <Input
                prefix={<CodeOutlined className="site-form-item-icon" />}
                placeholder="Organisation Code"
                onChange={(e) => {
                    setFormData({
                    ...formData,
                    OCode: e.target.value,
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
                prefix={<LockOutlined className="site-form-item-icon" />}
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

            <Form.Item
                name="confirmPassword"
                rules={[
                {
                    required: true,
                    message: "Please confirm your Password!",
                },
                ]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => {
                    setFormData({
                    ...formData,
                    confirmPassword: e.target.value,
                    });
                }}
                />
            </Form.Item>

            <Form.Item>
                <Button
                type="primary"
                htmlType="submit"
                className="signup-form-button"
                onClick={() => onSubmit()}
                >
                Sign Up
                </Button>
            </Form.Item>

            <p className="not-regis">
                Already have an account? {" "}
                <Link to="/login">
                Log In
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
