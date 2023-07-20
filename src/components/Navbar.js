// imr
import React from 'react'
// impt
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';



export default function Navbar(props) {
  return (
    <nav className= {`navbar container navbar-${props.mode} bg-${props.mode} navbar-expand-lg` }>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">{props.aboutText}</a>
          </li>
        
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark': 'light'}`}>
  <input className="form-check-input my-2 mx-3" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label> */}
</div>
        </form>
      </div>
    </div>
  </nav>
  )
}

// pts (PropTypes)
Navbar.propTypes = {title: PropTypes.string.isRequired,
                    aboutText: PropTypes.string,
                    };

Navbar.defaultProps={
    title: 'Set title here',
    aboutText: 'Your About'
};

