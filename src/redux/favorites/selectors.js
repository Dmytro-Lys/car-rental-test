import { createSelector } from "@reduxjs/toolkit";
export const getFavorites = state => state.favorites;
export const getFilterFavorites = state => state.filterFavorites;

export const getVisibleFavorites = createSelector(
[ getFavorites, getFilterFavorites],
 (favorites, filterFavorites) => {
   return favorites.filter(favoriteCar => favoriteCar.name.toLowerCase()
    .includes(filterFavorites.toLowerCase()))
 }
)
