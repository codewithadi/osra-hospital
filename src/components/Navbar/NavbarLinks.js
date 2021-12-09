import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";

function NavLinks({ colorchange }) {
  const [dropdown, setDropdown] = useState(false);
  //assigning location variable
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const onMouseEnter = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const onMouseLeave = () => {
    if (window.innerWidth < 768) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-transparent">
      <ul className="flex flex-col justify-center items-center md:bg-transparent md:inline-block bg-transparent">
        <li className="inline-block bg-transparent">
          <Link
            exact
            to="/"
            className={
              splitLocation[1] === ""
                ? "activeLink md:pb-11 border-b-2 border-blue-500 border-opacity-90 navbar-link-hover font-medium bg-transparent"
                : "navbar-link-hover font-medium bg-transparent"
            }
            onClick={scrollToTop}
          >
            <h1 className="uppercase mx-2 md:px-1 pt-1 pb-1 md:pb-11 lg:mx-2 border-b-2 border-opacity-0 hover:border-opacity-90 hover:border-blue-500 bg-transparent hoverColor block sm:inline-block navbar-link">
              Home
            </h1>
          </Link>
        </li>
        <li className="inline-block bg-transparent">
          <Link
            exact
            to="/about"
            className={
              splitLocation[1] === "about"
                ? "activeLink md:pb-11 border-b-2 border-blue-500 border-opacity-90 navbar-link-hover font-medium bg-transparent"
                : "navbar-link-hover font-medium bg-transparent"
            }
            onClick={scrollToTop}
          >
            <h1 className="uppercase mx-2 md:px-1 pt-1 pb-1 md:pb-11 lg:mx-2 border-b-2 border-opacity-0 hover:border-opacity-90 hover:border-blue-500 bg-transparent hoverColor block sm:inline-block navbar-link">
              About
            </h1>
          </Link>
        </li>
        <li
          className="inline-block bg-transparent"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
            exact
            to="/services"
            className={
              splitLocation[1] === "services"
                ? "activeLink md:pb-11 border-b-2 border-blue-500 border-opacity-90 navbar-link-hover font-medium bg-transparent"
                : "navbar-link-hover font-medium bg-transparent"
            }
            onClick={scrollToTop}
          >
            <div className="navbar-link-hover font-semibold bg-transparent">
              <h1 className="uppercase mx-2 md:px-1 pt-1 pb-1 md:pb-11 lg:mx-2 border-b-2 border-opacity-0 hover:border-opacity-90 hover:border-blue-500 bg-transparent hoverColor block sm:inline-block navbar-link">
                Services
              </h1>
            </div>

            {dropdown && (
              <div classname="z-50 shadow-md">
                <Dropdown />
              </div>
            )}
          </Link>
        </li>
        <li className="inline-block bg-transparent">
          <Link
            exact
            to="/media"
            className={
              splitLocation[1] === "media"
                ? "activeLink md:pb-11 border-b-2 border-blue-500 border-opacity-90 navbar-link-hover font-medium bg-transparent"
                : "navbar-link-hover font-medium bg-transparent"
            }
            onClick={scrollToTop}
          >
            <h1 className="uppercase mx-2 md:px-1 pt-1 pb-1 md:pb-11 lg:mx-2 border-b-2 border-opacity-0 hover:border-opacity-90 hover:border-blue-500 bg-transparent hoverColor block sm:inline-block navbar-link">
              Media
            </h1>
          </Link>
        </li>
        <li className="inline-block bg-transparent">
          <Link
            exact
            to="/blog"
            className={
              splitLocation[1] === "blog"
                ? "activeLink md:pb-11 border-b-2 border-blue-500 border-opacity-90 navbar-link-hover font-medium bg-transparent"
                : "navbar-link-hover font-medium bg-transparent"
            }
            onClick={scrollToTop}
          >
            <h1 className="uppercase mx-2 md:px-1 pt-1 pb-1 md:pb-11 lg:mx-2 border-b-2 border-opacity-0 hover:border-opacity-90 hover:border-blue-500 bg-transparent hoverColor block sm:inline-block navbar-link">
              Blog
            </h1>
          </Link>
        </li>
        <li className="inline-block bg-transparent">
          <Link
            exact
            to="/contact"
            className={
              splitLocation[1] === "contact"
                ? "activeLink md:pb-11 border-b-2 border-blue-500 border-opacity-90 navbar-link-hover font-medium bg-transparent"
                : "navbar-link-hover font-medium bg-transparent"
            }
            onClick={scrollToTop}
          >
            <h1 className="uppercase mx-2 md:px-1 pt-1 pb-1 md:pb-11 lg:mx-2 border-b-2 border-opacity-0 hover:border-opacity-90 hover:border-blue-500 bg-transparent hoverColor block sm:inline-block navbar-link">
              Contact
            </h1>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
