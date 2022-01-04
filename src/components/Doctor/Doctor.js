import React, { useState } from "react";
import SingleDoctor from "./SingleDoctor";

const Doctor = () => {
    const [search, setSearch] = useState("");
    return (
        <div className="py-2 px-2 flex flex-col justify-center items-center">
            <div className="w-full md:w-1/2 flex mb-5">
                <input
                    className="block w-full px-4 py-2 text-black shadow-md bg-gray-100 border-none rounded-md dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Enter Doctor Name"
                    required
                />
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="px-4 py-2 transition-colors duration-700 ease-in-out font-semibold text-white transform bg-blue-500 rounded hover:bg-gray-900 hover:text-white focus:outline-none focus:bg-gray-700"
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                <SingleDoctor />
                <SingleDoctor />
                <SingleDoctor />
                <SingleDoctor />
            </div>
        </div>
    );
};

export default Doctor;
