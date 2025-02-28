import React from "react";
import { YOUTUBE_EMBED_LINK } from "../../utils/constants";
import useGetVideoData from "../hooks/useGetVideoData";
import { useSelector } from "react-redux";

const VideoBackground = ({ movie_id }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useGetVideoData(movie_id);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={
          YOUTUBE_EMBED_LINK +
          trailerVideo?.key +
          "?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&loop=1&playlist=" +
          trailerVideo?.key +
          "&disablekb=1&fs=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
