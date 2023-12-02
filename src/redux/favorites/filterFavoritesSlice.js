import { createSlice } from "@reduxjs/toolkit";

const filterFavoritesInitialState = "";

const filterFavoritesSlice = createSlice({
    name: "filterFavorites",
    initialState: filterFavoritesInitialState,
    reducers: {
        setFilterFavorites: {
            reducer(state, action) {
                return action.payload
            }
        }
    }
})

export const { setFilterFavorites } = filterFavoritesSlice.actions;
export const filterFavoritesReduser = filterFavoritesSlice.reducer;