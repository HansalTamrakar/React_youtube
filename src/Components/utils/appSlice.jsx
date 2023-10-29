import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen:true,
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen=!state.isMenuOpen;
        },
       
    }
})
export const { toggleMenu } = appSlice.actions;
export default appSlice.reducer;