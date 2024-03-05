import { createSlice } from "@reduxjs/toolkit"
import toast  from "react-hot-toast";

const cartSlice = createSlice({
    name: "cart-store",
    initialState: {
        data: JSON.parse(localStorage.getItem("cart-store")) || [],
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
                localStorage.setItem('cart-store', JSON.stringify(state.data))
            }
        },
        removeItem: (state, action) => {
          state.data = state.data.filter(item => item.id !== action.payload);
          toast.success('Item removed from the cart')
    }
    },
})


export const { addToCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
