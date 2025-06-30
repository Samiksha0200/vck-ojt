import React, {useState} from 'react'; //import useState
import {Link} from 'react-router-dom'
import './Header.css';

function Header() {
    const [isDrawerOpen,setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };
    // Function to close drawer when a link is clicked
    const closeDrawer  = () => {
      setIsDrawerOpen(false);
    };
    return(
      <header className="main-header">
        {" "}
        {/* Add a wrapper for header content */}
        <div className="college-name">
          <Link to="/"> Vivekanad College </Link>{" "}
          {/* Collge name/logo for desktop & mobile*/}
        </div>
        {/* desktop navigation*/}
        <nav className="navbar desktop-nav">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/courses" className="nav-item">Courses</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
          <Link to="/admission" className="nav-items btn primary-btn">
            Apply Now!
          </Link>{" "}
          {/* Apply Now button */}
        </nav>
        {/* Mobile Humburger Button */}
        <button className="hamburger-menu" onClick={toggleDrawer}>
          <span className="hamburger-icon"></span>
          <span className="hamburger-icon"></span>
          <span className="hamburger-icon"></span>
        </button>
        {/* Mobile Drawer Navigation */}
        <nav className={'drawer-nav ${isDrawerOpen ? "open" : ""}'}>
          <button className="close-drawer-btn" onClick={toggleDrawer}>
            ✕
          </button>
          <Link to="/" className="nav-item" onClick={closeDrawer}>
            Home
          </Link>
          <Link to="/about" className="nav-item" onClick={closeDrawer}>
            About
          </Link>
          <Link to="/courses" className="nav-item" onClick={closeDrawer}>
            Courses
          </Link>
          <Link to="/contact" className="nav-item" onClick={closeDrawer}>
            Contact
          </Link>
          <Link to="/admissions" className="nav-item btn primary-btn"
            onClick={closeDrawer}
          >
            Apply Now!
          </Link>
        </nav>
        {/* Overlay when drawer is open */}
        {isDrawerOpen &&(
          <div className="drawer-overlay" onClick={toggleDrawer}></div>
        )}
      </header>
    );
}

export default Header;