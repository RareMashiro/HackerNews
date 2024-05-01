import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";

export const store = configureStore({
    reducer: combineSlices(
        api,
    ),

    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware),
})