import React from "react";

const TopBar = () => {
    return (
        <div className="w-full h-7 flex justify-end items-center px-3 md:px-6 z-100 shadow-md">
            <a
                className="p-1 md:py-1 md:px-6 mr-4 bg-blue-600 text-sm md:text-base text-white font-semibold uppercase"
                href="tel:011431111"
            >
                Emergency: 011-431-111
            </a>
            <form className="px-4">
                <select className="text-center outline-none">
                    <option value="en">English</option>
                    {/* <option></option> */}
                </select>
            </form>
        </div>
    );
};

export default TopBar;
