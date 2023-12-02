import { createSelector } from "@reduxjs/toolkit";
export const selectAdverts = state => state.adverts.items;
export const selectIsLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;
export const selectFilter = state => state.filter;

export const selectVisibleAdverts = createSelector(
[ selectAdverts, selectFilter],
  (adverts, filter) => {
   return adverts.filter(advert => advert.name.toLowerCase()
    .includes(filter.toLowerCase()))
 }
)