import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItem: (state, action) => {
      state.data = action.payload;
      state.isSuccess = true
    },
    addToCart:  (state, action) => {
      console.log(state.data)
      console.log(action.payload)
      const itemInCart = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        toast.error("Item allready in cart.");
      } else {
        state.data.push(action.payload);
        toast.success("Item added to cart");
      }
    },
    reset: (state) => {
      state.data = []
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
    },
    removeItem: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.id);
      toast.success("Item removed from the cart");
    },
  },
});

export const { addToCart, removeItem, reset, setItem } = cartSlice.actions;
export default cartSlice.reducer;
