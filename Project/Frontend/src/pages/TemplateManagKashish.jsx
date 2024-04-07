import {
  LogoutOutlined,
  PlusOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Card, Skeleton, Tooltip, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";
import { useNavigate } from "react-router-dom";
import CircleIconButton from "../components/CircleIconButton";
import CustomButton from "../components/CustomButton";
import WhiteContainer from "../components/WhiteContainer";

const TemplateManagement = () => {
  const navigate = useNavigate();
  return (
    <WhiteContainer containerStyle="flex-col">
      <div className="flex w-full justify-between p-10 border-b-[1px] border-purple-950">
        <h1 className="text-4xl text-purple-950 font-pacifico">Pricify</h1>
        <div className="flex gap-5">
          <CircleIconButton
            icon={<SettingOutlined />}
            tooltipTile="user-profile"
            onClick={() => navigate("/user-profile")}
          />
          <CircleIconButton
            icon={<LogoutOutlined />}
            tooltipTile="logout"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
      <div className="flex flex-col p-10 overflow-hidden">
        <CustomButton
          title={"Create"}
          icon={<PlusOutlined />}
          className="self-end "
          onClick={() => navigate("/select-template")}
        />

        <div className="flex flex-col overflow-y-auto mt-8 gap-3">
          {Array.from({ length: 8 }).map((d, i) => (
            <Card
              className="w-full flex p-3 flex-col md:flex-row"
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1631090164714-3336f1fa5315?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="h-24 w-full md:!w-56 !rounded-lg border"
                />
              }
            >
              <div className="flex justify-between flex-1 w-full flex-col md:flex-row">
                <div className="flex flex-col items-start flex-1">
                  <Typography className="font-bold text-lg flex-1">
                    Template Name kas
                  </Typography>
                  <Typography>Updated At: 01-25-2024 10:00 PM</Typography>
                </div>
                <div className="flex gap-4 flex-wrap justify-between mt-2 md:mt-0">
                  <CustomButton title="Edit" />
                  <CustomButton title="Delete" needOutlined />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </WhiteContainer>
  );
};

export default TemplateManagement;
