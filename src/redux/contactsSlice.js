import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const contactsReducer = createSlice({
    name: "contacts",
    initialState: {
      items: [],
    },
 
    reducers: {
      addContact(state, action) {
        state.items = [...state.items, action.payload]
      },
    

      deleteContact(state, action) {
        const contactIdToDelete = action.payload;
        state.items = state.items.filter(contact => contact.id !== contactIdToDelete);
       
    },
    },
  });


  export const { addContact, deleteContact } = contactsReducer.actions;
  export const selectContacts = (state) => state.contacts.items;
  export default contactsReducer.reducer;





