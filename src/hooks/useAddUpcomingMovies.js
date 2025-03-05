import { useDispatch, useSelector } from "react-redux";
import { MOVIES_BASE_URL, options } from "../../utils/constants";
import { useEffect } from "react";
import { addUpcomingMovies } from "../../utils/moviesSlice";

const useAddUpcomingMovies = () => {
  const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies);
  const url = MOVIES_BASE_URL + "upcoming?page=1";
  const dispatch = useDispatch();

  const recentMovies = async () => {
    const data = await fetch(url, options);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovies && recentMovies();
  }, []);
};

export default useAddUpcomingMovies;
