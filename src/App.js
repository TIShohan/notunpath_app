import React from 'react';
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
import './App.css';

// Navigation component that uses auth state
function Navigation() {
  const { currentUser, userProfile, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      navigate('/');
    }
  };

  return (
    <nav>
      {currentUser ? (
        <>
          <Link to="/home">Home</Link>
          <Link to="/modules">Modules</Link>
          <Link to="/faq">Chat Buddy</Link>
          <Link to="/parents">Parents</Link>
          <Link to="/about">About</Link>
          {userProfile && (
            <span style={{
              marginLeft: 'auto',
              color: '#1976d2',
              fontWeight: 'bold',
              fontSize: '0.95em'
            }}>
              👤 {userProfile.name}
            </span>
          )}
          <button
            onClick={handleLogout}
            style={{
              background: 'linear-gradient(90deg, #f44336 0%, #d32f2f 100%)',
              color: 'white',
              border: 'none',
              padding: '6px 16px',
              borderRadius: '6px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '0.9em'
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <Link to="/">Login</Link>
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
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

