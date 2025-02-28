import React, { useEffect } from "react";
import useGetMovies from "../hooks/useGetMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useGetMovies();

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
