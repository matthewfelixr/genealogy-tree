import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const token = localStorage.getItem("token")
  return (
    <nav className="navbar">
      <div className="container-fluid row">
        <div className="navbar-brand text-light col-2">
          {token ? (
            <Link to={'/admin'}>GenTree</Link>
          ) : (
            <Link to={'/'}>GenTree</Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
