import { createSlice } from "@reduxjs/toolkit";
import { fetchAdverts } from "./operations";

const advertsInitialState = {
    items: [],
    isLoading: false,
    error: null
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, {payload}) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = (state) => {
    state.isLoading = false;
    state.error = null;
}

const fetchFulfilled = (state, { payload }) => { state.items = payload; }  

// const addFulfilled =  (state, { payload })=> {
//          state.items.push(payload);  
// }
        
// const deleteFulfilled = (state, { payload })=> {
//           state.items = state.items.filter(contact => contact.id !== payload);   
//         }


const advertsSlice = createSlice({
    name: "adverts",
    initialState: advertsInitialState,
    extraReducers: (builder) =>{
      builder
        .addCase(fetchAdverts.fulfilled, fetchFulfilled)
        .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
        .addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
        .addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
    }
})

export const advertsReduser = advertsSlice.reducer;
