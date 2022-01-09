import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const AppointmentBtn = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <div className="fixed top-72 -left-9 z-1000 rounded shadow transform rotate-90">
            {/* <Link className="w-full h-full flex justify-center items-center" onClick={scrollToTop} to="/appointment">
        <img
          className="w-5/6 h-5/6"
          src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png"
          alt="apt-logo"
        />
      </Link> */}
            <Link
                to="/appointment"
                onClick={scrollToTop}
                style={{ background: "#588325" }}
                className="text-white rounded-xl py-3 px-5 uppercase font-light hover:bg-green-600 text-sm md:text-base"
            >
                Book Now
            </Link>
        </div>
    );
};

export default AppointmentBtn;
