import React, { useState } from "react";
import { Menu } from "antd";
import Icon from "@ant-design/icons";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const TemplateKas = () => {
  const [cardStyle, setCardStyle] = useState({
    backgroundColor: "#ffffff",
    fontSize: "16px",
    fontStyle: "font-sans",
    fontColor: "#000000",
    heading: {
      text: "Enterprise",
      color: "#000000",
      bold: false,
      italic: false,
      underline: false,
      iconBackground: "#ffffff",
    },
    feature1: {
      text: "Feature 1",
      color: "#000000",
      bold: false,
      italic: false,
      underline: false,
    },
    icon: null,
  });

  const handleColorChange = (e) => {
    setCardStyle({
      ...cardStyle,
      backgroundColor: e.target.value,
    });
  };

  const handleFontSizeChange = (e) => {
    setCardStyle({
      ...cardStyle,
      fontSize: e.target.value + "px",
    });
  };

  const handleFontStyleChange = (e) => {
    setCardStyle({
      ...cardStyle,
      fontStyle: e.target.value,
    });
  };

  const handleFontColorChange = (e) => {
    setCardStyle({
      ...cardStyle,
      fontColor: e.target.value,
    });
  };

  const handleHeadingChange = (e) => {
    setCardStyle({
      ...cardStyle,
      heading: {
        ...cardStyle.heading,
        text: e.target.value,
      },
    });
  };

  const handleHeadingColorChange = (e) => {
    setCardStyle({
      ...cardStyle,
      heading: {
        ...cardStyle.heading,
        color: e.target.value,
      },
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

  const handleIconBackgroundChange = (e) => {
    setCardStyle({
      ...cardStyle,
      heading: {
        ...cardStyle.heading,
        iconBackground: e.target.value,
      },
    });
  };

  const handleFeature1Change = (e) => {
    setCardStyle({
      ...cardStyle,
      feature1: {
        ...cardStyle.feature1,
        text: e.target.value,
      },
    });
  };

  const handleFeature1ColorChange = (e) => {
    setCardStyle({
      ...cardStyle,
      feature1: {
        ...cardStyle.feature1,
        color: e.target.value,
      },
    });
  };

  const handleFeature1StyleChange = (style) => {
    setCardStyle({
      ...cardStyle,
      feature1: {
        ...cardStyle.feature1,
        [style]: !cardStyle.feature1[style],
      },
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

  const [current, setCurrent] = useState("mail");
  const [showHeaderCard, setShowHeaderCard] = useState(false); // New state to control card visibility

  const handleClick = (e) => {
    console.log("----------------", e.key);
    setCurrent(e.key);
    setShowHeaderCard(true); // Close the header card when other tabs are clicked
  };

  const handleHeaderClick = () => {
    setCurrent("header");
    setShowHeaderCard(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#44326A] !text-black">
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        className="w-1/3 mb-2"
      >
        <Menu.Item key="header" onClick={handleHeaderClick}>
          <Icon type="mail" />
          Header
        </Menu.Item>
        <Menu.Item key="features">
          <Icon type="appstore" />
          Features
        </Menu.Item>
        <Menu.Item key="body">
          <Icon type="body" />
          Body
        </Menu.Item>
        <Menu.Item key="button">
          <Icon type="button" />
          Button
        </Menu.Item>
      </Menu>

      <div className="flex w-full justify-center">
        {showHeaderCard ? (
          <div className="bg-white p-8 rounded-lg shadow-m">
            <h1 className="text-2xl font-semibold mb-4 text-black justify-start">
              Font Styling
            </h1>
            {/*
            <div className="mb-4 !text-black flex justify-between">
              <label className="mr-2 !text-black">Background Color:</label>
              <input
                type="color"
                id="backgroundColor"
                value={cardStyle.backgroundColor}
                onChange={handleColorChange}
                className="rounded-lg p-1 "
              />
            </div>
          */}
            <div className="mb-4 flex justify-between">
              <select
                id="fontStyle"
                value={cardStyle.fontStyle}
                onChange={handleFontStyleChange}
                className="rounded-lg p-1 w-auto border-2 border-black-200"
              >
                <option value="font-sans">Sans-serif</option>
                <option value="font-serif">Serif</option>
                <option value="font-mono">Monospace</option>
              </select>
            </div>
            <div className="mb-4">
              <input
                type="number"
                id="fontSize"
                value={parseInt(cardStyle.fontSize)}
                onChange={handleFontSizeChange}
                className="rounded-lg p-1 border-2 border-black-200"
              />
            </div>
            <div className="mb-4 flex justify-between">
              <input
                type="color"
                id="fontColor"
                value={cardStyle.fontColor}
                onChange={handleFontColorChange}
                className="rounded-lg p-1"
              />
            </div>
            {current === "header" ? (
              <>
                <div className="mb-4 flex justify-between">
                  <label htmlFor="headingText" className="mr-2 !text-black">
                    Heading Text:
                  </label>
                  <input
                    type="text"
                    id="headingText"
                    value={cardStyle.heading.text}
                    onChange={handleHeadingChange}
                    className="rounded-lg p-1 border-2 border-black"
                  />
                </div>
                <div className="mb-4 flex justify-between">
                  <label htmlFor="headingColor" className="mr-2 !text-black">
                    Heading Color:
                  </label>
                  <input
                    type="color"
                    id="headingColor"
                    value={cardStyle.heading.color}
                    onChange={handleHeadingColorChange}
                    className="rounded-lg p-1"
                  />
                </div>
                <div className="mb-4 flex justify-between">
                  <label className="mr-2 !text-black">Heading Style:</label>
                  <button
                    className={
                      cardStyle.heading.bold
                        ? "bg-gray-400 mr-2"
                        : "bg-gray-200 mr-2"
                    }
                    onClick={() => handleHeadingStyleChange("bold")}
                  >
                    Bold
                  </button>
                  <button
                    className={
                      cardStyle.heading.italic
                        ? "bg-gray-400 mr-2"
                        : "bg-gray-200 mr-2"
                    }
                    onClick={() => handleHeadingStyleChange("italic")}
                  >
                    Italic
                  </button>
                  <button
                    className={
                      cardStyle.heading.underline
                        ? "bg-gray-400"
                        : "bg-gray-200"
                    }
                    onClick={() => handleHeadingStyleChange("underline")}
                  >
                    Underline
                  </button>
                </div>
              </>
            ) : null}
            <div className="mb-4 flex justify-between !text-black">
              <label htmlFor="iconBackground" className="mr-2 !text-black">
                Icon Background:
              </label>
              <input
                type="color"
                id="iconBackground"
                value={cardStyle.heading.iconBackground}
                onChange={handleIconBackgroundChange}
                className="rounded-lg p-1 "
              />
            </div>
            <div className="mb-4 flex justify-between !text-black">
              <label htmlFor="feature1Text" className="mr-2 !text-black">
                Feature 1 Text:
              </label>
              <input
                type="text"
                id="feature1Text"
                value={cardStyle.feature1.text}
                onChange={handleFeature1Change}
                className="rounded-lg p-1 border-2 border-black"
              />
            </div>
            <div className="mb-4 flex justify-between">
              <label htmlFor="feature1Color" className="mr-2 !text-black">
                Feature 1 Color:
              </label>
              <input
                type="color"
                id="feature1Color"
                value={cardStyle.feature1.color}
                onChange={handleFeature1ColorChange}
                className="rounded-lg p-1"
              />
            </div>
            <div className="mb-4 flex justify-between">
              <label className="mr-2 !text-black">Feature 1 Style:</label>
              <button
                className={
                  cardStyle.feature1.bold
                    ? "bg-gray-400 mr-2"
                    : "bg-gray-200 mr-2"
                }
                onClick={() => handleFeature1StyleChange("bold")}
              >
                Bold
              </button>
              <button
                className={
                  cardStyle.feature1.italic
                    ? "bg-gray-400 mr-2"
                    : "bg-gray-200 mr-2"
                }
                onClick={() => handleFeature1StyleChange("italic")}
              >
                Italic
              </button>
              <button
                className={
                  cardStyle.feature1.underline ? "bg-gray-400" : "bg-gray-200"
                }
                onClick={() => handleFeature1StyleChange("underline")}
              >
                Underline
              </button>
            </div>
            <div className="mb-4 !text-black flex justify-between">
              <label htmlFor="iconUpload" className="mr-2 !text-black">
                Upload Icon:
              </label>
              <input
                type="file"
                id="iconUpload"
                accept="image/*"
                onChange={handleImageUpload}
                className="rounded-lg p-1 "
              />
            </div>
          </div>
        ) : null}
        <div
          className="bg-white shadow-md rounded-md p-8"
          style={{
            backgroundColor: cardStyle.backgroundColor,
            fontSize: cardStyle.fontSize,
            fontFamily: cardStyle.fontStyle,
            color: cardStyle.fontColor,
          }}
        >
          {cardStyle.icon && (
            <img
              src={cardStyle.icon}
              alt="Uploaded Icon"
              className="mb-4"
              style={{ width: "100%", height: "25%" }}
            />
          )}
          <h2
            className="text-xl font-semibold mb-4"
            style={{
              color: cardStyle.heading.color,
              fontWeight: cardStyle.heading.bold ? "bold" : "normal",
              fontStyle: cardStyle.heading.italic ? "italic" : "normal",
              textDecoration: cardStyle.heading.underline
                ? "underline"
                : "none",
              backgroundColor: cardStyle.heading.iconBackground,
            }}
          >
            {cardStyle.heading.text}
          </h2>
          <p
            className="text-black mb-4"
            style={{
              color: cardStyle.feature1.color,
              fontWeight: cardStyle.feature1.bold ? "bold" : "normal",
              fontStyle: cardStyle.feature1.italic ? "italic" : "normal",
              textDecoration: cardStyle.feature1.underline
                ? "underline"
                : "none",
            }}
          >
            {cardStyle.feature1.text}
          </p>
          <div className="flex items-center justify-center mb-4">
            <span className="text-4xl font-semibold">$50</span>
            <span className="text-black ml-2">/month</span>
          </div>
          <ul className="text-black">
            <li className="mb-2">Feature 2</li>
            <li className="mb-2">Feature 3</li>
            <li className="mb-2">Feature 4</li>
          </ul>
          <button className="mt-6 bg-blue-500 hover:bg-blue-100 text-white font-semibold py-2 px-4 rounded-full">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateKas;
