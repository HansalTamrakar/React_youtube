import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
const store = configureStore({
    reducer:{
        slice:appSlice,
    }
})
export default store;