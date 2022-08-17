import { configureStore } from "@reduxjs/toolkit";
import allCountriesReducer from "../features/allCountries/allCountriesSlice";
import filtersReducer from "../features/filters/filtersSlice";

export default configureStore({
    reducer: {
        allCountries: allCountriesReducer,
        filters: filtersReducer
    }
})