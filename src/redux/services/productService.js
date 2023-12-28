import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getAll = createAsyncThunk(
    "products/getAll",
    async () => {
        let res = await axios.get("http://localhost:3001/products");
        return res.data;
    }
)
export const add = createAsyncThunk(
    "products/add",
    async (newProduct) => {
        let newProductRes = await axios.post("http://localhost:3001/products", newProduct);
        return newProductRes.data;
    }
)
export const remove = createAsyncThunk(
    "products/remove",
    async (idDelete) => {
        await axios.delete(`http://localhost:3001/products/${idDelete}`)
    }
)
export const getProductById = createAsyncThunk(
    "products/getProductById",
    async (idProduct) => {
        let res = await axios.get(`http://localhost:3001/products/${idProduct}`)
        return res.data
    }
)
export const edit = createAsyncThunk(
    "products/edit",
    async (editProduct) => {
        let editProductRes = await axios.put("http://localhost:3001/products/" + editProduct.id, editProduct);
        return editProductRes.data;
    }
)