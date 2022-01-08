import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavbarLinks";
import "./navbarstyle.css";
// import TextAnim from "./TextAnim";

let isOpen = false;

const Toggle1 = (y, x) => {
    //   console.log("closed");
    y.style.display = "none";
    x[0].style.transform = "none";
    x[1].style.opacity = "100";
    x[2].style.transform = "none";
    isOpen = false;
};
const Toggle2 = (y, x) => {
    //   console.log("open");
    y.style.display = "block";
    y.style.animation = "fade-in 1s ease-in";
    x[0].style.transform = "rotate(-45deg) translate(-5px,6px)";
    x[0].style.transition = "transform 0.4s ease-in";
    x[1].style.opacity = "0";
    x[1].style.transition = "opacity 0.2s ease-in";
    x[2].style.transform = "rotate(45deg) translate(-5px,-6px)";
    x[2].style.transition = "transform 0.4s ease-in";
    isOpen = true;
};

const handleClick = () => {
    const y = document.getElementById("drop-down");
    const x = document.getElementById("nav_parent").children;
    isOpen ? Toggle1(y, x) : Toggle2(y, x);
};

export default function Navbar() {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 120) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    window.addEventListener("scroll", changeNavbarColor);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div
            className={
                !colorChange
                    ? `block headerText lg:px-12 md:px-8 px-4 lg:py-4 z-50 sticky top-0 md:bg-transparent bg-header shadow`
                    : `block headerText lg:px-12 md:px-8 px-4 lg:py-4 z-50 sticky top-0 bg-header shadow`
            }
        >
            <div className="h-10 md:h-10 flex justify-between justify-items-center bg-transparent">
                <div
                    className="flex justify-center items-center md:pt-2 bg-transparent"
                    // style={{ width: "27%" }}
                >
                    <div className="md:inline-flex md:-mt-5 text-sm md:text-base pr-2 select-none font-semibold">
                        AL-Osrah International Hospital
                    </div>

                    <div className="md:-mt-4 md:inline-flex bg-transparent">
                        <Link
                            className="w-full mr-1 bg-transparent flex justify-center items-center"
                            to="/"
                            onClick={scrollToTop}
                        >
                            <img
                                className="h-10 w-10 md:h-18 md:w-18"
                                src="/hospitalLogo.jpeg"
                                alt="brandlogo"
                            />
                        </Link>
                    </div>
                </div>

                <div
                    className="hidden sm:flex text-base md:text-lg py-1 md:pr-10 bg-transparent"
                    id=""
                >
                    <NavLinks />
                </div>
                <div
                    className="sm:hidden py-1 cursor-pointer bg-transparent"
                    id="nav_parent"
                    onClick={handleClick}
                >
                    <div id="div1" className="h-1 w-6 m-1 bg-blue-500"></div>
                    <div id="div2" className="h-1 w-6 m-1 bg-blue-500"></div>
                    <div id="div3" className="h-1 w-6 m-1 bg-blue-500"></div>
                </div>
            </div>
            <div
                className="hidden sm:hidden text-blue-600 text-sm py-3 bg-transparent"
                id="drop-down"
            >
                <NavLinks />
            </div>
        </div>
    );
}
