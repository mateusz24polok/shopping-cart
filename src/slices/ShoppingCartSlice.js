import { createSlice, nanoid } from "@reduxjs/toolkit";
import Headphones from "../assets/images/headphones.png";

const ShoppingCartSlice = createSlice({
    name: "ShoppingCart",
    initialState: {
        items: [
            {
                name: "Headphonse",
                id: nanoid(),
                price: 11.90,
                quantity: 2,
                image: { Headphones },
            }
        ],
        summary: {
            shipping: null,
            subtotal: null,
        }
    },
    reducers: {
        addItemQuantity: (state, action) => {
            if (state.items.headphones.quantity > 0) {
                state.items.headphones.quantity++;
            }
        }
    },
});

export const selectShoppingCartState = state => state.ShoppingCart;
export const selectShoppingCartItems = state => selectShoppingCartState(state).items;
export const selectShoppingCartSummary = state => selectShoppingCartSummary(state).summary;

export const { addItemQuantity } = ShoppingCartSlice.actions;

export default ShoppingCartSlice.reducer;