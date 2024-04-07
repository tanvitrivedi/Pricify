import React from "react";

const Frosted2 = ({ children, customStyles, containerStyle }) => {
  return (
    <div
      className={`flex flex-1 justify-center items-center h-screen ${customStyles}`}
    >
      <div className="flex bg-[#100028]/10 shadow-lg h-[90vh] w-[90vw] rounded-lg z-10 ">
        <div
          className={
            // #007bff
            // "bg-white max-w-full md:max-w-[33.3%] rounded-lg flex flex-col items-start" +
            "border-[1.7px] border-[#2e1b55] shadow-lg shadow-gray-300/35 backdrop bg-[#221340] max-w-full md:max-w-[33.3%] rounded-lg flex flex-col items-start" +
            containerStyle
          }
        >
          {children}
        </div>
        <div className="flex-col backdrop-blur-xl bg-white/10 items-end justify-end flex-1 p-10 hidden md:flex">
          <h1 className="text-7xl text-white font-pacifico">Pricify</h1>
        </div>
      </div>
      <div className="h-[400px] w-[400px] bg-purple-950 absolute top-[-90px] left-[-136px] rounded-full"></div>
      <div className="h-64 w-64 bg-[#C24F63] absolute hidden md:block  md:bottom-72 md:right-80  bottom-[-180px] right-[-20px] rounded-full"></div>
      <div className="h-96 w-96 bg-purple-950 absolute hidden md:block md:bottom-12 md:right-16 bottom-0 right-[-220px] rounded-full"></div>
      <div className="h-[400px] w-[400px] bg-[#C24F63] absolute block md:hidden bottom-[-250px] right-[-96px] rounded-full"></div>
      <div className="h-[400px] w-[400px] bg-purple-950 absolute block md:hidden bottom-[-90px] right-[-300px] rounded-full"></div>
    </div>
  );
};

export default Frosted2;
