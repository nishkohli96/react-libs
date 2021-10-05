// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

/* https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics */

// Define our single API slice object
/* RTK Query uses a single "API slice" per application */
export const apiSlice = createApi({
    // The cache reducer expects to be added at `state.api` (already default - this is optional)
    reducerPath: 'api',
    // All of our requests will have URLs starting with '/fakeApi'
    baseQuery: fetchBaseQuery({ baseUrl: 'https://ifsc.razorpay.com' }),
    // The "endpoints" represent operations and requests for this server
    tagTypes: ['Bank'],
    /*  The queries can be re-fetched manually, or automatically 
        using "tags" for cache invalidation */
    endpoints: (builder) => ({
        // The `getPosts` endpoint is a "query" operation that returns data
        getBankInfo: builder.query({
            // The URL for the request is '/fakeApi/posts'
            query: () => '/HDFC0001380',
            providesTags: ['Bank'],
        }),
        /* Post Query */
        // addNewPost: builder.mutation({
        //     query: initialPost => ({
        //       url: '/posts',
        //       method: 'POST',
        //       // Include the entire post object as the body of the request
        //       body: initialPost
        //     }),
        //      invalidatesTags: ['Bank']
        //   })
    }),
});

/* 
    Export the auto-generated hook for the `getPost` query endpoint.
    For GET methods 'Query' Suffix at the end, for for others 'Mutation'
    suffix at the end.
*/
export const { useGetBankInfoQuery } = apiSlice;
