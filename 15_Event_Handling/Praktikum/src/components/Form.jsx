import { useState } from "react"

function Form(){
  
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("")
  const [productImg, setProductImg] = useState('');
  const [productPrice, setProductPrice] = useState();
  const [productDesc, setProductDesc] = useState();

  const changeproduct = (e) => {
		if (e.target.value.length >= 10) {
			alert("Product name tidak boleh 10 karakter");
			e.target.value = "";
		}
		setProductName(e.target.value);
	};

  const changeimg = (e) => setProductImg(e.target.value);
  const changeprice = (e) => setProductPrice(e.target.value);
  const changedesc = (e) => setProductDesc(e.target.value);
  
  const changecategory = (e) =>{
    if (e.target.value == "") {
			alert("Harap Memilih Product Category");
		}
		setProductCategory(e.target.value);
  }
  


    return(
        <div className="container" style={{ width: "40%" }}>
          <h4>Detail Product</h4>
            <form className="row needs-validation" noValidate="" >
              <div className=" col-12 mb-3">
                <label htmlFor="Product-Name" className="form-label">
                  Product Name
                </label>
                <input 
                  className={productName ? "form-control" : "form-control is-invalid"}
                  autoComplete='off'
                  type="text"
                  onChange={changeproduct}
                  id="pname"
                  name="pname"
                  style={{ width: "70%" }}
                  required=""
                />
                <div className="invalid-feedback">Please add a product name.</div>
              </div>

              <div className="col-12">
                <label htmlFor="Product-Name" className="form-label">
                  Product Category
                </label>
                
                <select 
                  className={productCategory ? "form-select" : "form-select is-invalid"}
                  aria-label="Default" 
                  onChange={changecategory}
                  style={{ width: "50%" }} 
                  required>
                      <option value={""}></option>
                      <option value={1}>electro</option>
                      <option value={2}>fashion</option>
                      <option value={3}>whatever</option>
                </select>
                <div className="invalid-feedback">
										Please choose a product category.
								</div>
                <br />
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="formFile" className="form-label">
                  Image of Product
                </label>
                <input
                  className={productImg ?"form-control text-primary" : "form-control is-invalid text-danger"}
                  onChange={changeimg}
                  style={ { width: "60%" }}
                  type="file"
                  id= "FormImg"
                />
                <div className="invalid-feedback">
										Please choose a image product.
								</div>
              </div>

              <div className="col-12">
                <label>Product Freshness</label> <br />
                <div className=" form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="brandnew"
                    id="brandnew"
                  />
                  <label className="form-check-label" htmlFor="brandnew">
                    Brand New
                  </label>
                </div>
                <div className=" form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="secondhand"
                    id="secondhand"
                  />
                  <label className="form-check-label" htmlFor="secondhand">
                    Second Hand
                  </label>
                </div>
                <div className=" form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="refurbished"
                    id="refurbished"
                  />
                  <label className="form-check-label" htmlFor="refurbished">
                    Refurbished
                  </label>
                </div>
              </div>

              <div className="col-12 mb-3">
                <label htmlFor="add-desc" className="form-label">
                  Additional Description
                </label>
                <textarea
                  className= {productDesc?"form-control pb-5":"form-control is-invalid"}
                  onChange={changedesc}
                  id="add-desc"
                  rows={3}
                />
                <div className="invalid-feedback">
										Please choose a description product.
								</div>
              </div>
    
              <div className="col-12 mb-3">
                <label htmlFor="Product-Price" className="form-label">
                  Product Price
                </label>
                <input
                  type="number"
                  onChange={changeprice}
                  className={productPrice?"form-control":"form-control is-invalid"}
                  id="pprice"
                  placeholder="$1"
                  required=""
                />
                <div className="invalid-feedback">Please insert price product .</div>
              </div>
    <div className="col-12">
      <button type="submit" className="btn btn-primary mb-3">
        Submit
      </button>
    </div>
  </form>

  {productImg ?
  <style
  dangerouslySetInnerHTML={{
    __html:
    "::-webkit-file-upload-button {background: rgba(13, 110, 253, 1) !important;color: white!important;}"
      }}
  />:
  <style
    dangerouslySetInnerHTML={{
      __html:
        "::-webkit-file-upload-button {background: rgb(253, 13, 13) !important;color: white!important;}"
        }}
  />}

</div>

    )
}

export default Form