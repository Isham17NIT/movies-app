import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isDark : false
}
const darkModeSlice = createSlice({
    name:'theme',
    initialState,
    reducers:{
        toggleTheme: (state)=>{
            state.isDark = !state.isDark
        }
    }
})
export const { toggleTheme } = darkModeSlice.actions;
export default darkModeSlice.reducer