function Form(){
    return(
        <div className="container" style={{ width: "40%" }}>
  <h4>Detail Product</h4>
  <form className="row needs-validation" noValidate="">
    <div className=" col-12 mb-3">
      <label htmlFor="Product-Name" className="form-label">
        Product Name
      </label>
      <input
        type="text"
        className="form-control"
        id="pname"
        style={{ width: "70%" }}
        required=""
      />
      <div className="invalid-feedback">Please insert product name.</div>
    </div>
    <div className="col-12">
      <label htmlFor="Product-Name" className="form-label">
        Product Category
      </label>
      
      <select className="form-select" aria-label="" 
      style={{ width: "50%" }}>
        <option selected="">Choose...</option>
      </select>
      <br />
    </div>
    <div className="col-12 mb-3">
      <label htmlFor="formFile" className="form-label">
        Image of Product
      </label>
      <input
        className="form-control text-primary"
        style={{ border: "1px solid rgba(13, 110, 253, 1)", width: "60%" }}
        type="file"
        id="formFile"
      />
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
        className="form-control pb-5"
        id="add-desc"
        rows={3}
        defaultValue={""}
      />
    </div>
    <div className="col-12 mb-3">
      <label htmlFor="Product-Price" className="form-label">
        Product Price
      </label>
      <input
        type="number"
        className="form-control"
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
  <style
  dangerouslySetInnerHTML={{
    __html:
      "::-webkit-file-upload-button {\n    background: rgba(13, 110, 253, 1) !important;\n    color: white!important;\n}"
  }}
/>

</div>

    )
}

export default Form