import { configureStore } from "@reduxjs/toolkit";

import { moviesApi } from "../redux/movies";

export const store = configureStore({
    reducer: {
        [moviesApi.reducerPath]: moviesApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
})