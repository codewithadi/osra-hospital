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
      <div className="">
        <div className="grid gap-8 mx-20 justify-center grid-cols-1 md:grid-cols-3">
          <div className="">
            <img
              className="px-4"
              src="/assets/home-stories/s1.jpg"
              alt="weweew"
            />
          </div>
          <div className="">
            <img
              className="px-4"
              src="/assets/home-stories/s1.jpg"
              alt="weweew"
            />
          </div>
          <div className="">
            <img
              className="px-4"
              src="/assets/home-stories/s1.jpg"
              alt="weweew"
            />
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Stories;
