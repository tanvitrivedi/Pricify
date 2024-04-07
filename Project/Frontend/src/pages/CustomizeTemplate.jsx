import React, { useEffect, useState } from "react";
import {
  Button,
  ColorPicker,
  Space,
  Layout,
  Menu,
  Input,
  Card,
  Segmented,
  Checkbox,
  Tag,
  Tooltip,
  Flex,
} from "antd";
import { ImportOutlined } from "@ant-design/icons";
// import HeaderStyleAdv from "../components/HeaderTemplate/HeaderStyleAdv";
// import HeaderStylePro from "../components/HeaderTemplate/HeaderStylePro";
// import HeaderStyleBas from "../components/HeaderTemplate/HeaderStyleBas";
// import BodyStyleBas from "../components/ButtonTemplate/BodyStyleBas";
import { useLocation, useNavigate } from "react-router-dom";
import "./CustomizeTemplate.css";
import CustomButton from "../components/CustomButton";
import Template1 from "../components/Template1";

const { Meta } = Card;
const { Header, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const CheckboxGroup = Checkbox.Group;

const CustomizeTemplate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const editStyles = location?.state?.editStyles;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCard, setSelectedCard] = useState("First");
  const [templateName, setTemplateName] = useState("");
  // firstCardServices: [{ title, isProvided }],
  const defaultFont = "Inter, sans-serif";
  const defaultBGColor = "#fff";
  const handleDeleteService = (index) => {
    setAllCardStyles((prevData) => {
      const updatedServices = prevData[
        selectedCard.toLowerCase()
      ].services.filter((d, i) => i !== index);
      console.log("---updatedServices", updatedServices);

      return {
        ...prevData,
        [selectedCard.toLowerCase()]: {
          ...prevData[selectedCard.toLowerCase()],
          services: updatedServices,
        },
      };
    });
  };
  const [allCardStyles, setAllCardStyles] = useState(
    editStyles || {
      templateName: "",
      fontStyle: defaultFont,
      headerTitleSize: "16px",
      subscribtionType: "monthly",
      currency: "$",
      first: {
        title: "Card 1",
        description: "This version contains all the features for",
        price: "10",
        services: [
          // {
          //   title: "2 links",
          //   included: true,
          // },
          // {
          //   title: "Own analytics platform",
          //   included: true,
          // },
          // {
          //   title: "Chat support",
          //   included: false,
          // },
          // {
          //   title: "Mobile application",
          //   included: false,
          // },
          // {
          //   title: "Unlimited users",
          //   included: false,
          // },
        ],
        bgColor: "#fff",
        btnText: "Buy",
        btnColor: "#ea4c89",
        btnLink: "https://www.google.com",
      },
      second: {
        title: "Card 2",
        description: "",
        price: "10",
        services: [],
        bgColor: "#fff",
        btnText: "Buy",
        btnColor: "#ea4c89",
        btnLink: "https://www.google.com",
      },
      third: {
        title: "Card 3",
        description: "",
        price: "10",
        services: [],
        bgColor: "#fff",
        btnText: "Buy",
        btnColor: "#ea4c89",
        btnLink: "https://www.google.com",
      },
    }
  );

  useEffect(() => {
    const allCardStylesFromLocalStorage = localStorage.getItem("templateData");
    console.log(
      "editStyles",
      editStyles,
      "allCardStylesFromLocalStorage",
      allCardStylesFromLocalStorage
    );
    if (allCardStylesFromLocalStorage) {
      const data = JSON.parse(allCardStylesFromLocalStorage);
      setAllCardStyles(data);
      console.log("data.templateName", data.templateName);
      setTemplateName(data.templateName);
    } else if (editStyles) {
      setAllCardStyles(editStyles);
      setTemplateName(editStyles.templateName);
    }
  }, []);

  // const [checkedList, setCheckedList] = useState([]);
  const checkedList = allCardStyles[selectedCard.toLowerCase()].services
    .filter((d) => d?.included === true)
    .map((d) => d?.title);
  const checkAll =
    allCardStyles[selectedCard.toLowerCase()].services.length ===
    checkedList.length;

  const indeterminate =
    checkedList.length > 0 &&
    checkedList.length <
      allCardStyles[selectedCard.toLowerCase()].services.length;

  const onChange = (list) => {
    console.log("===== onChange called");
    setAllCardStyles((prevData) => ({
      ...prevData,
      [selectedCard.toLowerCase()]: {
        ...prevData[selectedCard.toLowerCase()],
        services: prevData[selectedCard.toLowerCase()].services.map((d) => {
          if (list?.includes(d.title)) {
            d.included = true;
          } else {
            d.included = false;
          }
          return d;
        }),
      },
    }));
  };
  const onCheckAllChange = (e) => {
    setAllCardStyles((prevData) => {
      return {
        ...prevData,
        [selectedCard.toLowerCase()]: {
          ...prevData[selectedCard.toLowerCase()],
          services: e.target.checked
            ? prevData[selectedCard.toLowerCase()].services.map((d) => {
                d.included = true;
                return d;
              })
            : prevData[selectedCard.toLowerCase()].services.map((d) => {
                d.included = false;
                return d;
              }),
        },
      };
    });
  };

  const [cardStyle, setCardStyle] = useState({
    backgroundColor: "#ffffff",
    fontSize: "16px",
    fontStyle: "Inter",
    fontColor: "#000000",
    heading: {
      text: "Enterprise",
      color: "#000000",
      bold: false,
      italic: false,
      underline: false,
      iconBackground: "#ffffff",
      fontSize: "16px",
      textTransform: "capitalize",
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

  const [current, setCurrent] = useState("Header");
  const [showHeaderCard, setShowHeaderCard] = useState(false); // New state to control card visibility

  const [serviceInput, setServiceInput] = useState("");
  const handleClick = (e) => {
    setCurrent(e);
    setShowHeaderCard(true); // Close the header card when other tabs are clicked
  };

  const handleHeaderClick = () => {
    setCurrent("header");
    setShowHeaderCard(true);
  };

  const handleColorChange = (color) => {
    const backgroundColor = `rgb(${color?.metaColor?.r}, ${color?.metaColor?.g}, ${color?.metaColor?.b})`;
    console.log("------. backG", backgroundColor);
    setCardStyle({
      ...cardStyle,
      heading: { ...cardStyle.heading, color: backgroundColor },
    });
  };

  const handleStyleChange = ({ style, value }) => {
    console.log("style, value", style, value, selectedCard.toLowerCase());
    setAllCardStyles((prevData) => ({
      ...prevData,
      [selectedCard.toLowerCase()]: {
        ...prevData[selectedCard.toLowerCase()],
        [style]: value,
      },
    }));
  };

  return (
    <Layout className="h-screen bg-transparent">
      <div className="bg-[#221340] text-white p-4 rounded-lg flex justify-between m-5">
        <div className="flex items-center">
          <Space.Compact className="flex items-center justify-center">
            <Input
              required
              value={templateName}
              onChange={(e) => setTemplateName(e.target.value)}
              className="text-left font-bold border-white  w-32"
            />

            <Button
              className="bg-[#50328b] text-white"
              type="primary"
              icon={<ImportOutlined />}
              onClick={() =>
                setAllCardStyles((prevData) => ({
                  ...prevData,
                  templateName: templateName,
                }))
              }
            ></Button>
            {isSubmitted && !templateName ? (
              <span className="text-red-600 font-bold ml-3">
                Enter template name
              </span>
            ) : null}
          </Space.Compact>
        </div>
        <div className="flex gap-2">
          <CustomButton
            title="Preview"
            className="font-extrabold"
            onClick={() => {
              setIsSubmitted(true);
              if (templateName !== "") {
                localStorage.setItem(
                  "templateData",
                  JSON.stringify({ ...allCardStyles, templateName })
                );

                if (editStyles)
                  navigate("/preview-template", {
                    state: { templateId: editStyles._id },
                  });
                else navigate("/preview-template");
              }
            }}
          />
          <CustomButton
            title="Back"
            className="font-extrabold"
            onClick={() => navigate(-1)}
          />
        </div>
      </div>
      <div className="flex gap-4 h-full">
        {/*  */}
        <div className="flex flex-col h-full w-1/3 m-5 mr-0 mt-0 gap-5 !text-black">
          <Segmented
            className="!bg-[#221340] !border-[1.7px] !border-[#2e1b55] !shadow-lg !text-white 
            rounded-lg"
            options={["First", "Second", "Third"]}
            onChange={(value) => {
              setSelectedCard(value);
              console.log("---value", value);
            }}
            size="large"
            value={selectedCard}
          />
          <Segmented
            className="!bg-[#221340] !border-[1.7px] !border-[#2e1b55] !shadow-lg !text-white 
            rounded-lg"
            options={["Header", "Body", "Button"]}
            onChange={handleClick}
            size="large"
            value={current}
          />

          <div className="flex-1 h-full mb-5 transition-all ease-in-out delay-300 ">
            {current === "Header" ? (
              <div className="bg-white h-full p-6 rounded-lg border border-b-slate-50 transition-all ease-in-out delay-300 ">
                <strong>
                  <h2 className="text-lg font-semibold text-left">Header</h2>
                </strong>
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <h3 className="text-left font-semibold">Title</h3>
                    <Input
                      className="h-10 flex "
                      name="title"
                      placeholder="Title"
                      value={allCardStyles?.[selectedCard.toLowerCase()]?.title}
                      onChange={(e) =>
                        handleStyleChange({
                          style: e.target.name,
                          value: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-left">Font Style</h3>
                    <div className="flex justify-between items-center">
                      <select
                        id="fontStyle"
                        onChange={(e) => {
                          if (e.target.value !== "default")
                            setAllCardStyles({
                              ...allCardStyles,
                              fontStyle: e.target.value,
                            });
                          else
                            setAllCardStyles({
                              ...allCardStyles,
                              fontStyle: defaultFont,
                            });
                        }}
                        className="rounded-lg p-1 w-auto border-2 border-black-200 text-base flex-1"
                      >
                        <option value="default" selected>
                          Default
                        </option>
                        <option value="sans-serif">Sans-serif</option>
                        <option value="serif">Serif</option>
                        <option value="monospace">Monospace</option>
                        <option value="times-new-roman">Times New Roman</option>
                      </select>
                    </div>
                  </div>

                  {/* Font Size */}
                  <div className="flex flex-col">
                    <h3 className="text-left font-semibold">Size</h3>
                    <div className="flex gap-3">
                      <Button
                        className={`border-slate-300 w-16 ${
                          Number(
                            allCardStyles.headerTitleSize.substring(
                              0,
                              allCardStyles.headerTitleSize.indexOf("px")
                            )
                          ) === 16
                            ? "!bg-[#100028] text-white"
                            : ""
                        } `}
                        type="small"
                        ghost
                        onClick={() =>
                          setAllCardStyles({
                            ...allCardStyles,
                            headerTitleSize: "16px",
                          })
                        }
                      >
                        S
                      </Button>
                      <Button
                        className={`border-slate-300 w-16 ${
                          Number(
                            allCardStyles.headerTitleSize.substring(
                              0,
                              allCardStyles.headerTitleSize.indexOf("px")
                            )
                          ) === 18
                            ? "!bg-[#100028] text-white"
                            : ""
                        } `}
                        type="medium"
                        ghost
                        onClick={() =>
                          setAllCardStyles({
                            ...allCardStyles,
                            headerTitleSize: "18px",
                          })
                        }
                      >
                        M
                      </Button>
                      <Button
                        className={`border-slate-300 w-16  ${
                          Number(
                            allCardStyles.headerTitleSize.substring(
                              0,
                              allCardStyles.headerTitleSize.indexOf("px")
                            )
                          ) === 20
                            ? "!bg-[#100028] text-white"
                            : ""
                        } `}
                        type="large"
                        ghost
                        onClick={() =>
                          setAllCardStyles({
                            ...allCardStyles,
                            headerTitleSize: "20px",
                          })
                        }
                      >
                        L
                      </Button>
                      <Input
                        type="number"
                        id="headerTitleSize"
                        max={32}
                        onChange={(e) =>
                          setAllCardStyles({
                            ...allCardStyles,
                            headerTitleSize: e.target.value.toString() + "px",
                          })
                        }
                        value={Number(
                          allCardStyles.headerTitleSize.substring(
                            0,
                            allCardStyles.headerTitleSize.indexOf("px")
                          )
                        )}
                        className="rounded-lg p-1 border-2 border-black-200 flex-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : current === "Body" ? (
              <div className="flex flex-col h-full gap-3 bg-white p-6 rounded-lg border border-b-slate-50 transition-all ease-in-out delay-300 ">
                <h2 className="text-lg font-semibold text-left ">Body</h2>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <h3 className="text-left font-semibold">Description</h3>
                    <Input.TextArea
                      className="h-10 flex "
                      name="description"
                      placeholder="Description"
                      value={
                        allCardStyles?.[selectedCard.toLowerCase()]?.description
                      }
                      onChange={(e) =>
                        handleStyleChange({
                          style: e.target.name,
                          value: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="flex flex-col">
                    <h3 className="text-left font-semibold">Price</h3>
                    <Input
                      className="h-10 flex "
                      name="price"
                      placeholder="Price"
                      value={allCardStyles?.[selectedCard.toLowerCase()]?.price}
                      onChange={(e) =>
                        handleStyleChange({
                          style: e.target.name,
                          value: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-left font-semibold">Services</h3>
                    {console.log("----alll", allCardStyles)}
                    <Space.Compact style={{ width: "100%" }}>
                      <Input
                        className="h-10 flex "
                        name="service"
                        placeholder="Service"
                        value={serviceInput}
                        onChange={(e) => setServiceInput(e.target.value)}
                      />
                      <CustomButton
                        title="Add"
                        onClick={() => {
                          setAllCardStyles({
                            ...allCardStyles,
                            [selectedCard.toLowerCase()]: {
                              ...allCardStyles[selectedCard.toLowerCase()],
                              services: [
                                ...allCardStyles[selectedCard.toLowerCase()]
                                  .services,
                                { title: serviceInput, included: false },
                              ],
                            },
                          });
                          setServiceInput("");
                        }}
                      />
                    </Space.Compact>
                    <Checkbox
                      indeterminate={indeterminate}
                      onChange={onCheckAllChange}
                      checked={checkAll}
                    >
                      Check all
                    </Checkbox>
                    {/* <CheckboxGroup
                      options={allCardStyles[
                        selectedCard.toLowerCase()
                      ].services.map((d) => d.title)}
                      value={allCardStyles[selectedCard.toLowerCase()].services
                        .filter((d) => d.included === true)
                        .map((d) => d.title)}
                      onChange={onChange}
                      className="!text-black"
                    /> */}
                    <CheckboxGroup
                      options={allCardStyles[
                        selectedCard.toLowerCase()
                      ].services.map((d) => d.title)}
                      value={allCardStyles[selectedCard.toLowerCase()].services
                        .filter((d) => d.included === true)
                        .map((d) => d.title)}
                      onChange={onChange}
                      className="!text-black"
                    />

                    {/* Display delete button/icon next to each service */}
                    <Flex gap="4px 0" wrap="wrap">
                      {allCardStyles[selectedCard.toLowerCase()].services.map(
                        (service, index) => (
                          <Tag
                            key={index}
                            closable={true}
                            className="flex items-center gap-2"
                            style={{
                              userSelect: "none",
                            }}
                            onClose={() => handleDeleteService(index)}
                          >
                            {service.title}
                          </Tag>
                        )
                      )}
                    </Flex>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-left font-semibold">
                      Background Color
                    </h2>
                    <Space.Compact className="flex" style={{ width: "100%" }}>
                      <ColorPicker
                        className="h-10 "
                        value={
                          allCardStyles?.[selectedCard.toLowerCase()]?.bgColor
                        }
                        onChange={(color) =>
                          handleStyleChange({
                            style: "bgColor",
                            value: `rgb(${color?.metaColor?.r}, ${color?.metaColor?.g}, ${color?.metaColor?.b})`,
                          })
                        }
                        showText
                      />
                      <CustomButton
                        title="Default"
                        onClick={() =>
                          handleStyleChange({
                            style: "bgColor",
                            value: defaultBGColor,
                          })
                        }
                      />
                    </Space.Compact>
                  </div>
                </div>

                {/* Add various properties here */}
                <div className="p-4"></div>
              </div>
            ) : current === "Button" ? (
              <div className="bg-white p-6 h-full rounded-lg border border-b-slate-50 transition-all ease-in-out delay-300 ">
                <strong>
                  <h2 className="text-lg font-semibold text-left ">Button</h2>
                </strong>
                {/* Add various properties here */}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <h2 className="text-left  font-semibold">Text</h2>
                    <div className="flex">
                      <Input
                        className="h-10 flex "
                        name="btnText"
                        placeholder="Button Text"
                        value={
                          allCardStyles?.[selectedCard.toLowerCase()]?.btnText
                        }
                        onChange={(e) =>
                          handleStyleChange({
                            style: "btnText",
                            value: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-left gap-2 font-semibold">
                      Background Color
                    </h2>
                    <div className="flex">
                      <ColorPicker
                        defaultValue={
                          allCardStyles?.[selectedCard.toLowerCase()]?.btnColor
                        }
                        onChange={(color) =>
                          handleStyleChange({
                            style: "btnColor",
                            value: `rgb(${color?.metaColor?.r}, ${color?.metaColor?.g}, ${color?.metaColor?.b})`,
                          })
                        }
                        showText
                      />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-left gap-2 font-semibold">Link</h2>
                    <div className="flex">
                      <Input
                        className="h-10 flex "
                        name="btnLink"
                        placeholder="Link"
                        value={
                          allCardStyles?.[selectedCard.toLowerCase()]?.btnLink
                        }
                        onChange={(e) =>
                          handleStyleChange({
                            style: "btnLink",
                            value: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Second Rectangle */}
        <div className="flex-1 p-6 pt-0 h-full">
          <div className="items-center justify-center gap-5  bg-white shadow-xl p-4 rounded-lg flex flex-col h-full">
            {/* Add price templates here */}
            <div className="self-center">
              <Template1
                allCardStyles={allCardStyles}
                selectedCard={selectedCard.toLowerCase()}
              />
            </div>
            <h2 className="  text-black text-left font-extrabold">
              Card{" "}
              {selectedCard === "First"
                ? " 1"
                : selectedCard === "Second"
                ? "2"
                : "3"}
            </h2>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomizeTemplate;
