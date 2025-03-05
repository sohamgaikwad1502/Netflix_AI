import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptPage: false,
    gptMovies: null,
  },
  reducers: {
    gptPageStateChange: (state, action) => {
      state.isGptPage = !state.isGptPage;
    },
    addGptRecommendMovies: (state, action) => {
      state.gptMovies = action.payload;
    },
  },
});

export default gptSlice.reducer;
export const { gptPageStateChange, addGptRecommendMovies } = gptSlice.actions;
