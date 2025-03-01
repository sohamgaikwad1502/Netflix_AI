import { useDispatch } from "react-redux";
import { MOVIES_BASE_URL, options } from "../../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../../utils/moviesSlice";

const useGetPopularMovies = () => {
  const url = MOVIES_BASE_URL + "popular?page=1";
  const dispatch = useDispatch();

  const recentMovies = async () => {
    const data = await fetch(url, options);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
    console.log(json.results);
  };

  useEffect(() => {
    recentMovies();
  });
};

export default useGetPopularMovies;
