/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg mx-lg-0 mx-5">
      <div className="container-fluid">
        <img src="Images/Logo.png" alt="logo" />
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navItem"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse Navbar-item" id="navItem">
          <ul className="navbar-nav ms-auto gap-3">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Used Cars
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Auctions
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                New Cars
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Sell Cars
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Local Dealers
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Support
              </a>
            </li>
            <li className="nav-item signUp">
              <a href="#" className="nav-link">
                <i className="bi bi-person-fill" />
                <span> Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
