import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className="px-6 bg-black  ">
      {movies && (
        <div className="-mt-35 relative z-20">
          <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MoviesList title={"Popular"} movies={movies?.popularMovies} />
          <MoviesList title={"Top Rated"} movies={movies?.topRated} />
          <MoviesList title={"Upcoming"} movies={movies?.upcomingMovies} />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
