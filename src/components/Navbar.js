import React from 'react'
import PropTypes from 'prop-types'
import {
    // BrowserRouter,remove comment when you needed.
    // Route,remove comment when you needed.
    // Routes,remove comment when you needed.
  Link,
} from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link  className="navbar-brand" to="/">
    {props.title}
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="btn btn-primary my-3 mx-3" aria-current="page" to="/Home">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link  className="btn btn-primary my-3 mx-3" to="/News">
            News
          </Link>
        </li>

        <li className="nav-item">
          <Link  className="btn btn-primary my-3 mx-3" to="/About">
            About
          </Link>
        </li>


        <li className="nav-item">
          <Link  className="btn btn-primary my-3 mx-3" to="/Form">
            Report
          </Link>
        </li>
        <li className="nav-item">
          <Link  className="btn btn-primary my-3 mx-3" to="/Login">
            Login
          </Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2 mx-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success mx-3" type="submit">
          Search
        </button>
      </form>
      <div className={`form-check form-switch text-${props.mode==='white'?'black':'white'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='white'?'Dark':'Light'} Mode</label>
</div>
      
    </div>
  </div>
</nav>
    </>
  )
}
Navbar.propTypes={
    title:PropTypes.string,
    
}
Navbar.defaultProps={
    title:"SahajGunaso",
}