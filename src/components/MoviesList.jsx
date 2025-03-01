import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="px-4 sm:px-6 py-1 sm:py-2">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold py-2 sm:py-3 text-white">
        {title}
      </h1>
      <div className="relative group">
        <div className="flex overflow-x-scroll scrollbar-hide pb-1 pt-1 -mx-2">
          <div className="flex gap-4">
            {movies?.map((movie, index) => (
              <MovieCard key={movie.id || index} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
