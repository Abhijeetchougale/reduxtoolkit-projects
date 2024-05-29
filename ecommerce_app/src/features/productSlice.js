import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name:"products",
    initialState:{
        FilterProducts:"",
    },
    reducers:{
        FilterProducts(state,action){

        },
    }
})    

export const {FilterProducts} = productsSlice.actions;
export default productsSlice.reducer;