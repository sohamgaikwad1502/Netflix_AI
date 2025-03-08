import React from "react";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const isGptPage = useSelector((store) => store?.gpt?.isGptPage);
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
