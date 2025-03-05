import React from "react";
import { PlayIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/70 via-black/40 to-transparent flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg line-clamp-2">
            {title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 line-clamp-3 max-w-prose">
            {overview}
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="btn btn-ghost bg-white hover:bg-gray-100 text-black flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3">
              <PlayIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">Play</span>
            </button>
            <button className="btn btn-ghost bg-gray-600/70 hover:bg-gray-500/80 text-white flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3">
              <InformationCircleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-sm sm:text-base">More Info</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
