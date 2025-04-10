import { useDispatch, useSelector } from "react-redux";
import { MOVIES_BASE_URL, options } from "../../utils/constants";
import { useEffect } from "react";
import { addMovies } from "../../utils/moviesSlice";

const useGetMovies = () => {
  const nowPlayingMovies = useSelector(
    (store) => store?.movies?.nowPlayingMovies
  );
  const url = MOVIES_BASE_URL + "now_playing?page=1";
  const dispatch = useDispatch();

  const recentMovies = async () => {
    const data = await fetch(url, options);
    const json = await data.json();
    dispatch(addMovies(json.results));
  };

  useEffect(() => {
    !nowPlayingMovies && recentMovies();
  }, []);
};

export default useGetMovies;
