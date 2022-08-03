import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const transactionOperation = createApi({
    reducerPath: 'transactionOperation',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://wallet-backend-1.herokuapp.com/api',
        prepareHeaders: (headers, { getState }) => {           
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MmU4MTRhZWZjMTFkYTQ4OTU4OTZlZWEiLCJzaWQiOiI2MmVhN2IzZTdlNjdhMWQ4YmNmMzhiNmIiLCJpYXQiOjE2NTk1MzQxNDIsImV4cCI6MTY1OTUzNzc0Mn0.uAWSyWNxTYf_CH_qBCz82PsYGznZf_9Bqbm9aiEbrG8'
        
            if (token) {            
              headers.set('authorization', `Bearer ${token}`)
            }
        
            return headers
          },
        
    }),

    endpoints: builder => ({
        transaction: builder.mutation({
            query: credentials => ({
                url: '/transactions',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const { useTransactionMutation } = transactionOperation;