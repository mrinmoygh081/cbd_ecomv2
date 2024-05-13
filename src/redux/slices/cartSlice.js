import { createSlice } from "@reduxjs/toolkit";
import { checkTypeArr } from "../../Helper/smallFun";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  numOfItems: 0,
};

export const cartStage = createSlice({
  name: "cartStage",
  initialState,
  reducers: {
    addCartHandler: (state, action) => {
      const {
        image,
        product_id,
        price,
        name,
        quantity,
        qty = 1,
      } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.product_id === product_id
      );
      if (existingItem) {
        existingItem.qty += parseInt(qty);
      } else {
        state.cartItems.push({
          image,
          product_id,
          price,
          name,
          quantity,
          qty: 1,
        });
      }
      state.numOfItems = state.cartItems.reduce(
        (total, item) => total + item.qty,
        0
      );
    },
    removeCartHandler: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.product_id !== itemId
      );
      state.numOfItems = state.cartItems.reduce(
        (total, item) => total + item.qty,
        0
      );
    },
    increaseQty: (state, action) => {
      const { product_id } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.product_id === product_id
      );

      if (existingItem) {
        existingItem.qty = parseInt(existingItem.qty) + 1;
      } else {
        existingItem.qty = 1;
      }
      existingItem.price =
        parseInt(existingItem.price) * parseInt(existingItem.qty);

      state.numOfItems = state.cartItems.reduce(
        (total, item) => total + item.qty,
        0
      );
    },
    decreaseQty: (state, action) => {
      const { product_id } = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.product_id === product_id
      );

      if (existingItem && existingItem.qty > 1) {
        existingItem.qty -= 1;
      }
      existingItem.price = parseInt(existingItem.price) * existingItem.qty;

      state.numOfItems = state.cartItems.reduce(
        (total, item) => total + item.qty,
        0
      );
    },
    cleanCartHandler: (state) => {
      state.cartItems = [];
      state.numOfItems = 0;
    },
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
