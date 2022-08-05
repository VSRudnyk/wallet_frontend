import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { changeModalStatus, updateBalance } from './globalActions'


const isModalAddTransactionOpen = createReducer(false, {
    [changeModalStatus]: (state,action) => state = action.payload
})

const currentBalance = createReducer(0, {
    [updateBalance]: (state, action) => {
         return state = action.payload
        
    }
})

export default combineReducers({
    isModalAddTransactionOpen, 
    currentBalance
})