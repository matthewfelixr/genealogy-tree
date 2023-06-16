import React from 'react'
import './navbar.css'
function Navbar() {
  return (

  <nav className="navbar">
    <div className="container-fluid row">
      <div className="navbar-brand text-light col-2">Logo</div>
      <form className="d-flex col-9" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-light btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  )
}

export default Navbar