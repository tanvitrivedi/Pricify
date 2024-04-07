import {
  LogoutOutlined,
  PlusOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Card, Skeleton, Tooltip, Typography } from "antd";
import Meta from "antd/es/card/Meta";
import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CircleIconButton from "../components/CircleIconButton";
import CustomButton from "../components/CustomButton";
import WhiteContainer from "../components/WhiteContainer";
import Template1Img from "../assets/Template1.png";

const TemplateManagement = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("auth-user") || "{}");

  const [templates, setTemplates] = useState([]);
  const fetchTemplates = (userId) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/template/${userId}`, {
        headers: {
          Authorization: userData?.user?.token,
        },
        params: {
          sortBy: "updatedAt",
          sortOrder: "desc",
        },
      })
      .then((response) => {
        console.log("------->", response.data);
        setTemplates(response.data.templates);
      })
      .catch((error) => {
        console.error("Error fetching templates:", error);
      });
  };

  const deleteTemplate = (templateId) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_URL}/template/${templateId}`, {
        headers: {
          Authorization: userData?.user?.token,
        },
      })
      .then((response) => {
        console.log("Template deleted successfully");
        // Fetch templates again after deletion
        fetchTemplates(userData?.user?.userId);
      })
      .catch((error) => {
        console.error("Error deleting template:", error);
      });
  };

  useEffect(() => {
    if (localStorage.getItem("templateData")) {
      localStorage.removeItem("templateData");
    }
    if (userData?.user?.userId) {
      fetchTemplates(userData?.user?.userId);
    } else {
      console.error("User ID not found in local storage");
    }
  }, []);

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
          {templates.map((template, index) => (
            <Card
              key={index}
              className="w-full flex p-3 flex-col md:flex-row"
              cover={
                <img
                  alt="example"
                  src={Template1Img}
                  className="h-24 w-full md:!w-56 !rounded-lg border"
                />
              }
            >
              <div className="flex justify-between flex-1 w-full flex-col md:flex-row">
                <div className="flex flex-col items-start flex-1">
                  <Typography className="font-bold text-lg flex-1">
                    {template.templateName}
                  </Typography>
                  <Typography>
                    Updated At:{" "}
                    {moment(template.updatedAt).format("MM-DD-YYYY HH:MM:ss")}
                  </Typography>
                </div>
                <div className="flex gap-4 flex-wrap justify-between mt-2 md:mt-0">
                  <CustomButton
                    title="Edit"
                    onClick={() =>
                      navigate("/edit-template", {
                        state: { editStyles: template },
                      })
                    }
                  />
                  <CustomButton
                    title="Delete"
                    needOutlined
                    onClick={() => deleteTemplate(template._id)}
                  />
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
