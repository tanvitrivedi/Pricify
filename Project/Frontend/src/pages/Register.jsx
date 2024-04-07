import { Button, Checkbox, Form, Input, Typography } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import Frosted2 from "../components/Froasted2";
import FrostedGlassContainer from "../components/FrostedGlassContainer";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    console.log("Success:", values);
    setLoading(true);
    axios
      .post(process.env.REACT_APP_BACKEND_URL + "/auth/signup", {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email, // Assuming email is used as username
        password: values.password,
      })
      .then((response) => {
        console.log("Registration successful:", response.data);
        localStorage.setItem(
          "auth-user",
          JSON.stringify({ user: response.data })
        );
        navigate("/home");
      })
      .catch((error) => {
        console.error("Registration failed:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Frosted2 containerStyle="justify-start item-start p-10 flex-col flex-1 ">
      <h2 className="text-xl font-bold text-[29px] text-white self-start">
        Sign Up
      </h2>
      <Form
        name="basic"
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout="vertical"
        className="flex flex-col justify-start mt-4 flex-1"
      >
        <div className="flex flex-col flex-1 overflow-auto max-h-[28rem] pt-7">
          <div className="flex gap-2 ">
            <Form.Item
              label="Firstname"
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "Please input your firstname!",
                },
              ]}
              labelAlign="left"
              className="flex-1"
            >
              <Input className="h-10 flex " placeholder="Firstname" />
            </Form.Item>

            <Form.Item
              label="Lastname"
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "Please input your lastname!",
                },
              ]}
              labelAlign="left"
              className="flex-1"
            >
              <Input className="h-10 flex " placeholder="Lastname" />
            </Form.Item>
          </div>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
            labelAlign="left"
          >
            <Input className="h-10 flex " placeholder="Email" />
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
            labelAlign="left"
          >
            <Input.Password className="h-10 flex " placeholder="Password" />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please enter matching password!",
              },
            ]}
            labelAlign="left"
          >
            <Input.Password
              className="h-10 flex "
              placeholder="Confirm Password"
            />
          </Form.Item>
        </div>

        <div className=" items-center flex gap-5 mt-3">
          <CustomButton
            type="submit"
            title="Register"
            className="w-44"
            loading={loading}
          />
          <CustomButton
            type="button"
            title="Login"
            onClick={() => navigate("/login")}
            needOutlined
            className="w-44"
          />
        </div>
      </Form>
    </Frosted2>
  );
};

export default Register;
