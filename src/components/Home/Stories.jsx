import React from "react";

const Stories = () => {
  return (
    <div className="bg-gray-200">
      <div className="p-2 my-6 text-center">
        <h2 className="mt-12 text-4xl font-medium">Read New Stories</h2>
        <p className="text-lg my-4 text-gray-500">
          Behind the word mountains, far from the countries Vokalia and
          Consonantia
        </p>
        <div className="flex justify-center items-center w-full">
          <div className="h-1 w-16 bg-blue-500"></div>
        </div>
      </div>
      {/* content */}
      {/* content 1 */}
      <div className="px-2 grid grid-cols-1 gap-6 md:grid-cols-3 md:px-20 justify-center">
        <div className="p-2">
          <img className="h-48" src="/assets/home-stories/s1.jpg" alt="weweew"/>
        </div>
        <div className="p-2">
          <img className="h-48" src="/assets/home-stories/s1.jpg" alt="weweew"/>
        </div>
        <div className="p-2">
          <img className="h-48" src="/assets/home-stories/s1.jpg" alt="weweew"/>
        </div>
      </div>

      <div>

      </div>
    </div>
  );
};

export default Stories;
