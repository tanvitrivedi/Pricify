import { EditOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Form, Input, Menu, Select, Typography } from "antd";
import React, { useState, useEffect } from "react";
import GenericButton from "../components/GenericButton";
import GenericInput from "../components/GenericInput";
import WhiteContainer from "../components/WhiteContainer";
import CustomButton from "../components/CustomButton";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./LandingPage.css";
import { Link, useNavigate } from "react-router-dom";
import { TemplateSelection } from "./TemplateSelection";
import Template1 from "../components/Template1";
import Template2 from "../components/Template2";

const LandingPage = () => {
  const navigate = useNavigate();
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
    getItem("Pricify", "sub1", <PlusOutlined />, []),
    getItem("Resources", "sub2", <PlusOutlined />, [
      getItem("Blogs", "5"),
      getItem("Tutorials", "6"),
    ]),

    getItem("Templates", "sub3", <PlusOutlined />, [
      getItem("Template 1", "9"),
      getItem("Template 2", "10"),
    ]),
  ];
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col">
        <div className=" flex-col w-screen h-screen flex justify-center items-center pl-20 pr-28 pb-10">
          {/* Content for the second container */}
          <div
            className="justify-center items-center flex  h-8 bg-[#2c2c31]
           shadow-lg p-5 mb-[-2rem] rounded-xl
           z-50 mt-3 gap-5 py-6"
          >
            <Menu
              onClick={onClick}
              style={{
                backgroundColor: "transparent",
                color: "white",
                borderBottom: "none", // Remove underline
              }}
              mode="horizontal"
              items={items}
            />

            <CustomButton
              type="button"
              title="SIGN IN"
              className="bg-[#222] text-xs h-8 rounded-md"
              onClick={() => navigate("/login")}
            />
          </div>
          <div
            className={
              "w-full justify-center items-center flex flex-col bg-[#221340] border-[1.7px] border-[#2e1b55] shadow-lg flex-1 h-[50vh] rounded-lg z-10 mt-2"
            }
          >
            <h1 className="text-middle text-8xl p-8 pt-0 pb-1 text-gray-300">
              Unleash Your Vision
            </h1>
            <h3 className="text-middle text-2xl p-4 pb-0 text-[#757981]">
              {" "}
              Elevate Your Website with Our Pricify SaaS Platform{" "}
            </h3>
            <h3 className="text-middle text-2xl mb-14 text-[#757981]">
              {" "}
              Choose, Customize, Captivate!
            </h3>
            <div className="flex gap-3 pt-5">
              <CustomButton
                className="bg-white text-black rounded-lg h-14 !text-sm"
                title="GET STARTED FOR FREE"
                onClick={() => navigate("/signup")}
              />
              {/* <CustomButton
                className=" bg-white/5 border border-white/10 !text-lg text-white rounded-lg h-14"
                title="GET A CUSTOM PLAN"
              /> */}
            </div>
          </div>
        </div>
        <div className="w-screen flex justify-center items-center p-14 pl-10 pb-60 flex-1 ">
          {/* Content for the second container */}
          <div className={"flex flex-col flex-1 h-full rounded-lg z-10"}>
            <div className="flex flex-col flex-1 items-center">
              <div
                className="p-[0.125rem] rounded-full justify-self-start
              self-center"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg,#ba8edc,#f377ab,#9795ff,#5756a5)",
                }}
              >
                <div className="bg-[#221340] text-gray-300 rounded-full p-2 px-10">
                  {" "}
                  NO CODING !{" "}
                </div>
              </div>

              <h1 className="text-[#221340] text-center text-4xl pt-7 font-bold">
                Build no code template
              </h1>
              <h1 className="text-[#221340] text-center text-4xl pt-1  font-bold">
                on your own data with Pricfy
              </h1>
            </div>
            <div className="flex mt-4 relative mt-14">
              <div className="bg-[#221340] p-10 shadow-2xl h-[75vh] z-10 rounded-2xl absolute w-[25%] bottom-[-5rem] flex flex-col justify-between">
                <div className="flex flex-col gap-5">
                  <h1 className="text-3xl text-white font-bold">Template 1</h1>
                </div>
                <CustomButton
                  title={"Select"}
                  onClick={() => navigate("/login")}
                />
              </div>
              <div className="h-[75vh] bg-[#D0C3EA] rounded-lg flex items-center justify-center p-14 w-[90%] ml-auto">
                <section class="plans__container">
                  <div class="plans">
                    <div class="planItem__container">
                      <div class="planItem planItem--free">
                        <div class="card">
                          <div class="card__header">
                            <div class="card__icon symbol symbol--rounded"></div>
                            <h2>Free</h2>
                          </div>
                          <div class="card__desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do
                          </div>
                        </div>
                        <div class="price">
                          $0<span>/ month</span>
                        </div>
                        <ul class="featureList">
                          <li>2 links</li>
                          <li>Own analytics platform</li>
                          <li class="disabled">Chat support</li>
                          <li class="disabled">Mobile application</li>
                          <li class="disabled">Unlimited users</li>
                        </ul>
                        <button class="button">Get Started</button>
                      </div>

                      <div class="planItem planItem--pro">
                        <div class="card">
                          <div class="card__header">
                            <div class="card__icon symbol"></div>
                            <h2>Pro</h2>
                          </div>
                          <div class="card__desc">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris
                          </div>
                        </div>
                        <div class="price">
                          $18<span>/ month</span>
                        </div>
                        <ul class="featureList">
                          <li>2 links</li>
                          <li>Own analytics platform</li>
                          <li>Chat support</li>
                          <li class="disabled">Mobile application</li>
                          <li class="disabled">Unlimited users</li>
                        </ul>
                        <button class="button button--pink">Get Started</button>
                      </div>

                      <div class="planItem planItem--entp">
                        <div class="card">
                          <div class="card__header">
                            <div class="card__icon"></div>
                            <h2>Enterprise</h2>
                          </div>
                          <div class="card__desc">
                            Nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor
                          </div>
                        </div>
                        <div class="price">Let's Talk</div>
                        <ul class="featureList">
                          <li>2 links</li>
                          <li>Own analytics platform</li>
                          <li>Chat support</li>
                          <li>Mobile application</li>
                          <li>Unlimited users</li>
                          <li>Customize Panel</li>
                        </ul>
                        <button class="button button--white">
                          Get Started
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="flex mt-40 relative">
              <div className=" bg-[#D0C3EA] rounded-lg flex items-center justify-center p-14 w-[90%] mr-auto">
                <Template2 />
              </div>
              <div className="bg-[#221340] shadow-2xl h-[75vh] z-10 rounded-2xl absolute w-[25%] bottom-[-5rem] right-0 flex flex-col justify-between p-10">
                <div className="flex flex-col gap-5">
                  <h1 className="text-3xl text-white font-bold">Template 2</h1>
                </div>
                <CustomButton
                  title={"Select"}
                  onClick={() => navigate("/login")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen justify-around bg-[#111] h-screen flex items-center p-10 ">
        <div className={"flex flex-col flex-1 z-10 text-gray-300"}>
          <p>
            <storng> Creator Studio </storng>
          </p>
          <p className={"pt-5"}> © 2023 Crator Studio </p>
          <p className={"pt-1"}> All rights are reserved. </p>
        </div>

        <div className={"flex flex-col flex-1 rounded-lg z-10 text-gray-300"}>
          <p> Get in touch </p>
          <p className={"pt-5"}>123 w. street</p>
          <p className={"pt-1"}> Los Angeles, CA, 90001</p>
        </div>

        <div className={"flex flex-col flex-1 rounded-lg z-10 text-gray-300"}>
          <p> Company </p>
          <p className={"pt-5"}> Home </p>
          <p className={"pt-1"}> Services</p>
          <p className={"pt-1"}> About Us</p>
          <p className={"pt-1"}> Help Center</p>
          <p className={"pt-1"}> Pricing Plans</p>
        </div>

        <div className={"flex flex-col flex-1 rounded-lg z-10 text-gray-300"}>
          <p> Follow us on Social Media</p>
          <p className={"pt-5"}>
            {" "}
            Stay connected and updated on our lastest projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
