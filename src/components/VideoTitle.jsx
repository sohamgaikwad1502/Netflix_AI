import React from "react";
import { PlayIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/25 to-transparent flex flex-col justify-center pl-12 md:pl-16 lg:pl-24">
      <div className="w-full md:w-2/3 lg:w-1/2 xl:w-2/5">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 drop-shadow-lg">
          {title}
        </h1>
        <p className="py-3 text-base md:text-lg text-white mb-6 max-w-3xl font-medium leading-relaxed line-clamp-3 drop-shadow-md">
          {overview}
        </p>
        <div className="flex items-center space-x-3">
          <button className="flex items-center justify-center bg-white hover:bg-opacity-80 text-black text-base md:text-lg font-medium py-2 md:py-3 px-6 md:px-8 rounded-md transition duration-200 cursor-pointer">
            <PlayIcon className="w-6 h-6 mr-2" />
            Play
          </button>
          <button className="flex items-center justify-center bg-gray-600/70 hover:bg-gray-500/80 text-white text-base md:text-lg font-medium py-2 md:py-3 px-6 md:px-8 rounded-md transition duration-200 cursor-pointer">
            <InformationCircleIcon className="w-6 h-6 mr-2" />
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
