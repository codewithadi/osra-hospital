import React from "react";
import Slider from "../components/Home/Slider/Slider";
import Department from "../components/Home/Department/Department";
import FindSection from "../components/Home/FindSection/FindSection";

const Home = () => {
  return (
    <div>
      <Slider />
      <Department />
      <FindSection />
    </div>
  );
};

export default Home;
