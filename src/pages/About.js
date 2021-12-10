import React from "react";
import AboutHead from "../components/About/AboutHead";
import BrandSlider from "../components/About/BrandSlider";
import WhyChooseUs from "../components/About/WhyChooseUs";
import AboutFacts from "../components/About/AboutFacts";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <AboutHead /> 
                    {/*About Content  */}
      <div className="p-5 flex">
        <img
          className="p-20"
          style={{
            width: "50rem",
            height: "40rem",
          }}
          src="/assets/about/about.jpeg"
          alt="About Home"
        />
        <div className="p-8 mt-16">
          <h2 className="text-5xl font-semibold titleColor">Our Philosophy</h2>
          <p className="mt-10 text-xl font-semibold w-4/5 text-gray-200 textColor">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum....
          </p>

          <p className="mt-10 font-normal text-md w-4/5 text-gray-200 textColor">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p className="mt-10 font-normal text-md w-4/5 text-gray-200 textColor">
            <ul class="list-inside sm:list-outside md:list-inside lg:list-outside xl:list-inside">
              <li className="flex">
                <img
                  className="w-4 h-4 m-1.5"
                  src="/assets/about/tick.png"
                  alt="tick"
                />
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </li>
              <li className="flex">
                <img
                  className="w-4 h-4 m-1.5"
                  src="/assets/about/tick.png"
                  alt="tick"
                />
               <p> Assumenda, quia temporibus eveniet a libero incidunt suscipit</p>
              </li>
              <li className="flex">
                <img
                  className="w-4 h-4 m-1.5"
                  src="/assets/about/tick.png"
                  alt="tick"
                />
               <p>   Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</p>
              </li>
            </ul>
          </p>

          <button className="bg-blue-500 hover:bg-blue-700 text-white mt-10 font-bold py-2 px-4 rounded">
            <Link to="/about">Learn More</Link>
          </button>
        </div>
      </div>
       {/*About Content Closed */}

       <AboutFacts/>
       <WhyChooseUs/>
      <BrandSlider />
    </>
  );
};

export default About;
