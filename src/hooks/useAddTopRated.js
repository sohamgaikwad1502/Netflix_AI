import { useDispatch } from "react-redux";
import { MOVIES_BASE_URL, options } from "../../utils/constants";
import { useEffect } from "react";
import { addTopRated } from "../../utils/moviesSlice";

const useAddTopRated = () => {
  const url = MOVIES_BASE_URL + "top_rated?page=1";
  const dispatch = useDispatch();

  const recentMovies = async () => {
    const data = await fetch(url, options);
    const json = await data.json();
    dispatch(addTopRated(json.results));
    console.log(json.results);
  };

  useEffect(() => {
    recentMovies();
  });
};

export default useAddTopRated;
