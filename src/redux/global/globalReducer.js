import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { changeModalStatus } from './globalActions'

//import actions 

const transactions = createReducer([], {
/*     [fetchUserTansactions.fulfilled] : (state, action) => action.payload, */
})

const isModalAddTransactionOpen = createReducer(false, {
    [changeModalStatus]: (state,action) => state = action.payload
})


export default combineReducers({
    isModalAddTransactionOpen,
    transactions


})