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
                quantity: 2,
                image: `${Headphones}`,
            },

        ],
        summary: {
            shipping: 23.80,
            subtotal: 23.80,
            grandTotal: 47.60,
        },

        isCheckoutOpen: false,
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
        },

        shoppingCartSummarize: state => {
            const totalPrice = state.items.reduce((accumulator, currentValue) => {
                return accumulator + (currentValue.price * currentValue.quantity)
            }, 0);

            const shippingPrice = (totalPrice > 100 || totalPrice === 0) ? 0 : 23.80;
            state.summary.shipping = shippingPrice;
            state.summary.subtotal = totalPrice;
            state.summary.grandTotal = totalPrice + shippingPrice;
        },

        summarizeReset: state => {
            state.summary.shipping = 0;
            state.summary.subtotal = 0;
            state.summary.grandTotal = 0;
        },

        shoppingCartReset: state => {
            state.items = [];
        },

        openModal: state => {
            state.isCheckoutOpen = true;
        },

        closeModal: state => {
            state.isCheckoutOpen = false;
        },

        addItem: (state, { payload: item }) => {
            state.items.push(item);
        },

    },
});

export const selectShoppingCartState = state => state.ShoppingCart;
export const selectShoppingCartItems = state => selectShoppingCartState(state).items;
export const selectShoppingCartSummary = state => selectShoppingCartState(state).summary;
export const selectShoppingCartItemById = (state, id) => selectShoppingCartItems(state).filter(item => id === item.id);
export const selectSummmaryShipping = state => selectShoppingCartSummary(state).shipping;
export const selectSummmarySubtotal = state => selectShoppingCartSummary(state).subtotal;
export const selectSummmaryGrandTotal = state => selectShoppingCartSummary(state).grandTotal;
export const selectCheckoutOpen = state => selectShoppingCartState(state).isCheckoutOpen;

export const { increaseItemQuantity,
    decreaseItemQuantity,
    removeItem,
    shoppingCartSummarize,
    summarizeReset,
    openModal,
    closeModal,
    shoppingCartReset,
    addItem } = ShoppingCartSlice.actions;

export default ShoppingCartSlice.reducer;