import { configureStore } from "@reduxjs/toolkit";
import ShoppingCartSliceReducer from "./slices/ShoppingCartSlice";

export const store = configureStore({
    reducer: {
        ShoppingCart: ShoppingCartSliceReducer
    }
});