import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Modules from './Pages/Modules';
import FAQ from './Pages/FAQ';
import Parents from './Pages/Parents';
import About from './Pages/About';
import ModuleDetails from './Pages/ModuleDetails';
import Consultation from './Pages/Consultation';
import Emergency from './Pages/Emergency';
import './App.css';

// Navigation component with hamburger menu
function Navigation() {
  const { currentUser, userProfile, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      navigate('/');
    }
    setIsMenuOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {currentUser ? (
        <>
          {/* Hamburger Button */}
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* App Title/Logo */}
          <div className="nav-logo">
            নতুনপথ
          </div>

          {/* Navigation Links */}
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <Link to="/home" onClick={closeMenu}>Home</Link>
            <Link to="/modules" onClick={closeMenu}>Modules</Link>
            <Link to="/faq" onClick={closeMenu}>Melo</Link>
            <Link to="/consultation" onClick={closeMenu}>Consultation</Link>
            <Link to="/parents" onClick={closeMenu}>Parents</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>

            {/* SOS Emergency Button */}
            <Link
              to="/emergency"
              onClick={closeMenu}
              className="sos-btn"
            >
              🚨 SOS
            </Link>

            {/* User Info & Logout */}
            <div className="nav-user">
              {userProfile && (
                <span className="user-name">
                  👤 {userProfile.name}
                </span>
              )}
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
            </div>
          </div>

          {/* Overlay for mobile */}
          {isMenuOpen && (
            <div className="nav-overlay" onClick={closeMenu}></div>
          )}
        </>
      ) : (
        <div className="nav-links">
          <Link to="/">Login</Link>
        </div>
      )}
    </nav>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Navigation />

          {/* Page Routes */}
          <Routes>
            {/* Public Route - Login */}
            <Route path="/" element={<Login />} />

            {/* Protected Routes - Require Authentication */}
            <Route path="/home" element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } />

            <Route path="/modules" element={
              <PrivateRoute>
                <Modules />
              </PrivateRoute>
            } />

            <Route path="/modules/:id" element={
              <PrivateRoute>
                <ModuleDetails />
              </PrivateRoute>
            } />

            <Route path="/faq" element={
              <PrivateRoute>
                <FAQ />
              </PrivateRoute>
            } />

            <Route path="/consultation" element={
              <PrivateRoute>
                <Consultation />
              </PrivateRoute>
            } />

            <Route path="/parents" element={
              <PrivateRoute>
                <Parents />
              </PrivateRoute>
            } />

            <Route path="/about" element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            } />

            <Route path="/emergency" element={
              <PrivateRoute>
                <Emergency />
              </PrivateRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
