import {createSlice} from "@reduxjs/toolkit";
import {add, edit, getAll, getProductById, remove} from "../services/productService";

const initialState = {
    list: [],
    product: {
        title: "",
        price: "",
        description: ""
    }
}
const productSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getAll.fulfilled, (state, {payload}) => {
                state.list = payload;
            })
            .addCase(add.fulfilled, (state, {payload}) => {
            })
            .addCase(remove.fulfilled, (state, {payload}) => {
            })
            .addCase(getProductById.fulfilled, (state, {payload}) => {
                state.product = payload
            })
            .addCase(edit.fulfilled, (state, action) => {
            })
    }
})
export default productSlice.reducer;