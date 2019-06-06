import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

const Header = () => {
  return (
    <header className="header-content">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">LOGO</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
