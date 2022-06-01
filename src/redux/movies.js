import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const headers = {
    'X-RapidAPI-Host': 'mdblist.p.rapidapi.com',
    'X-RapidAPI-Key': '955db9f211msh5375a1a80efe211p1ffe31jsna82a3bb28449'
};

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://mdblist.p.rapidapi.com' }),
    endpoints: (builder) => ({
        fetchMovies: builder.query({
            query: (title) => ({
                url: `/?s=${title}`,
                method: 'GET',
                headers
            })
        })
    })
});

export const { useFetchMoviesQuery } = moviesApi;