import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getDetailProduct } from "../../config/redux/Apollo/product";
import { useQuery } from "@apollo/client";

const DetailProduct = () => {
	const { id } = useParams();
	const { loading, data, error } = useQuery(getDetailProduct,{
		variables: {uuid: id},
	});

	if (loading) return <p>loading...</p>;
	if (error) return <p>error...</p>;
	const products = data.product[0];

	return (
		<div>
			<div className="d-flex min-vh-100 justify-content-center align-items-center">
				<div className="w-25 p-5 rounded shadow">
					<Link to="/createproduct">
						<button className="btn btn-primary mb-3">Kembali</button>
					</Link>
					<p>id : {products.uuid}</p>
					<p>Nama Product : {products.productName}</p>
					<p>Category : {products.productCategory}</p>
					<p>Image : {products.productImage}</p>
					<p>Freshness : {products.productFreshness}</p>
					<p>Description : {products.productDescription}</p>
					<p>Price : ${products.productPrice}</p>
				</div>
			</div>
		</div>
	);
};

export default DetailProduct;
