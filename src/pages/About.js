import React from "react";
import BrandSlider from "../components/About/BrandSlider";

const About = () => {
  return (
    <div>
      {/* about-header.jpg */}
      <div
        className="bg-center bg-cover"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
          width: "100%",
          height: "55vh",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
          <div className="text-center font-semibold text-white text-4xl md:text-7xl">
            <h1 className="mb-7">About Us</h1>
          </div>
        </div>
      </div>
      <BrandSlider />
    </div>
  );
};

export default About;
