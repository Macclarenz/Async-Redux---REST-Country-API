import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCountries = createAsyncThunk('allCountries/getLoadCountries', async () => {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all')
        const jsonResponse = await response.json()
        return jsonResponse
    } catch (err) {
        console.error(err.message)
        return err.message
    }
})


const allCountriesSlice = createSlice({
    name: 'allCountries',
    initialState: {
        countries: [],
        hasError: [false, ''],
        isLoading: false
    },
    reducers: {
    },
    extraReducers: {
        [loadCountries.pending]: (state, action) => {
            state.isLoading = true
        },
        [loadCountries.fulfilled]: (state, action) => {
            state.isLoading = false
            state.countries = action.payload
        },
        [loadCountries.rejected]: (state, action) => {
            state.isLoading = false,
            state.hasError = [true, action.payload]
        }
    }
})

export const selectIsLoading = state => state.allCountries.isLoading
export const selectCountries = state => state.allCountries.countries

export const { setVisibleLimit, setSearchTerm } = allCountriesSlice.actions
export default allCountriesSlice.reducer