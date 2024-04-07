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

const HeaderStyleAdv = ({ cardStyle, setCardStyle }) => {
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
                className={`border-slate-300 w-16 ${
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
                className={`border-slate-300 w-16  ${
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
              <Input
                type="number"
                id="fontSize"
                onChange={handleHeadingFontSizeChange}
                value={Number(
                  cardStyle.heading.fontSize.substring(
                    0,
                    cardStyle.heading.fontSize.indexOf("px")
                  )
                )}
                className="rounded-lg p-1 border-2 border-black-200 flex-1"
              />
            </div>
          </div>
          {/* styling size and color */}
          <div className="flex flex-col">
            <h2 className="text-left font-semibold">Styling</h2>
            <div className="flex gap-3">
              <div className="flex flex-1 gap-3">
                <Button
                  className={
                    cardStyle.heading.bold
                      ? "bg-gray-400 w-16"
                      : "bg-gray-200 w-16"
                  }
                  onClick={() => handleHeadingStyleChange("bold")}
                >
                  <h2>
                    <b>B</b>
                  </h2>
                </Button>
                <Button
                  className={
                    cardStyle.heading.italic
                      ? "bg-gray-400 w-16"
                      : "bg-gray-200 w-16"
                  }
                  onClick={() => handleHeadingStyleChange("italic")}
                >
                  <h2>
                    <i>I</i>
                  </h2>
                </Button>
                <Button
                  className={
                    cardStyle.heading.underline
                      ? "bg-gray-400 w-16"
                      : "bg-gray-200 w-16"
                  }
                  onClick={() => handleHeadingStyleChange("underline")}
                >
                  <h2>
                    <u>U</u>
                  </h2>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-left gap-2 font-semibold">Color Picker </h2>
            <div className="flex">
              <ColorPicker
                defaultValue={{ rgb: cardStyle.backgroundColor }}
                onChange={handleColorChange}
                showText
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderStyleAdv;
