const BASE_URL = "http://localhost:5173/";
const MOVIES_BASE_URL = "https://api.themoviedb.org/3/movie/";
const YOUTUBE_EMBED_LINK = "https://www.youtube.com/embed/";
const MOVIE_IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTljZWIzYmI4MTg0NDlmNjMyMzQzNTJlYjA5NGU0NiIsIm5iZiI6MTc0MDQxMDkyOC40Mywic3ViIjoiNjdiYzkwMzBhMjM5MjlhYzI4YmYwZTRhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.1i79mIz-iIW4gsyumF0ORCMOgdtVcUbQJcQQ6-zXjmE",
  },
};

export {
  BASE_URL,
  options,
  MOVIES_BASE_URL,
  YOUTUBE_EMBED_LINK,
  MOVIE_IMAGE_URL,
};
