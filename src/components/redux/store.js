import { configureStore } from "@reduxjs/toolkit";
import { balanceReducer } from "./contactsSlice"

export const store = configureStore({
    reducer: {
        balance: balanceReducer, 
    },
})