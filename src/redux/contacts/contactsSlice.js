import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const contactsInitialState = {
    items: []
};

const fetchFulfilled = (state, { payload }) => { state.items = payload; }  

const addFulfilled =  (state, { payload })=> {
         state.items.push(payload);  
}
        
const deleteFulfilled = (state, { payload })=> {
          state.items = state.items.filter(contact => contact.id !== payload);   
        }


const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    extraReducers: (builder) =>{
      builder
        .addCase(fetchContacts.fulfilled, fetchFulfilled)
        .addCase(addContact.fulfilled, addFulfilled)
        .addCase(deleteContact.fulfilled, deleteFulfilled)
    }
})

export const contactsReduser = contactsSlice.reducer;
