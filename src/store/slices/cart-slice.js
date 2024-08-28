import { axiosPrivate } from "@/lib/axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const fetchCart = createAsyncThunk("cart/fetchCart", async () => {
  const { data } = await axiosPrivate.get("/api/v1/carts");
  const cartItems = data.data.data.cartItems.map((item) => ({
    id: item.productId,
    quantity: item.quantity,
  }));

  return cartItems;
});

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
      state.isSuccess = true;
    },
    addToCart: (state, action) => {
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
      state.data = [];
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
    removeItem: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload.productId);
      toast.success("Item removed from the cart");
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
    });
  },
});

export const { addToCart, removeItem, reset, setItem } = cartSlice.actions;
export default cartSlice.reducer;
