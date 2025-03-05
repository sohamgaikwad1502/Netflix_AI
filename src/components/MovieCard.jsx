import React from "react";
import { MOVIE_IMAGE_URL } from "../../utils/constants";

const MovieCard = ({ movie }) => {
  if (!movie) return null;
  const { title, poster_path } = movie;

  return (
    <div className="flex flex-col p-2 transition-transform duration-300  cursor-pointer">
      <div className="w-32 sm:w-36 md:w-40 lg:w-48 h-48 sm:h-56 md:h-64 lg:h-72 rounded-md overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src={MOVIE_IMAGE_URL + poster_path}
          alt={title + " poster"}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="mt-2 w-full">
        <span className="w-32 text-white font-medium  sm:text-sm  sm:w-48 line-clamp-1 text-center">
          {title}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
