import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  query: string;
  searchInput: boolean;
}

const initialState: SearchState = {
  query: "",
  searchInput: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSearchInput: (state, action: PayloadAction<boolean>) => {
      state.searchInput = action.payload;
    },
  },
});

export const { setSearchQuery, setSearchInput } = searchSlice.actions;
export default searchSlice.reducer;
