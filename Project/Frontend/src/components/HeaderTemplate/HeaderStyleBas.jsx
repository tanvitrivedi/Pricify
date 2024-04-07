import React, { useState } from "react";
import {
  Button,
  ColorPicker,
  Space,
  Layout,
  Menu,
  Input,
  Avatar,
  Card,
  Flex,
} from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  DownloadOutlined,
  ImportOutlined,
} from "@ant-design/icons";
import CustomButton from "../CustomButton";
import HeaderMenu from "./HeaderStyleBas";

const { Meta } = Card;
const { Header, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const HeaderMenuBas = ({ cardStyle, setCardStyle }) => {
  const [current, setCurrent] = useState("header");
  const [showHeaderCard, setShowHeaderCard] = useState(false); // New state to control card visibility

  const handleColorChange = (color) => {
    const backgroundColor = `rgb(${color?.metaColor?.r}, ${color?.metaColor?.g}, ${color?.metaColor?.b})`;
    console.log("------. backG", backgroundColor);
    setCardStyle({
      ...cardStyle,
      heading: { ...cardStyle.heading, color: backgroundColor },
    });
  };

  const handleHeadingFontSizeChange = (e) => {
    setCardStyle({
      ...cardStyle,
      heading: { ...cardStyle.heading, fontSize: e.target.value + "px" },
    });
  };

  const handleHeadingStyleChange = (style) => {
    setCardStyle({
      ...cardStyle,
      heading: {
        ...cardStyle.heading,
        [style]: !cardStyle.heading[style],
      },
    });
  };

  const handleHeadingCaseChange = (e) => {
    console.log("e", e.target.value);
    setCardStyle({
      ...cardStyle,
      heading: {
        ...cardStyle.heading,
        textTransform: e.target.value,
      },
    });
  };

  const handleFontFamilyChange = (e) => {
    console.log("e", e.target.value);
    setCardStyle({
      ...cardStyle,
      fontStyle: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setCardStyle({
        ...cardStyle,
        icon: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="bg-white p-4 rounded-lg border border-b-slate-50 transition-all ease-in-out delay-300 ">
      <strong>
        <h2 className="text-lg font-semibold text-left ml-4">Header Styler</h2>
      </strong>
      {/* Add various properties here */}
      <div className="p-4">
        {/* font style card */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col">
            <h3 className="font-semibold text-left">Font Style</h3>
            <div className="flex gap-3">
              <Card className="text-black text-left flex-1 border-b-slate-300">
                <Meta title="Aa" description="Sans-serif" />
              </Card>
              <Card className="text-black text-left flex-1">
                <Meta title="Aa" description="serif" />
              </Card>
              <Card className="text-black text-left flex-1">
                <Meta title="Aa" description="Monopose" />
              </Card>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <select
              id="fontStyle"
              onChange={handleFontFamilyChange}
              className="rounded-lg p-1 w-auto border-2 border-black-200 text-base flex-1"
            >
              <option value="sans-serif" selected>
                Sans-serif
              </option>
              <option value="serif">Serif</option>
              <option value="monospace">Monospace</option>
              <option value="times-new-roman">Times New Roman</option>
            </select>
          </div>
          {/* Font Size */}
          <div className="flex flex-col">
            <h3 className="text-left font-semibold">Size</h3>
            <div className="flex gap-3">
              <Button
                className={`border-slate-300 w-16 ${
                  Number(
                    cardStyle.heading.fontSize.substring(
                      0,
                      cardStyle.heading.fontSize.indexOf("px")
                    )
                  ) === 16
                    ? "!bg-[#100028] text-white"
                    : ""
                } `}
                type="small"
                ghost
                onClick={() =>
                  handleHeadingFontSizeChange({
                    target: { value: 16 },
                  })
                }
              >
                S
              </Button>
              <Button
                className={`border-slate-300 px-7 ${
                  Number(
                    cardStyle.heading.fontSize.substring(
                      0,
                      cardStyle.heading.fontSize.indexOf("px")
                    )
                  ) === 18
                    ? "!bg-[#100028] text-white"
                    : ""
                } `}
                type="medium"
                ghost
                onClick={() =>
                  handleHeadingFontSizeChange({
                    target: { value: 18 },
                  })
                }
              >
                M
              </Button>
              <Button
                className={`border-slate-300 px-7  ${
                  Number(
                    cardStyle.heading.fontSize.substring(
                      0,
                      cardStyle.heading.fontSize.indexOf("px")
                    )
                  ) === 20
                    ? "!bg-[#100028] text-white"
                    : ""
                } `}
                type="large"
                ghost
                onClick={() =>
                  handleHeadingFontSizeChange({
                    target: { value: 20 },
                  })
                }
              >
                L
              </Button>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start font-semibold">
            <h3> Font Color Chooser</h3>
            <ColorPicker
              defaultValue={{ rgb: cardStyle.backgroundColor }}
              onChange={handleColorChange}
              showText
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenuBas;
