import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import useGetMovies from "../hooks/useGetMovies";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  useGetMovies();
  if (!movies || !movies.length) return null;

  const { original_title, overview, id } =
    movies[Math.floor(Math.random() * movies.length)];
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <VideoBackground movie_id={id} />
      <VideoTitle title={original_title} overview={overview} />
    </div>
  );
};

export default MainContainer;
