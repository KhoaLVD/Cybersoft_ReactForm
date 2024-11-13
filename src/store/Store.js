import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./../Form/duck/reducer"

const store = configureStore({
    reducer:{
        studentReducer,
    }
})

export default store;