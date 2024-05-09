import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

// const initialState = {
//   data: [],
// };

export const wishlistStage = createSlice({
  name: "wishlistStage",
  initialState: [],
  reducers: {
    addWishListHandler: (state, action) => {
      const { image, product_id, price, name, quantity } = action.payload;
      const existingItem = state.find((item) => item.product_id === product_id);
      console.log(action.payload);
      if (existingItem) {
        toast.warn("Already added to the wishlist.");
      } else {
        state.push({ image, product_id, price, name, quantity, qty: 1 });
        toast.success("Added to the wishlist.");
      }
    },
    removeWishListHandler: (state, action) => {
      const itemId = action.payload;
      return state.filter((item) => item.product_id !== itemId);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addWishListHandler, removeWishListHandler } =
  wishlistStage.actions;

export default wishlistStage.reducer;
