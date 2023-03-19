function Table(){
    return(
            <div className="container">
              <h3 className="text-center">List Product</h3>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Category</th>
                    <th scope="col">Image of Product</th>
                    <th scope="col">Product Freshness</th>
                    <th scope="col">Additional Desciption</th>
                    <th scope="col">Product Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>Brand new</td>
                    <td>adipiscing</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>Second Hand</td>
                    <td>adipiscing</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>Brand new</td>
                    <td>adipiscing</td>
                    <td>1</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Lorem</td>
                    <td>ipsum</td>
                    <td>dolor</td>
                    <td>Refurshibed</td>
                    <td>adipiscing</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="pprice"
                  placeholder="Search Product Name"
                />
              </div>
              <div className="row">
                <div className="col-md-1">
                  <button type="button" className="btn btn-primary mb-3">
                    Deletion
                  </button>
                </div>
                <div className="col-md-1">
                  <button
                    type="button"
                    className="btn btn-light mb-3"
                    style={{ border: "1px solid blue", color: "blue" }}
                  >
                    Search
                  </button>
                </div>
            </div>
            </div>

    )
}

export default Table