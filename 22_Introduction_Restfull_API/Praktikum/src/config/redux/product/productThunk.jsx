import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const url = "https://64324e133e05ff8b3723e65e.mockapi.io/";

export const retrieveProducts = createAsyncThunk(
	"products/retrieveProducts",
	async () => {
		const res = await axios.get(`${url}/product/`);
        console.log(res);
		return res.data;
	}
);