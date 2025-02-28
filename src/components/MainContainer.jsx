import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  const { original_title, overview, id } = movies[0];

  return (
    <div className="relative w-screen aspect-video">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movie_id={id} />
      {/* Add a dark overlay at the bottom for better text visibility */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-5"></div>
    </div>
  );
};

export default MainContainer;
