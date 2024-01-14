import { createSlice } from "@reduxjs/toolkit"
import toast  from "react-hot-toast";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: JSON.parse(localStorage.getItem("cart")) || [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.data.find(
                (item) => item.id === action.payload.id
            )
            if (itemInCart){
                toast('Item allready in cart.')
            }else{
                state.data.push(action.payload)
                toast.success('Item added to cart.')
            }
        },
        removeItem: (state, action) => {
          toast.success('Item removed from the cart')
          
          ;
      }
    },
})

export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
