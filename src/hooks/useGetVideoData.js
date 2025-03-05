import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../../utils/moviesSlice";
import { MOVIES_BASE_URL, options } from "../../utils/constants";
import { useEffect } from "react";

const useGetVideoData = (movie_id) => {
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);
  const dispatch = useDispatch();
  const getTrailer = async () => {
    const video_url = MOVIES_BASE_URL + movie_id + "/videos";

    const video_data = await fetch(video_url, options);
    const json = await video_data.json();
    const filtered_trailers = json.results.filter(
      (movie) => movie.type === "Trailer"
    );
    const trailer = filtered_trailers.length
      ? filtered_trailers[0]
      : json.results[0];

    dispatch(addTrailer(trailer));
  };

  useEffect(() => {
    !trailerVideo && getTrailer();
  }, []);
};

export default useGetVideoData;
