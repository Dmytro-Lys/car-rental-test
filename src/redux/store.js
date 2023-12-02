import { configureStore} from "@reduxjs/toolkit";
import { advertsReduser } from "./adverts/advertsSlice"
import { filterReduser } from "./adverts/filterSlice"
import { favoritesReducer } from './favorites/favoritesSlice';
import { filterFavoritesReduser } from "./favorites/filterFavoritesSlice"
import { rootReducer } from "./root/slice";
import { persistStore, persistReducer, FLUSH, REHYDRATE,
  PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  // whitelist: ['token']
}

export const store = configureStore({
  reducer: {
    root: rootReducer,
    favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
    filterFavorites: filterFavoritesReduser,
    adverts: advertsReduser,
    filter: filterReduser
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export  const persistor = persistStore(store)
