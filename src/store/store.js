import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"

const store = configureStore({
    reducer:{
        auth:authReducer   //Source of this is initialState in createSlice in authSlice,js
    }
})

export default store;