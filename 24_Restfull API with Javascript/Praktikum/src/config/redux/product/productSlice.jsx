import { createSlice } from "@reduxjs/toolkit";
import { retrieveProducts, addProducts, deleteProducts, updateProducts } from "./productThunk";

const initialState = {
	products: [
		{
			uuid: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
			productName: "John",
			productCategory: "Doe",
			productFreshness: "Doe",
			productPrice: 0,
			productImage: "Doe",
			productDescription: "Doe",
		},
	],
	retrieveProductsloading : false,
	retrieveProductserror : undefined,
};

const productSlice = createSlice({
	name: "products",
	initialState: initialState,
	reducers: {
		// add: (state, action) => {
		// 	return {
		// 		...state,
		// 		products: action.payload,
		// 	};
		// },
		// delete: (state, action) => {
		// 	return {
		// 		...state,
		// 		products: action.payload,
		// 	};
		// },
		// update: (state, action) => {
		// 	return {
		// 		...state,
		// 		products: action.payload,
		// 	};
		// },
	},
	extraReducers: (builder) => {
		builder.addCase(retrieveProducts.fulfilled, (state, action) => {
			return {
				...state,
				products: action.payload,
				type: action.type,
			};
		});
		builder.addCase(addProducts.fulfilled, (state, action) => {
			return {
				...state,
				products: [action.payload],
				type: action.type,
			};
		});
		builder.addCase(deleteProducts.fulfilled, (state, action) => {
			return {
				...state,
				products: [action.payload],
				type: action.type,
			};
		});
		builder.addCase(updateProducts.fulfilled, (state, action) => {
			return {
				...state,
				products: [action.payload],
				type: action.type,
			};
		});
	}
});

export default productSlice;
