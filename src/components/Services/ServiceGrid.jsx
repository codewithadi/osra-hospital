import React from "react";
import { Link } from "react-router-dom";
import "./SopportService/support.css";

const ServiceGrid = ({ imgUrl, title, linkUrl }) => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className="w-full h-auto flex flex-col gap-2 border-2 shadow-md transition-all duration-500 transform hover:-translate-y-2 hover:border-green-400 p-2">
            <div className="w-full">
                <img className="w-full h-auto" src={imgUrl} alt="service" />
            </div>
            <div className="w-full flex flex-col justify-center pl-2 md:pl-5 pr-2 py-2 md:py-3">
                <h2
                    className="text-base md:text-2xl mb-3 md:mb-5"
                    style={{ color: "#3c0c1c" }}
                >
                    {title}
                </h2>
                <Link
                    onClick={scrollToTop}
                    to={linkUrl}
                    className="text-sm md:text-lg text-white py-3 px-4 font-light  bg-green-900 hover:bg-green-700 mb-2"
                >
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default ServiceGrid;
