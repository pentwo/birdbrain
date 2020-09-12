import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"

function Navbar() {
  const logoStyle = {
    width: "120px",
  }
  return (
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-light   p-4">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <AnchorLink class="nav-link" href="#">
                Home <span class="sr-only">(current)</span>
              </AnchorLink>
            </li>
            <li class="nav-item">
              <AnchorLink class="nav-link" href="#intro">
                Intro
              </AnchorLink>
            </li>
            <li class="nav-item">
              <AnchorLink class="nav-link" href="#benefits">
                Benefits
              </AnchorLink>
            </li>
            <li class="nav-item">
              <AnchorLink class="nav-link" href="#tech">
                Tech
              </AnchorLink>
            </li>
            <li class="nav-item">
              <AnchorLink class="nav-link" href="#contact">
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
      <nav className="navbar navbar-dark">
        <h4>
          <img
            src="https://res.cloudinary.com/pentwo/image/upload/v1570340725/stock-images/bb_logo_lgdkrd.svg"
            alt="bb_logo"
            style={logoStyle}
          />
        </h4>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>
  )
}

export default Navbar
