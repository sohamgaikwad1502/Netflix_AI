import React from "react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="space-y-3 sm:space-y-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
        {title}
      </h2>
      <div className="relative">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-3 sm:gap-4 md:gap-5 pb-4">
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
