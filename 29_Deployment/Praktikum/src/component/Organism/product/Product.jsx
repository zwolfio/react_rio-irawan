import React, { useState } from "react";
import { getProduct, search } from "../../../config/redux/Apollo/product";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const Product = () => {
    const [dataProduct, setdataProduct] = useState (false)
    const {data : product,loading} = useQuery(getProduct);
    const [Search, setSearch] = useState()
    const {data : productSearch} = useQuery(search,{
        variables: {productName:Search}
    })
    
    const temp = () => {
        
        if (dataProduct==false && loading == false){
            setdataProduct(true)
            setItem(product.product)
        }
    }
    const [Item, setItem] = useState();
    temp()
    console.log(Item);
    
    const [loadMore, setloadMore] = useState(4);
    const handleLoad = () => {
        setloadMore(loadMore + 4)
    };
    

    const handleSearch = () => {
        if (Search) {
            setItem(productSearch.product)
        } else {
            setItem(product.product)
        }
    };

    

    return (

        <div>
            <div className="container">
                <h2 className="pt-3"><strong>List Product</strong>  </h2>
                <div className="row">
                    <div className="col-8 mb-3 pt-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Masukan nama product yang dicari"
                            aria-describedby="button-search"
                            value={Search}
                            onChange={(e)=> setSearch(e.target.value)}
                            id="search"
                            name="search"
                        />
                    </div>
                    <div className="col-4 mb-3 pt-3">
                        <button 
                            className="btn btn-outline-secondary" 
                            type="button" 
                            id="button-search" 
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <div className="row"> 
                    {Item?.slice(0, loadMore).map((item, idx) => (
                        <div key={idx} className="col-md-3 mb-3" >
                            <div className="card">
                                <img
                                    src="https://placehold.co/600x400"
                                    className="card-img-top"
                                    alt={item.productName}
                                />
                                 <div className="card-body">
                                    <h5>{item.productName}</h5>
                                    <p>{item.productDescription}</p>
                                    <button className="btn btn-outline-primary me-1">
											<Link
												to={`/DetailProduct/${item.uuid}`}
												className="text-decoration-none">
												Detail
											</Link>
										</button>
										<button className="btn btn-outline-warning me-1">
											<Link
												to={`/editproduct/${item.uuid}`}
												className="text-decoration-none">
												Edit
											</Link>
										</button>
										<button
											className="btn btn-outline-danger"
											onClick={() => handleDelete(product.id)}>
											Delete
										</button>
                                 </div>
                            </div>
                        </div>

                    ))}
                    <div>
                        {Item?.length > loadMore && (
                            <button 
                            className="btn btn-outline-primary me-1 mt-3"
                            onClick={handleLoad}
                            >
                                Load More
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <hr></hr>
        </div>

    )

}

export default Product;