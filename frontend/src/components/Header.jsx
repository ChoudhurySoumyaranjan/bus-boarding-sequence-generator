import React from 'react'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <header className="site-header">

      <div className="header-container">

        {/* Logo */}
        <Link to="/" className="brand">
          <div className="brand-icon">
            B
          </div>

          <div>
            <span className="brand-name">BusBoard</span>
            <span className="brand-tagline">Boarding Sequence</span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="navigation">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            About
          </NavLink>

          <Link to="boarding" className="header-button">
            Generate Sequence
          </Link>

        </nav>

      </div>

    </header>
  );
}

export default Header;