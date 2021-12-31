import React from "react";
import { Link } from "react-router-dom";

const AppointmentBtn = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="fixed w-14 h-14 top-72 right-2 z-1000 rounded shadow bg-blue-400">
      <Link className="w-full h-full flex justify-center items-center" onClick={scrollToTop} to="/appointment">
        <img
          className="w-5/6 h-5/6"
          src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png"
          alt="apt-logo"
        />
      </Link>
    </div>
  );
};

export default AppointmentBtn;
