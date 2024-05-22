import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from '../features/contacts/contactSlice'

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
})
