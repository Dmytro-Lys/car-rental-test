import { createSlice } from "@reduxjs/toolkit";

const favoritesInitialState = [];

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: favoritesInitialState,
    reducers: {
        addFavorite: {
            reducer(state, action) {
                state.push(action.payload)
            }
        },
        delFavorite: {
            reducer(state, action) {
                return state.filter(favoriteCar => favoriteCar.id !== action.payload)
          }
        }
    }
})

export const { addFavorite, delFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
