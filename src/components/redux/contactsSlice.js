import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import { nanoid } from 'nanoid';


const contactsReducer = createSlice({
    name: "contacts",
    initialState: {
      items: [],
    },
 
    reducers: {
      addContact(state, action) {
        state.items.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },

      deleteContact(state, action) {

        state.items = state.items.filter((contact) => contact.id !== action.payload);
     
      },
    },
  });

//   const persistConfig = {
//     key: 'contacts',
//     storage,
//   };

//   export const persistedReducer = persistReducer(
//     persistConfig,
//     contactsSlice.reducer
//   );

  export const { addContact, deleteContact } = contactsReducer.actions;

  export const selectContacts = (state) => state.contacts.items;
  
  export default contactsReducer.reducer;





