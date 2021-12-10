import React, { useState } from "react";
import MediaImages from "../components/Media/MediaImages";
import MediaVideo from "../components/Media/MediaVideo";

const Media = () => {
  const [dispImg, setDispImg] = useState(true);
  const [dispVideo, setDispVideo] = useState(false);
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
      <div className="py-4 flex justify-center items-center gap-6 md:gap-14 bg-green-300">
        <div
          onClick={(e) => {
            e.preventDefault();
            setDispImg(true);
            setDispVideo(false);
          }}
          className={
            dispImg
              ? "text-xl md:text-2xl font-semibold cursor-pointer text-blue-600"
              : "text-white text-xl md:text-2xl font-semibold cursor-pointer hover:text-blue-600"
          }
        >
          Photos
        </div>
        <div
          onClick={(e) => {
            e.preventDefault();
            setDispImg(false);
            setDispVideo(true);
          }}
          className={
            dispVideo
              ? "text-xl md:text-2xl font-semibold cursor-pointer text-blue-600"
              : "text-white text-xl md:text-2xl font-semibold cursor-pointer hover:text-blue-600"
          }
        >
          Videos
        </div>
      </div>
      {dispImg && <MediaImages />}
      {dispVideo && <MediaVideo />}
      
    </div>
  );
};

export default Media;
