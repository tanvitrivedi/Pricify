import React from "react";
import { Link } from "react-router-dom";

const FrostedGlassContainer = ({
  children,
  customStyles,
  containerStyle,
  needOnlyGlass = false,
  froastedContainerStyle = "",
}) => {
  return (
    <div
      className={`flex flex-1  justify-center items-center h-screen max-w-[100vw] max-h-[100vh]  ${customStyles}`}
    >
      {needOnlyGlass ? (
        <div
          className={
            "flex backdrop-blur-xl bg-white/10 shadow-lg h-[90vh] w-[90vw] rounded-lg z-10 overflow-hidden" +
            froastedContainerStyle
          }
        >
          {children}
        </div>
      ) : (
        <div className="flex backdrop-blur-xl bg-white/10 shadow-lg h-[90vh] w-[90vw] rounded-lg z-10 overflow-hidden">
          <div
            className={
              "bg-white max-w-full md:max-w-[33.3%] rounded-lg flex flex-col items-start" +
              containerStyle
            }
          >
            {children}
          </div>
          <div className="flex-col items-end justify-end flex-1 p-10 hidden md:flex">
            <Link to="/home" className="text-7xl text-white font-pacifico">
              Pricify
            </Link>
          </div>
        </div>
      )}
      <div className="h-[400px] w-[400px] bg-purple-950 absolute top-[-90px] left-[-136px] rounded-full"></div>
      <div className="h-64 w-64 bg-[#C24F63] absolute hidden md:block  md:bottom-72 md:right-80  bottom-[-180px] right-[-20px] rounded-full"></div>
      <div className="h-96 w-96 bg-purple-950 absolute hidden md:block md:bottom-12 md:right-16 bottom-0 right-[-220px] rounded-full"></div>
      <div className="h-[400px] w-[400px] bg-[#C24F63] absolute block md:hidden bottom-[-250px] right-[-96px] rounded-full"></div>
      <div className="h-[400px] w-[400px] bg-purple-950 absolute block md:hidden bottom-[-90px] right-[-300px] rounded-full"></div>
    </div>
  );
};

export default FrostedGlassContainer;
