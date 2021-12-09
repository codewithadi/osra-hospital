import React from "react";
import Slider from "../components/Home/Slider/Slider";
import Department from "../components/Home/Department/Department";
import FindSection from "../components/Home/FindSection/FindSection";
import Stories from "../components/Home/Stories";
import Facts from "../components/Home/Facts";

const Home = () => {
  return (
    <div>
        <Slider />
        <FindSection />
        <Facts/>
        <Department />
        <Stories/>
    </div>
  );
};

export default Home;
