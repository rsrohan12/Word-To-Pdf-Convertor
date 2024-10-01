import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"
export const store = configureStore({ // we have to store the reducers 
    reducer: todoReducer
})