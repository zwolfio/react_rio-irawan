import React, { useState } from "react";
import Navbar from "../../component/Organism/Navbar/Navbar";
import InputProduct from "../../component/Organism/Input Product/InputProduct";
import ListProduct from "../../component/Organism/List Product/ListProduct";
import Article from "../../Article";
import { useEffect } from "react";
// import { useProductSelector } from "../../config/redux/product/productSelector";
import { useSelector  ,useDispatch } from "react-redux";
import { getProduct, deleteProduct, subProduct } from "../../config/redux/Apollo/product";
import { retrieveProducts, deleteProducts } from "../../config/redux/product/productThunk";
import { useMutation, useSubscription } from "@apollo/client";
import EditProduct from "../EditProduct/EditProduct";

const CreateProduct = () => {
	const [deleteProducts] = useMutation (deleteProduct)
	const { data } = useSubscription(subProduct);
	console.log(data);
	
	const [isIndonesia, setIsIndonesia] = useState(false);
	const handleBahasa = () => setIsIndonesia(!isIndonesia);

	const dispatch = useDispatch();

	const handleDelete = async (id) => {
		if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
			await deleteProducts({
				variables: {
					id,
				}
			})
		}
	};
	// const type = useSelector((state) => state.products.type);
	
	// useEffect(() => {
	// 	dispatch(retrieveProducts());
	// 	if (type === "deleteProducts.fulfilled") {
	// 		dispatch(retrieveProducts());
			
	// 	}
		
	// }, [type]);

	return (
		<div>
			<Navbar />
			<InputProduct
				article={Article}
				bahasa={isIndonesia}
				gantiBahasa={handleBahasa}
				
			/>
			<ListProduct products={data} handleDelete={handleDelete} />
		</div>
	);
}

export default CreateProduct;
