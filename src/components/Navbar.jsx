import { Link, useLocation } from 'react-router-dom'
import { SunIcon, MoonIcon } from './Icons'

function Navbar({ theme, setTheme }) {
  const { pathname } = useLocation()

  return (
    <nav className="navbar">
      <Link to="/" className="logo">AD</Link>
      <div className="nav-links">
        <Link to="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to="/projects" className={pathname === '/projects' ? 'active' : ''}>Projects</Link>
        <Link to="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
        <Link to="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
      </div>
      <button className="theme-btn" onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
        {theme === 'dark' ? <SunIcon size={16} /> : <MoonIcon size={16} />}
      </button>
    </nav>
  )
}

export default Navbar
