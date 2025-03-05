import React from "react";
import useGetMovies from "../hooks/useGetMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useGetPopularMovies from "../hooks/useGetPopularMovies";
import useAddTopRated from "../hooks/useAddTopRated";
import useAddUpcomingMovies from "../hooks/useAddUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const isGptPage = useSelector((store) => store?.gpt?.isGptPage);
  useGetMovies();
  useGetPopularMovies();
  useAddTopRated();
  useAddUpcomingMovies();

  return (
    <div className=" text-white min-h-screen overflow-x-hidden">
      {isGptPage ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
