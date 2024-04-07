import React from "react";

const WhiteContainer = ({ children, customStyles, containerStyle }) => {
  return (
    <div
      className={`flex flex-1  justify-center items-center h-screen ${customStyles}`}
    >
      <div
        className={
          "flex bg-white shadow-lg h-[90vh] w-[90vw]  rounded-lg z-10 " +
          containerStyle
        }
      >
        {children}
      </div>
      <div className="h-[400px] w-[400px] bg-purple-950 absolute top-[-90px] left-[-136px] rounded-full"></div>
      <div className="h-64 w-64 bg-[#C24F63] absolute hidden md:block  md:bottom-72 md:right-80  bottom-[-180px] right-[-20px] rounded-full"></div>
      <div className="h-96 w-96 bg-purple-950 absolute hidden md:block md:bottom-12 md:right-16 bottom-0 right-[-220px] rounded-full"></div>
      <div className="h-[400px] w-[400px] bg-[#C24F63] absolute block md:hidden bottom-[-250px] right-[-96px] rounded-full"></div>
      <div className="h-[400px] w-[400px] bg-purple-950 absolute block md:hidden bottom-[-90px] right-[-300px] rounded-full"></div>
    </div>
  );
};

export default WhiteContainer;
