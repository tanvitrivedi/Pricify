import { Button, Checkbox, Form, Input, Typography } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import Frosted2 from "../components/Froasted2";
import FrostedGlassContainer from "../components/FrostedGlassContainer";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [currentForm, setCurrentForm] = useState("email");

  const navigate = useNavigate();
  const handleFormChange = (formName) => {
    setCurrentForm(formName);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    setLoading(true);
    // axios
    //   .post(process.env.REACT_APP_BACKEND_URL + "/auth/login", {
    //     email: values.email, // Assuming email is used as username
    //     password: values.password,
    //   })
    //   .then((response) => {
    //     console.log("Registration successful:", response.data);

    //     localStorage.setItem(
    //       "auth-user",
    //       JSON.stringify({ user: response.data })
    //     );
    navigate("/login");
    //   })
    //   .catch((error) => {
    //     console.error("Registration failed:", error);
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const userData = JSON.parse(localStorage.getItem("auth-user") || "{}");
  useEffect(() => {
    if (Object.keys(userData).length) {
      localStorage.removeItem("auth-user");
    }
  }, []);

  return (
    <Frosted2 containerStyle="justify-start item-start p-10 flex-col flex-1 ">
      <h2 className="text-xl font-bold text-[29px] text-white self-start">
        Forgot Password
      </h2>
      {currentForm === "email" ? (
        <Form
          name="basic"
          initialValues={{
            email: "",
            password: "",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          className="flex flex-col justify-start mt-4 flex-1"
        >
          <div className="pt-10">
            <div className="flex flex-col flex-1">
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
            </div>
          </div>
          <div className=" items-center flex gap-5 mt-3 pt-16">
            <CustomButton
              type="button"
              title="Submit"
              className="w-44"
              loading={loading}
              onClick={() => {
                handleFormChange("password");
              }}
            />
            <CustomButton
              type="button"
              title="Go back to Login"
              onClick={() => navigate("/login")}
              needOutlined
              className="w-44"
            />
          </div>
        </Form>
      ) : (
        <Form
          name="basic"
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          className="flex flex-col justify-start mt-4 flex-1"
        >
          <div className="pt-10">
            <div className="flex flex-col flex-1">
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
                    message: "Please input your confirmPassword!",
                  },
                ]}
                labelAlign="left"
              >
                <Input.Password className="h-10 flex " placeholder="Password" />
              </Form.Item>
            </div>
          </div>
          <div className=" items-center flex gap-5 mt-3 pt-16">
            <CustomButton
              type="submit"
              title="Submit"
              className="w-44"
              loading={loading}
            />
            <CustomButton
              type="button"
              title="Go back to Login"
              onClick={() => navigate("/login")}
              needOutlined
              className="w-44"
            />
          </div>
        </Form>
      )}
    </Frosted2>
  );
};

export default ForgotPassword;
