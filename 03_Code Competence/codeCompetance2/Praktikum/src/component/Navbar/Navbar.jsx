import React from "react";

const Navbar = () => {

    return (

        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand ps-5" href="#">
                    <span style={{ color: "#4cb7d8" }}>
                        <strong>Logoo</strong>
                    </span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavbar"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse " id="collapsibleNavbar">
                    <ul className="navbar-nav ms-auto pe-3">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">
                                About us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact">
                                Contact us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Navbar