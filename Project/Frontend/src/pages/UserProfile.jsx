import {
  ArrowLeftOutlined,
  BackwardOutlined,
  EditOutlined,
  MenuOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Form, Input, Menu, Select, Typography } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CircleIconButton from "../components/CircleIconButton";
import GenericButton from "../components/GenericButton";
import GenericInput from "../components/GenericInput";
import WhiteContainer from "../components/WhiteContainer";

const UserProfile = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    sex: "female", // Default sex value
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (values) => {
    console.log("Submitted values:", values);
    // Handle form submission logic here
  };

  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem(
      null,
      "grp",
      null,
      [
        getItem("Profile", "profile"),
        getItem("Setting", "setting"),
        getItem("Templates", "templates"),
        getItem("Cart", "cart"),
      ],
      "group"
    ),
  ];
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <WhiteContainer containerStyle="">
      <div className="flex flex-1 w-full md:hidden">
        <div className="flex justify-start items-start p-5">
          <MenuOutlined
            className="text-xl cursor-pointer mt-5 text-purple-950"
            onClick={() => setSidebarVisible(!isSidebarVisible)}
          />
        </div>
        {isSidebarVisible ? (
          <div className="w-full flex-1 border-r-2 transition-all duration-300 ease-in-out  border-purple-950 my-10 ">
            <div className="h-full flex flex-col items-center py-5 pt-0">
              <CircleIconButton
                icon={<ArrowLeftOutlined />}
                tooltipTile="Go back"
                onClick={() => navigate(-1)}
                className="self-start justify-self-start ml-5"
              />
              <div className="flex flex-col gap-2 items-center">
                <Avatar
                  size={90}
                  icon={<UserOutlined />}
                  className="bg-purple-950"
                />
                <Typography className="text-base font-extrabold text-purple-950">
                  Kashish Rastogi
                </Typography>
                <div className="border-2 border-purple-900 bg-purple-900 px-3 py-1 rounded-md !text-white">
                  <Typography className="!text-white font-bold">
                    Female
                  </Typography>
                </div>
              </div>
              <Menu
                onClick={onClick}
                defaultSelectedKeys={["profile"]}
                mode="inline"
                items={items}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-1 transition-all duration-300 ease-in-out ">
            <div className="flex flex-col py-9 px-5 items-start flex-1 h-full">
              <Form
                layout="vertical"
                onFinish={handleSubmit}
                className="w-full h-full flex flex-col items-start justify-between"
              >
                <div className="flex w-full flex-col items-start pt-6 pr-6">
                  <div className="flex w-full flex-col items-start ">
                    <h1 className="text-xl font-bold text-purple-950">
                      Personal Info
                    </h1>
                    <div className="border-[0.7px] border-purple-950 w-full"></div>
                    <br />
                    <div className="flex flex-col w-full gap-10 pl-10 items-center">
                      <div className="flex items-center ">
                        <Avatar
                          size={120}
                          icon={<UserOutlined />}
                          className="bg-purple-950"
                        />
                      </div>

                      <div className="flex flex-col flex-1 w-full">
                        <div className="flex gap-2 w-full items-center">
                          <GenericInput
                            label={null}
                            name="fname"
                            type="text"
                            className="flex-1"
                            placeholder="Firstname"
                            rules={[
                              {
                                required: true,
                                message: "Please input your firstname!",
                              },
                            ]}
                            onChange={handleChange}
                          />
                          <GenericInput
                            label={null}
                            name="lname"
                            type="text"
                            className="flex-1"
                            placeholder="Lastname"
                            rules={[
                              {
                                required: true,
                                message: "Please input your lastname!",
                              },
                            ]}
                            onChange={handleChange}
                          />
                        </div>

                        <GenericInput
                          label={null}
                          name="uname"
                          type="text"
                          placeholder="Username"
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap w-full flex-col items-start mt-5 pt-6 pr-2">
                    <h1 className="text-xl font-bold text-purple-950">
                      Contact Info
                    </h1>
                    <div className="border-[0.7px] border-purple-950 w-full"></div>
                    <div className="flex flex-col w-full mt-5 pl-10">
                      <GenericInput
                        label={null}
                        name="email"
                        type="email"
                        placeholder="Email"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                        onChange={handleChange}
                      />

                      <Form.Item label={null}>
                        <Select
                          name="sex"
                          value={formData.sex}
                          onChange={(e) => {
                            console.log(e);
                            setFormData((prevData) => ({
                              ...prevData,
                              sex: e,
                            }));
                          }}
                          className="h-10 w-full text-left"
                          placeholder="Sex"
                        >
                          <Select.Option value="male">Male</Select.Option>
                          <Select.Option value="female">Female</Select.Option>
                          <Select.Option value="LGBTQ">LGBTQ</Select.Option>
                          <Select.Option value="other">Other</Select.Option>
                        </Select>
                      </Form.Item>
                    </div>
                  </div>
                </div>
                {/* <Button htmlType="submit" className="ant-btn ant-btn-primary ">
              Update Profile
            </Button> */}
                <GenericButton
                  type="regular"
                  htmlType="submit"
                  onClick={() => {}}
                >
                  Update Profile
                </GenericButton>
              </Form>
            </div>
          </div>
        )}
      </div>
      <div className="hidden flex-1 w-full md:flex">
        <div className="w-1/4 border-r-2 border-purple-950 my-10 hidden md:block">
          <div className="h-full flex flex-col items-center py-5 pt-0">
            <CircleIconButton
              icon={<ArrowLeftOutlined />}
              tooltipTile="Go back"
              onClick={() => navigate(-1)}
              className="self-start justify-self-start ml-5"
            />
            <div className="flex flex-col gap-2 items-center">
              <Avatar
                size={90}
                icon={<UserOutlined />}
                className="bg-purple-950"
              />
              <Typography className="text-base font-extrabold">
                Kashish Rastogi
              </Typography>
              <div className="border-2 border-purple-950 bg-purple-950 px-3 py-1 rounded-md !text-white">
                <Typography className="!text-white font-bold">
                  Female
                </Typography>
              </div>
            </div>
            <Menu
              onClick={onClick}
              defaultSelectedKeys={["profile"]}
              mode="inline"
              items={items}
            />
          </div>
        </div>
        <div className="flex flex-1">
          <div className="flex flex-col py-9 px-5 items-start flex-1 h-full">
            <Form
              layout="vertical"
              onFinish={handleSubmit}
              className="w-full h-full flex flex-col items-start justify-between"
            >
              <div className="flex w-full flex-col items-start ">
                <div className="flex w-full flex-col items-start ">
                  <h1 className="text-xl font-bold text-purple-950">
                    Personal Info
                  </h1>
                  <div className="border-[0.7px] border-purple-950 w-full"></div>
                  <br />
                  <div className="flex flex-wrap w-full gap-10 pl-10 items-center">
                    <div className="flex items-center ">
                      <Avatar
                        size={120}
                        icon={<UserOutlined />}
                        className="bg-purple-950"
                      />
                    </div>

                    <div className="flex flex-col flex-1 w-full">
                      <div className="flex gap-2 w-full items-center">
                        <GenericInput
                          label={null}
                          name="fname"
                          type="text"
                          className="flex-1"
                          placeholder="Firstname"
                          rules={[
                            {
                              required: true,
                              message: "Please input your firstname!",
                            },
                          ]}
                          onChange={handleChange}
                        />
                        <GenericInput
                          label={null}
                          name="lname"
                          type="text"
                          className="flex-1"
                          placeholder="Lastname"
                          rules={[
                            {
                              required: true,
                              message: "Please input your lastname!",
                            },
                          ]}
                          onChange={handleChange}
                        />
                      </div>

                      <GenericInput
                        label={null}
                        name="uname"
                        type="text"
                        placeholder="Username"
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap w-full flex-col items-start mt-5">
                  <h1 className="text-xl font-bold text-purple-950">
                    Contact Info
                  </h1>
                  <div className="border-[0.7px] border-purple-950 w-full"></div>
                  <div className="flex flex-col w-full mt-5 pl-10">
                    <GenericInput
                      label={null}
                      name="email"
                      type="email"
                      placeholder="Email"
                      rules={[
                        {
                          required: true,
                          message: "Please input your email!",
                        },
                      ]}
                      onChange={handleChange}
                    />

                    <Form.Item label={null}>
                      <Select
                        name="sex"
                        value={formData.sex}
                        onChange={(e) => {
                          console.log(e);
                          setFormData((prevData) => ({
                            ...prevData,
                            sex: e,
                          }));
                        }}
                        className="h-10 w-full text-left"
                        placeholder="Sex"
                      >
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                        <Select.Option value="other">Other</Select.Option>
                      </Select>
                    </Form.Item>
                  </div>
                </div>
              </div>
              {/* <Button htmlType="submit" className="ant-btn ant-btn-primary ">
              Update Profile
            </Button> */}
              <GenericButton
                type="regular"
                htmlType="submit"
                onClick={() => {}}
              >
                Update Profile
              </GenericButton>
            </Form>
          </div>
        </div>
      </div>
    </WhiteContainer>
  );
};

export default UserProfile;
