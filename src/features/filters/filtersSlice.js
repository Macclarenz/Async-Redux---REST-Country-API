import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: ['', ''],
    reducers: {
        setFilter: (state, action) => {
            return action.payload
        },
        setSearchTerm: (state, action) => {
            state[0] = action.payload
        },
        setRegion: (state, action) => {
            state[1] = action.payload
        }
    }
})

export const selectFilter = state => state.filters
export const { setFilter, setSearchTerm, setRegion } = filterSlice.actions
export default filterSlice.reducer