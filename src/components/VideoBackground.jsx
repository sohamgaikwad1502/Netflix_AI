import React from "react";
import { YOUTUBE_EMBED_LINK } from "../../utils/constants";
import useGetVideoData from "../hooks/useGetVideoData";
import { useSelector } from "react-redux";

const VideoBackground = ({ movie_id }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useGetVideoData(movie_id);

  if (!trailerVideo?.key) return null;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="relative w-full h-full">
        <iframe
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover"
          src={
            YOUTUBE_EMBED_LINK +
            trailerVideo.key +
            "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modest&info=0&branding=1&loop=1&playlist=" +
            trailerVideo.key +
            "&disablekb=1&fs=0"
          }
          title="Movie Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
