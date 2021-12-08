import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";

function NavLinks({ colorchange }) {
  const [dropdown, setDropdown] = useState(false);
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
          <NavLink
            exact
            to="/"
            activeClassName=""
            className="navbar-link-hover font-semibold bg-transparent"
            activeStyle={{
              fontWeight: "bold",
              color: "#EFFD5F",
              // color: "#145DA0",
            }}
            onClick={scrollToTop}
          >
            <h1 className="mx-2 md:px-1 py-1 lg:mx-2 bg-transparent hoverColor block sm:inline-block navbar-link">
              Home
            </h1>
          </NavLink>
        </li>
        <li className="inline-block bg-transparent">
          <NavLink
            exact
            to="/about"
            activeClassName=""
            className="navbar-link-hover font-semibold bg-transparent"
            activeStyle={{
              fontWeight: "bold",
              color: "#EFFD5F",
              // color: "#145DA0",
            }}
            onClick={scrollToTop}
          >
            <h1 className="mx-2 md:px-1 py-1 lg:mx-2 bg-transparent hoverColor block sm:inline-block navbar-link">
              About
            </h1>
          </NavLink>
        </li>
        <li
          className="inline-block bg-transparent"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <NavLink
            exact
            to="/services"
            activeClassName=""
            className="navbar-link-hover font-semibold bg-transparent"
            activeStyle={{
              fontWeight: "bold",
              color: "#145DA0",
            }}
            onClick={scrollToTop}
          >
          <div className="navbar-link-hover font-semibold bg-transparent">
            <h1 className="mx-2 navbar-link-hover md:px-1 py-1 lg:mx-2 bg-transparent font-semibold cursor-pointer hoverColor block sm:inline-block customNav navbar-link">
              Services
            </h1>
          </div>
          
          {dropdown && <div classname="z-50"><Dropdown /></div>}
          </NavLink>
        </li>
        <li className="inline-block bg-transparent">
          <NavLink
            exact
            to="/media"
            activeClassName=""
            className="navbar-link-hover font-semibold bg-transparent"
            activeStyle={{
              fontWeight: "bold",
              color: "#EFFD5F",
            }}
            onClick={scrollToTop}
          >
            <h1 className="mx-2 md:px-1 py-1 lg:mx-2 bg-transparent hoverColor block sm:inline-block navbar-link">
              Media
            </h1>
          </NavLink>
        </li>
        <li className="inline-block bg-transparent">
          <NavLink
            exact
            to="/blog"
            activeClassName=""
            className="navbar-link-hover font-semibold bg-transparent"
            activeStyle={{
              fontWeight: "bold",
              color: "#EFFD5F",
            }}
            onClick={scrollToTop}
          >
            <h1 className="mx-2 md:px-1 py-1 lg:mx-2 bg-transparent hoverColor block sm:inline-block navbar-link">
              Blog
            </h1>
          </NavLink>
        </li>
        <li className="inline-block bg-transparent">
          <NavLink
            exact
            to="/contact_us"
            activeClassName=""
            className="navbar-link-hover font-semibold bg-transparent"
            activeStyle={{
              fontWeight: "bold",
              color: "#EFFD5F",
            }}
            onClick={scrollToTop}
          >
            <h1 className="mx-2 md:px-1 py-1 lg:mx-2 bg-transparent hoverColor block sm:inline-block navbar-link">
              Contact
            </h1>
          </NavLink>
        </li>
        
        {/* <li className="inline-block">
          <NavLink
            exact
            to="/login"
            activeClassName=""
            className="navbar-link-hover font-semibold"
            activeStyle={{
              fontWeight: "bold",
              color: "#ffa000",
            }}
            onClick={scrollToTop}
          >
            <h1 className="mx-2 md:px-1 py-1 lg:mx-2 hoverColor block sm:inline-block navbar-link">
              Login
            </h1>
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
}

export default NavLinks;
