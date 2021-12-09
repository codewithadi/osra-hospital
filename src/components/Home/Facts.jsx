import React from "react";
import "../../App.css";

const Facts = () => {
  return (
    <div className="w-full relative" style={{ height: "40vh" }}>
      <img
        className="h-full w-full bg-cover bg-center"
        style={{ objectFit: "cover" }}
        src="/assets/slider/sliderImg1.jpg"
        alt="prod1"
      />
      <div className="w-full h-full main-dark-bg bg-black opacity-30"></div>
      <div className="main-text-fact bg-transparent text-grey-300">
        <h1 className="text-white text-center font-semibold text-3xl md:text-2xl bg-transparent mt-20">
          Serving the World <br />
          <i>since 1985</i>
        </h1>
        
        <div className="flex my-4">
          <div className="text-lg">
            <h2 className="text-center text-blue-700 font-bold text-5xl">
              912+
            </h2>
            <h3 className="text-white font-semibold text-lg mx-8">
              Successful Surgeries
            </h3>
          </div>

          <div className="text-lg">
            <h2 className="text-center text-blue-700 font-bold text-5xl">
              912+
            </h2>
            <h3 className="text-white font-semibold text-lg mx-8">
              Successful Surgeries
            </h3>
          </div>

          <div className="text-lg">
            <h2 className="text-center text-blue-700 font-bold text-5xl">
              912+
            </h2>
            <h3 className="text-white font-semibold text-lg mx-8">
              Successful Surgeries
            </h3>
          </div>

          <div className="text-lg">
            <h2 className="text-center text-blue-700 font-bold text-5xl">
              912+
            </h2>
            <h3 className="text-white font-semibold text-lg mx-8">
              Successful Surgeries
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facts;
