import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { changeModalStatus } from './globalActions'

//import actions 


const isModalAddTransactionOpen = createReducer(false, {
    [changeModalStatus]: (state,action) => state = action.payload
})


export default combineReducers({
    isModalAddTransactionOpen,


})