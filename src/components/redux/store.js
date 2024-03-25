import { configureStore } from "@reduxjs/toolkit";

import balanceReducer  from "./contactsSlice1"
import contactsReducer from "./contactsSlice"; 
import filtersReducer from "./filtersSlice"

export const store = configureStore({
    reducer: {
        balance: balanceReducer, 
        contacts: contactsReducer,
        filter: filtersReducer,
    },
    
})

