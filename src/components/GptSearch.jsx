import React from "react";
import GptUserInput from "./gptUserInput";
import GptMovieSuggestions from "./gptMovieSuggestions";
import { BACKGROUND_PHOTO_URL } from "../../utils/constants";

const GptSearch = () => {
  return (
    <div className="">
      <div className="fixed -z-10">
        <img
          src={BACKGROUND_PHOTO_URL}
          alt="background"
          className="h-screen w-screen object-cover"
        />
      </div>
      <div>
        <GptUserInput />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
