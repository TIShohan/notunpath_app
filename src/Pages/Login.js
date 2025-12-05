import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
  const [form, setForm] = useState({
    email: '',
    phone: '',
    name: '',
    dateOfBirth: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        // Login Mode
        if (!form.email || !form.password) {
          setError('Please enter email and password.');
          setLoading(false);
          return;
        }

        const result = await login(form.email, form.password);

        if (result.success) {
          navigate('/home');
        } else {
          setError(getErrorMessage(result.error));
        }
      } else {
        // Register Mode
        if (!form.email || !form.phone || !form.name || !form.dateOfBirth || !form.password) {
          setError('Please fill in all fields.');
          setLoading(false);
          return;
        }

        // Calculate age from date of birth
        // Parse DD/MM/YYYY format
        let birthDate;
        if (form.dateOfBirth.includes('/')) {
          const [day, month, year] = form.dateOfBirth.split('/');
          birthDate = new Date(year, month - 1, day);
        } else {
          birthDate = new Date(form.dateOfBirth);
        }

        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }

        if (age < 12) {
          setError('You must be at least 12 years old to register.');
          setLoading(false);
          return;
        }

        if (form.password.length < 6) {
          setError('Password must be at least 6 characters.');
          setLoading(false);
          return;
        }

        const result = await register(form.email, form.password, {
          name: form.name,
          phone: form.phone,
          dateOfBirth: form.dateOfBirth,
          age: age
        });

        if (result.success) {
          navigate('/home');
        } else {
          setError(getErrorMessage(result.error));
        }
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Convert Firebase error codes to user-friendly messages
  const getErrorMessage = (error) => {
    if (error.includes('email-already-in-use')) {
      return 'This email is already registered. Please login instead.';
    } else if (error.includes('invalid-email')) {
      return 'Please enter a valid email address.';
    } else if (error.includes('weak-password')) {
      return 'Password should be at least 6 characters.';
    } else if (error.includes('user-not-found')) {
      return 'No account found with this email. Please register first.';
    } else if (error.includes('wrong-password')) {
      return 'Incorrect password. Please try again.';
    } else if (error.includes('invalid-credential')) {
      return 'Invalid email or password. Please try again.';
    } else {
      return error || 'Something went wrong. Please try again.';
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setError('');
    setForm({
      email: '',
      phone: '',
      name: '',
      dateOfBirth: '',
      password: ''
    });
  };

  return (
    <div className="module-box" style={{ maxWidth: '450px', margin: '40px auto', padding: '30px' }}>
      {/* Logo */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src="/logo512.png"
          alt="নতুনপথ Logo"
          style={{
            width: '80px',
            height: '80px',
            marginBottom: '10px'
          }}
        />
      </div>

      <h1>{isLogin ? '🔐 Login' : '📝 Register'}</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '20px' }}>
        {isLogin ? 'Welcome back to নতুনপথ' : 'Create your নতুনপথ account'}
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #90caf9', fontSize: '15px' }}
        />

        {!isLogin && (
          <>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid #90caf9', fontSize: '15px' }}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              style={{ padding: '12px', borderRadius: '8px', border: '1px solid #90caf9', fontSize: '15px' }}
            />
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                name="dateOfBirth"
                placeholder="Date of Birth (DD/MM/YYYY)"
                value={form.dateOfBirth}
                onChange={handleChange}
                onFocus={(e) => {
                  // Show calendar picker on focus
                  if (e.target.showPicker) {
                    e.target.type = 'date';
                  }
                }}
                onBlur={(e) => {
                  // Convert back to text if user didn't select from calendar
                  if (e.target.type === 'date' && e.target.value) {
                    // Convert YYYY-MM-DD to DD/MM/YYYY for display
                    const [year, month, day] = e.target.value.split('-');
                    setForm({ ...form, dateOfBirth: `${day}/${month}/${year}` });
                    e.target.type = 'text';
                  } else {
                    e.target.type = 'text';
                  }
                }}
                required
                pattern="\d{2}/\d{2}/\d{4}"
                title="Please enter date in DD/MM/YYYY format"
                style={{
                  padding: '12px',
                  paddingRight: '40px',
                  borderRadius: '8px',
                  border: '1px solid #90caf9',
                  fontSize: '15px',
                  width: '100%'
                }}
              />
              <span
                onClick={(e) => {
                  const input = e.target.previousSibling;
                  input.type = 'date';
                  input.focus();
                  if (input.showPicker) {
                    input.showPicker();
                  }
                }}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  color: '#1976d2'
                }}
                title="Open calendar"
              >
                📅
              </span>
            </div>

          </>
        )}

        <input
          type="password"
          name="password"
          placeholder="Password (min 6 characters)"
          value={form.password}
          onChange={handleChange}
          required
          style={{ padding: '12px', borderRadius: '8px', border: '1px solid #90caf9', fontSize: '15px' }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: '14px',
            background: loading ? '#ccc' : 'linear-gradient(90deg, #64b5f6 0%, #1976d2 100%)',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontWeight: 'bold',
            fontSize: '16px',
            marginTop: '10px',
            cursor: loading ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          {loading ? '⏳ Please wait...' : (isLogin ? '🔓 Login' : '✨ Create Account')}
        </button>
      </form>

      {error && (
        <div style={{
          color: '#d32f2f',
          marginTop: '15px',
          textAlign: 'center',
          padding: '10px',
          background: '#ffebee',
          borderRadius: '6px',
          fontSize: '14px'
        }}>
          ⚠️ {error}
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p style={{ color: '#666', fontSize: '14px' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={toggleMode}
            style={{
              background: 'none',
              border: 'none',
              color: '#1976d2',
              fontWeight: 'bold',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '14px'
            }}
          >
            {isLogin ? 'Register here' : 'Login here'}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
