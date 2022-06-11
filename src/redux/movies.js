import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const headers = {
    'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com',
    'X-RapidAPI-Key': ''
};

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://hapi-books.p.rapidapi.com' }),
    endpoints: (builder) => ({
        fetchMovies: builder.query({
            query: (book) => ({
                url: `/book/56597885?q=${book}`,
                method: 'GET',
                headers
            })
        })
    })
});

export const { useFetchMoviesQuery } = moviesApi;