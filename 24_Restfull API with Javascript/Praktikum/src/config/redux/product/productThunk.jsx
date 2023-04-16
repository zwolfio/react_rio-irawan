import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://64324e133e05ff8b3723e65e.mockapi.io/product/";

export const retrieveProducts = createAsyncThunk(
	"products/retrieveProducts",
	async () => {
		const res = await axios.get(`${url}`);
        console.log(res);
		return res.data;
	}
);

export const addProducts = createAsyncThunk(
	"products/addProducts",
	async (param) => {
		const res = await axios.post(`${url}`, param);
		return res.data;
			
	}
);
export const deleteProducts = createAsyncThunk(
	"products/deleteProducts",
	async (id) => {
		const res = await axios.delete(`${url}${id}`);
		return res.data;
	}
);
export const updateProducts = createAsyncThunk(
	"products/updateProducts",
	async (param) => {
		const res = await axios.put(`${url}${param.id}`, param);
		return res.data;
	}
);