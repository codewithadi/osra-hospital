import React, { useRef, useState } from "react";
import {
    ControlledMenu,
    MenuItem,
    MenuButton,
    SubMenu,
} from "@szhsin/react-menu";
import { Link, useLocation } from "react-router-dom";
import "@szhsin/react-menu/dist/core.css";
import "@szhsin/react-menu/dist/index.css";

const TestDrop = () => {
    const ref = useRef(null);
    const [state, setState] = useState();

    {
        /* <div ref={ref} onMouseEnter={() => setState('open')}>
    Hover to Open
</div> */
    }
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <Link
                exact
                to="/services"
                className={
                    splitLocation[1] === "services"
                        ? "activeLink md:pb-10 border-b-2 border-blue-500 border-opacity-90 navbar-link-hover font-medium bg-transparent"
                        : "navbar-link-hover font-medium bg-transparent"
                }
                onClick={scrollToTop}
                ref={ref}
                onMouseEnter={() => setState("open")}
                // onMouseLeave={() => setState("closed")}
            >
                <h1 className="uppercase mx-2 md:px-1 pt-1 pb-1 md:pb-10 lg:mx-2 border-b-2 border-opacity-0 hover:border-opacity-90 hover:border-blue-500 bg-transparent hoverColor block sm:inline-block navbar-link">
                    Services
                </h1>
            </Link>
            <ControlledMenu
                state={state}
                anchorRef={ref}
                onMouseLeave={() => setState("closed")}
                onClose={() => setState("closed")}
            >
                <MenuItem>
                    <Link to="/departments">Departments</Link>
                </MenuItem>
                <SubMenu label="Clinics">
                    <MenuItem>about.css</MenuItem>
                    <MenuItem>home.css</MenuItem>
                    <MenuItem>index.css</MenuItem>
                </SubMenu>
                <MenuItem>
                    <Link to="/insurance">Insurance</Link>
                </MenuItem>
            </ControlledMenu>
        </div>
    );
};

export default TestDrop;
