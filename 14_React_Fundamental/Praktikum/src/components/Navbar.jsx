import react from "react"

function Navbar () {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <a className="navbar-brand" href="#">
      Simple Header
    </a>
    <div
      className="collapse navbar-collapse justify-content-end"
      id="navbarTogglerDemo01"
    >
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a
            style={{ backgroundColor: "blue", color: "white" }}
            className="nav-link"
            aria-current="page"
            href="#"
          >
            <span className="text-light">Home</span>
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    )
}

export default Navbar