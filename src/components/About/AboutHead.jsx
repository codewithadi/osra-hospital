import React from "react";
import "./About.css";

const AboutHead = () => {
  return (
    <div className="w-full relative" style={{ height: "40vh" }}>
      <img
        className="h-full w-full bg-cover bg-center"
        style={{ objectFit: "cover" }}
        src="/assets/about/about1.jpg"
        alt="prod1"
      />
      <div className="w-full h-5/6 main-dark-bg-about bg-black opacity-30"></div>
      <div className="main-text-about bg-transparent text-grey-300">
        <h3 className="text-white font-semibold text-left text-4xl md:text-5xl bg-transparent mb-2">
          Why Us
        </h3>
        <div className="absolute text-2xl text-white font-light mt-20">Home / Why Us</div>
      </div>
    </div>
  );
};

export default AboutHead;
