import { createSlice } from "@reduxjs/toolkit";
import Cardsdata from "../components/CardsData";

const initialState = {
  allcart: [],
  item: Cardsdata,
  // totalquantity: 0,
  // totalprice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.allcart.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
