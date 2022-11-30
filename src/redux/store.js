import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const addContact = createAction('myReducer/newContact');
export const removeContact = createAction('myReducer/removeContact');

export const myReducer = createReducer([], {
  [addContact]: (state, action) => state + action.payload,
  [removeContact]: (state, action) => state - action.payload,
});

export const store = configureStore({
  reducer: {
    name: myReducer,
  },
});
