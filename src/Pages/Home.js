import React from 'react';
import { useAuth } from '../context/AuthContext';

function Home() {
  const { userProfile } = useAuth();

  return (
    <div className="module-box" style={{ maxWidth: '600px', margin: '40px auto', padding: '30px' }}>
      <h1>নতুনপথ</h1>
      {userProfile && (
        <h2 style={{ color: '#1976d2', textAlign: 'center', marginBottom: '20px' }}>
          Welcome, {userProfile.name}! 👋
        </h2>
      )}
      <p style={{ textAlign: 'center', fontSize: '16px', lineHeight: '1.6' }}>
        Welcome to the teen health awareness platform.
        Explore our modules, chat with our AI buddy, and learn about important health topics in a safe and supportive environment.
      </p>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: '#666' }}>
          🎯 <strong>Your Journey Starts Here</strong>
        </p>
        <p style={{ fontSize: '14px', marginTop: '10px' }}>
          Navigate through the menu to access educational modules, chat with our AI buddy, or find guidance for parents.
        </p>
      </div>
    </div>
  );
}

export default Home;

