import React, { useState } from "react";
import Navbar from "../../component/Organism/Navbar/Navbar";
import InputProduct from "../../component/Organism/Input Product/InputProduct";
import ListProduct from "../../component/Organism/List Product/ListProduct";
import Article from "../../Article";
import { useEffect } from "react";
// import { useProductSelector } from "../../config/redux/product/productSelector";
import { useSelector  ,useDispatch } from "react-redux";
import productSlice from "../../config/redux/product/productSlice";
import { retrieveProducts, deleteProducts } from "../../config/redux/product/productThunk";

function CreateProduct() {
	const products = useSelector((state) => state.products.products);
	
	
	const [isIndonesia, setIsIndonesia] = useState(false);
	const handleBahasa = () => setIsIndonesia(!isIndonesia);

	const dispatch = useDispatch();

	const handleDelete = (id) => {
		if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
			dispatch(deleteProducts(id));
			
		}
	};
	const type = useSelector((state) => state.products.type);
	
	useEffect(() => {
		dispatch(retrieveProducts());
		if (type === "deleteProducts.fulfilled") {
			dispatch(retrieveProducts());
			
		}
		
	}, [type]);

	return (
		<div>
			<Navbar />
			<InputProduct
				article={Article}
				bahasa={isIndonesia}
				gantiBahasa={handleBahasa}
			/>
			<ListProduct products={products} handleDelete={handleDelete} />
		</div>
	);
}

export default CreateProduct;
