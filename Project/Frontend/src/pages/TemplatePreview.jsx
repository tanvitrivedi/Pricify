import axios from "axios";
import { useEffect, useState } from "react";
import { Typography } from "antd";

import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import FrostedGlassContainer from "../components/FrostedGlassContainer";
import Template1 from "../components/Template1";
const { Paragraph, Text } = Typography;

export const TemplatePreview = () => {
  const [allCardStyles, setAllCardStyles] = useState(
    JSON.parse(localStorage.getItem("templateData"))
  );
  const [response, setResponse] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const id = location?.state?.templateId;
  const userData = JSON.parse(localStorage.getItem("auth-user") || "{}");
  // useEffect(() => {
  //   setAllCardStyles(JSON.parse(localStorage.getItem("templateData")));
  //   console.log(JSON.parse(localStorage.getItem("templateData")));
  // }, []);
  const sendAllCardStyles = async () => {
    try {
      const apiUrl = id
        ? `${process.env.REACT_APP_BACKEND_URL}/template/${id}`
        : `${process.env.REACT_APP_BACKEND_URL}/template`;
      const method = id ? "patch" : "post";

      const response = await axios[method](
        apiUrl,
        {
          template: { ...allCardStyles },
        },
        {
          headers: {
            Authorization: userData?.user?.token,
          },
        }
      );

      console.log("Template sent successfully:", response.data);
      setIsSaved(true);
      setResponse(response.data.template);
      // Handle success or navigation if needed
    } catch (error) {
      console.error("Error sending template:", error);
      // Handle error
    }
  };

  const htmlCode = `<iframe 
            title="Template Preview"
            src="${window.location.origin}/template/${id || response?._id}"
            style="height: 600px; width: 100%"
          >
          </iframe>`;

  return (
    <FrostedGlassContainer
      needOnlyGlass
      froastedContainerStyle={
        "justify-center items-center p-4 gap-5 flex-col h-[auto]"
      }
    >
      <div className="flex w-full justify-between">
        <Link to="/home" className="text-3xl text-white font-pacifico">
          Pricify
        </Link>
        <div className="flex gap-3">
          <CustomButton
            title="Save"
            className="font-extrabold"
            onClick={
              () => sendAllCardStyles() // Open the modal()
            }
          />
          <CustomButton
            title="Download"
            disabled={!isSaved}
            className="font-extrabold"
            onClick={
              () => setShowModal(true) // Open the modal()
            }
          />
          <CustomButton
            title="Back"
            className="font-extrabold"
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Template1 allCardStyles={allCardStyles} isPreview />
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center mt-5">
          <div className="bg-gray-900 p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Embedded Code</h2>
              <div className="flex gap-2">
                <CustomButton
                  onClick={() => {
                    // Copy the HTML code to the clipboard
                    navigator.clipboard.writeText(htmlCode);
                    // Show a notification or any UI indication that the code has been copied
                    alert("HTML code copied to clipboard!");
                  }}
                  title="Copy"
                />
                <CustomButton
                  onClick={() => setShowModal(false)}
                  title="Close"
                />
              </div>
            </div>

            <div className="p-4 rounded-md overflow-auto max-h-[500px]">
              {/* <pre className=" whitespace-pre-wrap text-left">{htmlCode}</pre> */}
              {id || response?._id ? (
                <Text code className="text-white">
                  {htmlCode}
                </Text>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </FrostedGlassContainer>
  );
};
