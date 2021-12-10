import React from "react";
import Slider from "../components/Home/Slider/Slider";
import Department from "../components/Home/Department/Department";
import FindSection from "../components/Home/FindSection/FindSection";
import Stories from "../components/Home/Stories";
import SearchDoctor from "../components/Home/SearchDoctor/SearchDoctor";

const Home = () => {
  return (
    <div>
        <Slider />
        <FindSection />
        <Department />
        <SearchDoctor />
        <Stories/>
    </div>
  );
};

export default Home;
