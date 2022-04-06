import React from "react";
import MediaGrid from "./MediaGrid";
import ReactPlayer from "react-player";

const MediaImages = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center items-center py-7 px-2 md:px-6">
      <div className="md:col-span-2 overflow-hidden ">
        <img
          className="w-full h-full transform transition-all duration-700 hover:scale-110"
          src="assets/igdata/post_latest1.jpg"
          alt="media"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-6">
        <MediaGrid imgUrl="assets/igdata/post_latest2.jpg" />
        <MediaGrid imgUrl="assets/igdata/post_latest3.jpg" />
        <MediaGrid imgUrl="assets/igdata/post_latest4.jpg" />
        <MediaGrid imgUrl="assets/igdata/post_latest5.jpg" />
      </div>

      {/* 2nd row */}
      <div className="md:col-span-2 overflow-hidden ">
        <div className="overflow-hidden">
          <ReactPlayer
            className=""
            url="assets/igdata/vid_latest4.mp4"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-6">
        <div className="overflow-hidden">
          <ReactPlayer
            className=""
            url="assets/igdata/vid_latest5.mp4"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <div className="overflow-hidden">
          <ReactPlayer
            className=""
            url="assets/igdata/vid_latest6.mp4"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <div className="overflow-hidden">
          <ReactPlayer
            className=""
            url="assets/igdata/vid_latest7.mp4"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <div className="overflow-hidden">
          <ReactPlayer
            className=""
            url="assets/igdata/vid_latest8.mp4"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>

      {/* 3rd row */}
      <div className="md:col-span-2 overflow-hidden ">
        <img
          className="w-full h-full transform transition-all duration-700 hover:scale-110"
          src="assets/igdata/post_latest6.jpg"
          alt="media"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-6">
        <MediaGrid imgUrl="assets/igdata/post_latest7.jpg" />
        <MediaGrid imgUrl="assets/igdata/post_latest8.jpg" />
        {/* <MediaGrid imgUrl="assets/igdata/post_latest9.jpg" /> */}
        <div className="overflow-hidden">
          <ReactPlayer
            className=""
            url="assets/igdata/vid_latest9.mp4"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <div className="overflow-hidden">
          <ReactPlayer
            className=""
            url="assets/igdata/vid_latest2.mp4"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>

      {/* 4th row */}
      <div className="md:col-span-2 overflow-hidden ">
        <div className="overflow-hidden">
          <ReactPlayer
            className=""
            url="assets/igdata/vid_latest1.mp4"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-6">
        <MediaGrid imgUrl="assets/igdata/post_latest10.jpg" />
        <MediaGrid imgUrl="assets/igdata/post_latest11.jpg" />
        <MediaGrid imgUrl="assets/igdata/post_latest12.jpg" />
        <div className="overflow-hidden">
          <ReactPlayer
            className=""
            url="assets/igdata/vid_latest3.mp4"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>

      

      {/* 5th row  */}
      <div className="md:col-span-2 overflow-hidden ">
        <img
          className="w-full h-full transform transition-all duration-700 hover:scale-110"
          src="assets/igdata/post1.jpg"
          alt="media"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-6">
        <div className="overflow-hidden">
          <ReactPlayer
            className=""
            url="assets/igdata/vid1.mp4"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <div className="overflow-hidden">
          <ReactPlayer
            className=""
            url="assets/igdata/vidosra1.mp4"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <div className="overflow-hidden">
          <ReactPlayer
            className=""
            url="assets/igdata/vidosra2.mp4"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <MediaGrid imgUrl="assets/igdata/post2.jpg" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-6">
        <div className="overflow-hidden">
          <ReactPlayer
            className=""
            url="assets/igdata/vid2.mp4"
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
        <MediaGrid imgUrl="assets/igdata/post3.jpg" />
        <MediaGrid imgUrl="assets/igdata/post4.jpg" />
        <MediaGrid imgUrl="assets/igdata/post5.jpg" />
      </div>
      <div className="md:col-span-2 overflow-hidden">
        <img
          className="w-full h-full transform transition-all duration-700 hover:scale-110"
          src="assets/igdata/post8.jpg"
          alt="media"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-span-2 gap-6">
        <MediaGrid imgUrl="assets/igdata/post6.jpg" />
        <MediaGrid imgUrl="assets/igdata/post7.jpg" />
      </div>
    </div>
  );
};

export default MediaImages;
