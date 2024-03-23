import { createAction, createReducer } from "@reduxjs/toolkit";


export const deposit = createAction("balance/deposit")
export const withdraw = createAction("balance/withdraw")

export const balanceReducer1 = createReducer({value: 1000}, () => {})
export const balanceReducer = (state = { value: 1000 }, action) => {
   
    switch(action.type) {

        case "balance/deposit" : 
        return {
           ...state,
           value: state.value + action.payload,
        }

        case "balance/withdraw": 
        return {
                ...state,
                value: state.value - action.payload,
        }

    
            default:
                return state;
}
}

