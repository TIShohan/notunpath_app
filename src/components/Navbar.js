import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../index.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/modules', label: 'Modules' },
    { path: '/consultation', label: 'Consultation' },
    { path: '/chat', label: 'Chat Buddy' },
    { path: '/parents', label: 'Parents' },
    { path: '/faq', label: 'FAQ' },
    { path: '/about', label: 'About' },
  ];

  const isActive = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/home" className="navbar-logo">
          নতুনপথ
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? 'bar bar1 open' : 'bar bar1'}></div>
          <div className={isOpen ? 'bar bar2 open' : 'bar bar2'}></div>
          <div className={isOpen ? 'bar bar3 open' : 'bar bar3'}></div>
        </div>

        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          {navLinks.map((link) => (
            <li key={link.path} className="nav-item">
              <Link 
                to={link.path} 
                className={`nav-link ${isActive(link.path)}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="nav-item">
            <Link to="/" className="nav-link logout-btn" onClick={() => setIsOpen(false)}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
      
      <style>{`
        .navbar {
          background-color: var(--white);
          box-shadow: var(--shadow-sm);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 1rem 0;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-logo {
          color: var(--primary-color);
          font-size: 1.8rem;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          list-style: none;
          gap: 2rem;
        }

        .nav-link {
          color: var(--text-main);
          font-weight: 500;
          font-size: 1rem;
          position: relative;
        }

        .nav-link:hover, .active-link {
          color: var(--primary-color);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--primary-color);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after, .active-link::after {
          width: 100%;
        }

        .logout-btn {
          color: var(--accent-orange);
        }
        
        .logout-btn:hover {
          color: #d97706;
        }

        .menu-icon {
          display: none;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
        }

        .bar {
          width: 25px;
          height: 3px;
          background-color: var(--secondary-color);
          transition: all 0.3s ease;
        }

        @media (max-width: 960px) {
          .nav-menu {
            position: fixed;
            left: -100%;
            top: 70px;
            flex-direction: column;
            background-color: var(--white);
            width: 100%;
            height: calc(100vh - 70px);
            text-align: center;
            transition: 0.3s;
            box-shadow: var(--shadow-md);
            padding-top: 2rem;
          }

          .nav-menu.active {
            left: 0;
          }

          .menu-icon {
            display: flex;
          }

          .bar1.open {
            transform: rotate(-45deg) translate(-5px, 6px);
          }

          .bar2.open {
            opacity: 0;
          }

          .bar3.open {
            transform: rotate(45deg) translate(-5px, -6px);
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
