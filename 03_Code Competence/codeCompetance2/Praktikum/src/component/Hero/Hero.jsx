import React from "react";

const Hero = () => {

    return (
        <div className="p-5 mb-4 bg-light rounded-3">
        <div className="container-fluid py-5 hero">
          <div className="row">
            <div className="col-md-6 pb-5 align-content-center">
              <h1 className="display-5 fw-bold pb-3">
                Welcome to
                <br /> our page
              </h1>
              <p className="col-md-8 fs-10">
                Using a series of utilities, you can create this jumbotron, just like
                the one in previous versions of Bootstrap. Check out the examples
                below for how you can remix and restyle it to your liking.
              </p>
              <button className="btn btn-primary rounded-pill" type="button">
                Jangan di Tekan
              </button>
            </div>
            <div className="col-md-6">
              <img src="./src/assets/heroo.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    )

}

export default Hero