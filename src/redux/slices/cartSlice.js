import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

// const initialState = {
//   data: [],
// };

export const cartStage = createSlice({
  name: "cartStage",
  initialState: [],
  reducers: {
    addCartHandler: (state, action) => {
      const { image, product_id, price, name, quantity, qty } = action.payload;
      const existingItem = state.find((item) => item.product_id === product_id);
      console.log(action.payload);
      if (existingItem) {
        existingItem.qty = parseInt(existingItem.qty) + parseInt(qty);
      } else {
        state.push({ image, product_id, price, name, quantity, qty: 1 });
      }
      toast.success("The product has been added successfully!");
    },
    removeCartHandler: (state, action) => {
      const itemId = action.payload;
      return state.filter((item) => item.product_id !== itemId);
    },
    increaseQty: (state, action) => {
      const { product_id } = action.payload;
      const existingItem = state.find((item) => item.product_id === product_id);

      if (existingItem) {
        existingItem.qty = parseInt(existingItem.qty) + 1;
      } else {
        existingItem.qty = 1;
      }
      existingItem.price =
        parseInt(existingItem.price) * parseInt(existingItem.qty);

      console.log("existingItem2: " + JSON.stringify(existingItem));
    },
    decreaseQty: (state, action) => {
      const { product_id } = action.payload;
      const existingItem = state.find((item) => item.product_id === product_id);

      if (existingItem && existingItem.qty > 1) {
        existingItem.qty = existingItem.qty - 1;
      }
      existingItem.price = parseInt(existingItem.price) * existingItem.qty;
    },
  },
  cleanCartHandler: () => {
    return [];
  },
});

// Action creators are generated for each case reducer function
export const {
  addCartHandler,
  removeCartHandler,
  increaseQty,
  decreaseQty,
  cleanCartHandler,
} = cartStage.actions;

export default cartStage.reducer;
