import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

function Home() {
  const { userProfile } = useAuth();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px',
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.6s ease-out'
    }}>
      {/* Hero Section */}
      <div className="module-box" style={{
        textAlign: 'center',
        background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
        padding: '40px 30px',
        marginBottom: '30px',
        animation: 'fadeInDown 0.8s ease-out'
      }}>
        <img
          src="/images/Friendly Doctor.png"
          alt="Friendly Doctor"
          style={{
            width: '150px',
            height: '150px',
            objectFit: 'contain',
            marginBottom: '15px',
            animation: 'fadeIn 1s ease-out'
          }}
        />
        <h1 style={{
          margin: '10px 0',
          fontSize: '2.5em',
          background: 'linear-gradient(90deg, #1976d2 0%, #64b5f6 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          নতুনপথ
        </h1>

        {userProfile && (
          <h2 style={{
            color: '#1976d2',
            margin: '15px 0',
            fontSize: '1.5em',
            animation: 'slideIn 0.8s ease-out 0.2s both'
          }}>
            Welcome back, {userProfile.name}! 👋
          </h2>
        )}

        <p style={{
          fontSize: '1.1em',
          color: '#555',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '20px auto'
        }}>
          Your trusted companion for teen health awareness and support
        </p>
      </div>

      {/* Quick Actions */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <QuickActionCard
          icon="📚"
          title="Learning Modules"
          description="Explore health topics"
          link="/modules"
          delay="0.3s"
        />
        <QuickActionCard
          icon="🤗"
          title="Melo"
          description="Your friendly health companion"
          link="/faq"
          delay="0.4s"
        />
        <QuickActionCard
          icon="🏥"
          title="Consultation"
          description="Book doctor appointments"
          link="/consultation"
          delay="0.5s"
        />
        <QuickActionCard
          icon="👨‍👩‍👧"
          title="For Parents"
          description="Guidance & tips"
          link="/parents"
          delay="0.6s"
        />
      </div>

      {/* Features Section */}
      <div className="module-box" style={{
        padding: '30px',
        animation: 'fadeIn 0.8s ease-out 0.6s both'
      }}>
        <h2 style={{
          color: '#1976d2',
          textAlign: 'center',
          marginBottom: '25px'
        }}>
          🎯 What We Offer
        </h2>

        <div style={{
          display: 'grid',
          gap: '15px',
          fontSize: '0.95em'
        }}>
          <FeatureItem
            icon="🧠"
            text="Mental Health & Stress Management"
          />
          <FeatureItem
            icon="🌱"
            text="Adolescence & Physical Development"
          />
          <FeatureItem
            icon="💙"
            text="Healthy Relationships & Friendships"
          />
          <FeatureItem
            icon="📱"
            text="Social Media & Peer Pressure Guidance"
          />
          <FeatureItem
            icon="✨"
            text="Self-Esteem & Body Confidence"
          />
          <FeatureItem
            icon="🤝"
            text="Gender Understanding & Respect"
          />
        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        textAlign: 'center',
        marginTop: '30px',
        padding: '20px',
        animation: 'fadeIn 0.8s ease-out 0.8s both'
      }}>
        <p style={{
          fontSize: '1.1em',
          color: '#666',
          marginBottom: '15px'
        }}>
          Ready to start your journey? 🚀
        </p>
        <Link
          to="/modules"
          style={{
            display: 'inline-block',
            padding: '12px 30px',
            background: 'linear-gradient(90deg, #64b5f6 0%, #1976d2 100%)',
            color: 'white',
            borderRadius: '25px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.05em',
            boxShadow: '0 4px 15px rgba(25, 118, 210, 0.3)',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(25, 118, 210, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 15px rgba(25, 118, 210, 0.3)';
          }}
        >
          Explore Modules
        </Link>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInDown {
          from { 
            opacity: 0;
            transform: translateY(-20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}

// Quick Action Card Component
function QuickActionCard({ icon, title, description, link, delay }) {
  return (
    <Link
      to={link}
      style={{ textDecoration: 'none' }}
    >
      <div
        className="module-box"
        style={{
          textAlign: 'center',
          padding: '25px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          animation: `fadeIn 0.6s ease-out ${delay} both`,
          height: '100%'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(33,150,243,0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(33,150,243,0.08)';
        }}
      >
        <div style={{ fontSize: '3em', marginBottom: '10px' }}>{icon}</div>
        <h3 style={{
          color: '#1976d2',
          margin: '10px 0',
          fontSize: '1.2em'
        }}>
          {title}
        </h3>
        <p style={{
          color: '#666',
          fontSize: '0.9em',
          margin: 0
        }}>
          {description}
        </p>
      </div>
    </Link>
  );
}

// Feature Item Component
function FeatureItem({ icon, text }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '12px',
      background: 'rgba(100, 181, 246, 0.1)',
      borderRadius: '8px',
      transition: 'all 0.3s ease'
    }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(100, 181, 246, 0.2)';
        e.currentTarget.style.transform = 'translateX(5px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(100, 181, 246, 0.1)';
        e.currentTarget.style.transform = 'translateX(0)';
      }}
    >
      <span style={{ fontSize: '1.5em', marginRight: '12px' }}>{icon}</span>
      <span style={{ color: '#333' }}>{text}</span>
    </div>
  );
}

export default Home;
