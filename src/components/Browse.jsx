import React, { useEffect } from "react";
import useGetMovies from "../hooks/useGetMovies";
import MainContainer from "./MainContainer";
import SecondaryContainder from "./SecondaryContainder";

const Browse = () => {
  useGetMovies();
  return (
    <div>
      <MainContainer />
      <SecondaryContainder />
    </div>
  );
};

export default Browse;
