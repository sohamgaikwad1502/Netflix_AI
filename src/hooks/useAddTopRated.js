import { useDispatch, useSelector } from "react-redux";
import { MOVIES_BASE_URL, options } from "../../utils/constants";
import { useEffect } from "react";
import { addTopRated } from "../../utils/moviesSlice";

const useAddTopRated = () => {
  const top_rated_movies = useSelector((store) => store?.movies?.topRated);
  const url = MOVIES_BASE_URL + "top_rated?page=1";
  const dispatch = useDispatch();

  const recentMovies = async () => {
    const data = await fetch(url, options);
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    !top_rated_movies && recentMovies();
  }, []);
};

export default useAddTopRated;
