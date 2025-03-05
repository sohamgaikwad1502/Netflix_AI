import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React, { useRef } from "react";
import client from "../../utils/openAi";
import { GET_MOVIES_DETAILS, options } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { addGptRecommendMovies } from "../../utils/gptSlice";

const GptUserInput = () => {
  const searchText = useRef("");
  const dispatch = useDispatch();

  const getMoviesData = async (movie_list) => {
    const movie_data_tmdb = movie_list.map(async (movie) => {
      const url =
        GET_MOVIES_DETAILS +
        movie +
        "&include_adult=true&language=en-US&page=1";
      const data = await fetch(url, options);
      const json = await data.json();
      return json?.results;
    });
    const res = await Promise.all(movie_data_tmdb);

    const sorted_movies = res.map((movie) => {
      return movie[0];
    });
    if (sorted_movies) dispatch(addGptRecommendMovies(sorted_movies));
  };

  const handleGptSearchClick = async () => {
    if (searchText?.current?.value?.trim() === "") return;

    const gpt_query =
      "Act as a Movie Recommendation system and give me the movies for the prompt given below ,  give me the output of the movies in coma seperated format as movie1 , movie2 .. like that and the output should only contain the movie names and nothing else also if the prompt says anything other than movie suggestions or movie related stuff , dont respond or give an empty string. on next line there is a prompt \n\n" +
      searchText?.current?.value;

    const movieResults = await client.chat.completions.create({
      messages: [{ role: "user", content: gpt_query }],
      model: "gpt-4o-mini",
    });

    if (movieResults?.choices) {
      const movie_list = movieResults?.choices[0]?.message?.content.split(",");
      getMoviesData(movie_list);
    }
  };

  return (
    <div className="w-full px-4 pt-[30%] sm:pt-[12%] md:pt-[15%]">
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          ref={searchText}
          type="text"
          placeholder="What would you like to watch today?"
          className="w-full sm:w-[60%] md:w-[50%] lg:w-[50%] 
            transition-all duration-300 ease-in-out 
            border-2 border-white/50 rounded-lg 
            px-4 py-2 
            bg-black/60 text-white 
            focus:bg-black/80 focus:border-white focus:ring-2 focus:ring-white 
            outline-none
            sm:focus:w-[70%] md:focus:w-[55%] lg:focus:w-[45%]"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              handleGptSearchClick();
            }
          }}
        />
        <button
          className="w-full sm:w-auto 
            flex items-center justify-center 
            px-4 py-2 
            bg-red-600 text-white 
            rounded-lg 
            hover:bg-red-700 
            transition-all duration-300 
            space-x-2 cursor-pointer"
          onClick={handleGptSearchClick}
        >
          <MagnifyingGlassIcon className="h-5 w-5" />
          <span className="text-sm sm:text-base">Search</span>
        </button>
      </div>
    </div>
  );
};

export default GptUserInput;
