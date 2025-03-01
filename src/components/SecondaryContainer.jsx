import React from "react";
import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);

  return (
    <div className="bg-black pb-6 sm:pb-8 md:pb-12 pt-0 sm:pt-4 md:pt-8 bg-gradient-to-b from-gray-900 to-black">
      {movies && (
        <div className="-mt-40 relative z-20">
          <MoviesList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
          <MoviesList title={"Popular"} movies={movies?.popularMovies} />
          <MoviesList title={"Top Rated"} movies={movies?.topRated} />
        </div>
      )}
    </div>
  );
};

export default SecondaryContainer;
