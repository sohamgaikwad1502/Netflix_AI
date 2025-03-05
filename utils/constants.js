const BASE_URL = import.meta.env.VITE_BASE_URL;
const MOVIES_BASE_URL = import.meta.env.VITE_MOVIES_BASE_URL;
const YOUTUBE_EMBED_LINK = import.meta.env.VITE_YOUTUBE_EMBED_LINK;
const MOVIE_IMAGE_URL = import.meta.env.VITE_MOVIE_IMAGE_URL;
const GET_MOVIES_DETAILS = import.meta.env.VITE_GET_MOVIES_DETAILS;
const BACKGROUND_PHOTO_URL = import.meta.env.VITE_BACKGROUND_PHOTO_URL;
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`,
  },
};

const OPEN_AI_KEY = import.meta.env.VITE_OPEN_AI_KEY;

export {
  BASE_URL,
  options,
  MOVIES_BASE_URL,
  YOUTUBE_EMBED_LINK,
  MOVIE_IMAGE_URL,
  OPEN_AI_KEY,
  GET_MOVIES_DETAILS,
  BACKGROUND_PHOTO_URL,
};
