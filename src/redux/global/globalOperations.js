import { createAsyncThunk } from '@reduxjs/toolkit';
/* import {fetchTransactions} from '../../functions/fetchTransactions'; */
import axios from 'axios';


export const fetchTransactions = async() => {
    const { data } = await axios.get(`/transactions`);    
    return data;
}

export const fetchUserTansactions = createAsyncThunk(
    'transactions/fetchUserTransactions',
    async() => {
    const userTransactions = await fetchTransactions();
    return userTransactions;
})

export const fetchNewUserTransaction = createAsyncThunk(
    'transactions/fetchNewTransactions',
    async(transaction, thunkAPI) => {
        await axios.post('/transactions', transaction)
        thunkAPI.dispatch(fetchTransactions())
    }
)