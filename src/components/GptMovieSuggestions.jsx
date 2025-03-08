import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const GptMovieSuggestions = () => {
  const recommendedMovies = useSelector((store) => store?.gpt?.gptMovies);

  return (
    <div className="mx-8 my-8 flex flex-wrap mt-8  justify-center bg-black/70 rounded-xl">
      {recommendedMovies ? (
        recommendedMovies?.map((movie, index) => (
          <div className="p-2" key={movie?.id || index}>
            <MovieCard key={movie?.id || index} movie={movie} />
          </div>
        ))
      ) : (
        <div className="mx-8 my-8 flex flex-wrap mt-8  justify-center rounded-xl">
          Movies will show here. Type movie related prompt only!
        </div>
      )}
    </div>
  );
};

export default GptMovieSuggestions;
