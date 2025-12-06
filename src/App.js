import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
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
import Profile from './Pages/Profile';
import Forum from './Pages/Forum';
import './App.css';

// Component to redirect logged-in users from login page to home
function LoginRedirect() {
  const { currentUser } = useAuth();

  // If user is logged in, redirect to home
  if (currentUser) {
    return <Navigate to="/home" replace />;
  }

  // Otherwise, show login page
  return <Login />;
}

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
            <Link to="/faq" onClick={closeMenu} className="melo-btn">🤗 Melo</Link>
            <Link to="/forum" onClick={closeMenu}>Forum</Link>
            <Link to="/consultation" onClick={closeMenu}>Consultation</Link>
            <Link to="/parents" onClick={closeMenu}>Parents</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>

            {/* SOS Emergency Button */}
            <Link
              to="/emergency"
              onClick={closeMenu}
              className="sos-btn"
            >
              🚨 Urgent Help
            </Link>

            {/* User Info & Logout */}
            <div className="nav-user">
              {userProfile && (
                <Link to="/profile" onClick={closeMenu} className="user-name" style={{ textDecoration: 'none', color: 'inherit' }}>
                  👤 {userProfile.name}
                </Link>
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
            {/* Public Route - Login (redirects to home if already logged in) */}
            <Route path="/" element={<LoginRedirect />} />

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

            <Route path="/profile" element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            } />

            <Route path="/forum" element={
              <PrivateRoute>
                <Forum />
              </PrivateRoute>
            } />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
