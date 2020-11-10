import { createSlice, nanoid } from "@reduxjs/toolkit";
import Headphones from "../assets/images/headphones.png";

const ShoppingCartSlice = createSlice({
    name: "ShoppingCart",
    initialState: {
        items: [
            {
                name: "Headphones",
                id: nanoid(),
                price: 11.90,
                quantity: 3,
                image: `${Headphones}`,
            }
        ],
        summary: {
            shipping: null,
            subtotal: null,
        }
    },
    reducers: {
        increaseItemQuantity: (state, { payload: id }) => {
            if (state.items.filter(item => id === item.id)[0].quantity <= 999)
                state.items.filter(item => id === item.id)[0].quantity++;
        },

        decreaseItemQuantity: (state, { payload: id }) => {
            if (state.items.filter(item => id === item.id)[0].quantity > 0) {
                state.items.filter(item => id === item.id)[0].quantity--
            }
        },

        removeItem: (state, { payload: id }) => {
            state.items = state.items.filter(item => id !== item.id);
        }
    },
});

export const selectShoppingCartState = state => state.ShoppingCart;
export const selectShoppingCartItems = state => selectShoppingCartState(state).items;
export const selectShoppingCartSummary = state => selectShoppingCartState(state).summary;
export const selectShoppingCartItemById = (state, id) => selectShoppingCartItems(state).filter(item => id === item.id);

export const { increaseItemQuantity, decreaseItemQuantity, removeItem } = ShoppingCartSlice.actions;

export default ShoppingCartSlice.reducer;