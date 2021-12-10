import React from "react";

const Media = () => {
  return (
    <div>
      <div
        className="bg-center bg-cover"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1576766125535-b04e15fd0273?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80")`,
          width: "100%",
          height: "55vh",
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
          <div className="text-center font-semibold text-white text-4xl md:text-7xl">
            <h1 className="mb-7">Media</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;
