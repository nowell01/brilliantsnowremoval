import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from './Logo'
import { navLinks, PHONE, PHONE_LINK } from '../data'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <Link to="/" onClick={() => setMenuOpen(false)}>
        <Logo />
      </Link>

      <nav className="nav-links">
        {navLinks.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="nav-buttons">
        <NavLink to="/quote" className="btn btn-outline btn-small">
          Get a quote
        </NavLink>
        <a href={PHONE_LINK} className="btn btn-navy btn-small">
          Call {PHONE}
        </a>
      </div>

      <button className="burger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
        <span></span>
        <span></span>
      </button>

      {menuOpen && (
        <div className="mobile-menu navy-bg">
          <div className="mobile-menu-top">
            <Logo light small />
            <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
              ×
            </button>
          </div>
          <div className="mobile-menu-links">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
                {link.label === 'Areas' ? 'Service areas' : link.label}
              </Link>
            ))}
          </div>
          <div className="mobile-menu-buttons">
            <a href={PHONE_LINK} className="btn btn-white">
              Call {PHONE}
            </a>
            <Link to="/quote" className="btn btn-ghost" onClick={() => setMenuOpen(false)}>
              Request a quote
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
