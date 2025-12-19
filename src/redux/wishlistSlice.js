import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    toggleWishlist: (state, action) => {
      const exist = state.find(p => p.id === action.payload.id);
      if (exist) return state.filter(p => p.id !== action.payload.id);
      else state.push(action.payload);
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
