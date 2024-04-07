import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CircleIconButton from "../components/CircleIconButton";
import CustomButton from "../components/CustomButton";
import FrostedGlassContainer from "../components/FrostedGlassContainer";
import Template2 from "../components/Template2";
import "../components/Template1.css";

const Template1 = () => {
  return (
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
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
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris
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
                Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
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
            <button class="button button--white">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TemplateSelection = () => {
  const [currentTemplate, setCurrentTemplate] = useState(1);
  const navigate = useNavigate();
  return (
    <FrostedGlassContainer
      needOnlyGlass
      froastedContainerStyle={
        "justify-center items-center p-4 gap-5 flex-col h-[auto]"
      }
    >
      <div className="flex w-full justify-between">
        <h1 className="text-3xl text-white font-pacifico">Pricify</h1>
        <div className="flex gap-3">
          <CustomButton
            title="Select"
            className="font-extrabold"
            onClick={() => navigate("/edit-template")}
          />
          <CustomButton
            title="Back"
            className="font-extrabold"
            onClick={() => navigate("/home")}
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <CircleIconButton
          icon={<ArrowLeftOutlined />}
          tooltipTile="Previous"
          filled
          btnClassName="text-xl"
          onClick={() =>
            setCurrentTemplate((prev) => (prev === 1 ? 1 : prev - 1))
          }
        />
        {currentTemplate === 1 ? <Template1 /> : <Template2 />}
        <CircleIconButton
          icon={<ArrowRightOutlined />}
          tooltipTile="Next"
          filled
          btnClassName="text-xl"
          onClick={() =>
            setCurrentTemplate((prev) => (prev === 2 ? 2 : prev + 1))
          }
        />
      </div>
    </FrostedGlassContainer>
  );
};
