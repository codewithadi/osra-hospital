import React from "react";

const TopBar = () => {
  return (
    <div className="w-full h-9 flex justify-end items-center bg-blue-200 px-3 md:px-6 z-100 shadow-md">
      <a
        className="py-2 px-6 mr-4 bg-blue-600 text-white font-semibold uppercase"
        href="tel:011431111"
      >
        Emergency: 011-431-111
      </a>
      <form className="px-6 ">
        <select className="p-1 text-center outline-none">
          <option value="english">English</option>
          {/* <option></option> */}
        </select>
      </form>
    </div>
  );
};

export default TopBar;
