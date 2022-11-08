import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    contacts: [],
};


const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        saveContact: (state = initialState, action) => {
            state.contacts = [...state.contacts, action.payload]
            console.log("save contact", state.contacts);
        },
        editContact: (state = initialState, action) => {
            const { id, name, phone, email } = action.payload;
            const existingContact = state.contacts.find((contact) => contact.id === id)
            if (existingContact) {
                existingContact.name = name;
                existingContact.email = email;
                existingContact.phone = phone;  
            }
        },
        deleteContact: (state = initialState, action) => {
            const  id  = action.payload;
            const existContact = state.contacts.filter((contact) => contact.id !== id)
            state.contacts = [...existContact]
        }
    }
})

export const { saveContact, editContact, deleteContact } = contactSlice.actions
export const contactSelector = (state) => state.contact
export default contactSlice.reducer 