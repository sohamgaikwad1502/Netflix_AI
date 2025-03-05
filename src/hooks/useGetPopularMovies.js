import { useDispatch, useSelector } from "react-redux";
import { MOVIES_BASE_URL, options } from "../../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../../utils/moviesSlice";

const useGetPopularMovies = () => {
  const popularMovies = useSelector((store) => store?.movies?.PopularMovies);
  const url = MOVIES_BASE_URL + "popular?page=1";
  const dispatch = useDispatch();

  const recentMovies = async () => {
    const data = await fetch(url, options);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && recentMovies();
  }, []);
};

export default useGetPopularMovies;
