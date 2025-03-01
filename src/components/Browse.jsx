import React, { useEffect } from "react";
import useGetMovies from "../hooks/useGetMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import useAddTopRated from "../hooks/useAddTopRated";

const Browse = () => {
  useGetMovies();
  useGetPopularMovies();
  useAddTopRated();

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
