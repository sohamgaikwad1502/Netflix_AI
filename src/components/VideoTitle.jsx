import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-[3%] w-screen aspect-video absolute bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl text-white ">{title}</h1>
      <p className="py-6 text-lg w-1/4 text-white">{overview}</p>
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center bg-white hover:bg-gray-200 text-black text-xl font-medium py-3 px-8 rounded-md transition duration-200">
          <PlayIcon className="w-8 h-8 mr-2" />
          Play
        </button>
        <button
          className="bg-gray-500/50 text-xl text-white p-4 px-12 mx-2  rounded-lg cursor-pointer
         "
        >
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
